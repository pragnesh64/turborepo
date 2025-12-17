import { useCallback, useEffect, useRef, useState } from "react";
import { Select, Spin, type SelectProps } from "antd";
import axios, { AxiosResponse } from "axios";

export type OptionType = {
  Id: string;
  Value: string;
  displayValue?: string;
  isNew?: boolean;
};

export interface InfiniteDropdownProps<M extends boolean = false> {
  apiUrl?: string;
  pageSize?: number;
  multiple?: M;
  value?: M extends true ? OptionType[] | null : OptionType | null;
  onChange?: (
    value: M extends true ? OptionType[] | null : OptionType | null
  ) => void;
  options?: OptionType[];
  isCreatable?: boolean;
  onCreate?: (label: string) => Promise<any>;
  formLabel?: string;
  placeholder?: string;
  errorMessage?: string;
  isRequired?: boolean;
  filterValue?: Record<string, unknown>;
  mapResponseToOptions?: (response: AxiosResponse) => OptionType[];
  disabled?: boolean;
  className?: string;
}

const InfiniteDropdown = <M extends boolean = false>(
  props: InfiniteDropdownProps<M>
) => {
  const {
    apiUrl,
    pageSize = 10,
    value,
    onChange,
    multiple = false,
    isCreatable = false,
    onCreate,
    formLabel,
    placeholder = "Select...",
    errorMessage,
    isRequired = false,
    filterValue,
    options: staticOptions,
    mapResponseToOptions = (res) =>
      res.data.data.map((item: any) => ({
        Id: item.value,
        Value: item.label,
      })),
    disabled = false,
    className = "",
  } = props;

  const [options, setOptions] = useState<OptionType[]>(staticOptions || []);
  const [loading, setLoading] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const pageRef = useRef(1);
  const hasMoreRef = useRef(true);
  const searchRef = useRef("");
  const abortControllerRef = useRef<AbortController | null>(null);

  const isStatic = !!staticOptions;

  // Store the mapper function in a ref to maintain stable reference
  const mapResponseRef = useRef(mapResponseToOptions);
  useEffect(() => {
    mapResponseRef.current = mapResponseToOptions;
  }, [mapResponseToOptions]);

  // -------------------
  // Fetching Options
  // -------------------
  const loadOptions = useCallback(
    async (page = 1, search = "") => {
      if (isStatic || !apiUrl || loading || !hasMoreRef.current) return;

      // Cancel previous request if still pending
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      abortControllerRef.current = new AbortController();
      setLoading(true);

      try {
        const res = await axios.get(apiUrl, {
          params: {
            page,
            page_size: pageSize,
            ...(search ? { search } : {}),
            ...(filterValue ?? {}),
          },
          signal: abortControllerRef.current.signal,
        });

        const newOptions = mapResponseRef.current(res);

        setOptions((prev) =>
          page === 1 ? newOptions : [...prev, ...newOptions]
        );

        hasMoreRef.current = newOptions.length >= pageSize;
        if (hasMoreRef.current) pageRef.current = page;
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error("Error loading options:", error);
        }
      } finally {
        setLoading(false);
        abortControllerRef.current = null;
      }
    },
    [apiUrl, pageSize, filterValue, isStatic, loading]
  );

  // -------------------
  // Initialize / Filter update
  // -------------------
  useEffect(() => {
    if (isStatic) {
      setOptions(staticOptions || []);
      return;
    }

    pageRef.current = 1;
    hasMoreRef.current = true;
    searchRef.current = "";
    setOptions([]);

    loadOptions(1, "");

    // Cleanup: abort pending requests on unmount
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiUrl, filterValue, isStatic]);

  // -------------------
  // Remote Search
  // -------------------
  const handleSearch = useCallback(
    (text: string) => {
      searchRef.current = text;

      if (isStatic) {
        // Local filtering for static options
        const filtered = (staticOptions || []).filter((opt) =>
          opt.Value.toLowerCase().includes(text.toLowerCase())
        );
        setOptions(filtered);
        return;
      }

      pageRef.current = 1;
      hasMoreRef.current = true;
      loadOptions(1, text);
    },
    [isStatic, staticOptions, loadOptions]
  );

  // -------------------
  // Infinite Scroll
  // -------------------
  const onPopupScroll: SelectProps["onPopupScroll"] = useCallback(
    (e: React.UIEvent<HTMLElement>) => {
      if (isStatic || loading || !hasMoreRef.current) return;

      const target = e.target as HTMLElement;
      if (target.scrollTop + target.clientHeight >= target.scrollHeight - 5) {
        loadOptions(pageRef.current + 1, searchRef.current);
      }
    },
    [isStatic, loading, loadOptions]
  );

  // -------------------
  // Handle Selection with Create Support
  // -------------------
  const handleChange = useCallback(
    async (val: string | string[], option: any) => {
      const opt = Array.isArray(option) ? option[option.length - 1] : option;

      // CREATE FLOW
      if (isCreatable && opt?.isNew && onCreate) {
        setIsCreating(true);

        try {
          const res = await onCreate(opt.Value);

          // Extract the ID from response (supports multiple response structures)
          const newId = res?.data?.data?.id || res?.data?.id || res?.id;

          if (!newId) {
            console.error("Failed to extract ID from create response:", res);
            return;
          }

          const newOption: OptionType = {
            Id: String(newId),
            Value: opt.Value,
          };

          // Refresh dropdown options
          pageRef.current = 1;
          hasMoreRef.current = true;
          searchRef.current = "";

          if (apiUrl) {
            await loadOptions(1, "");
          } else if (isStatic) {
            // For static options, add the new option to the list
            setOptions((prev) => [...prev, newOption]);
          }

          // Update value
          if (multiple) {
            const normalValues = (val as string[])
              .filter((x) => x !== opt.Id)
              .map((id) => options.find((o) => o.Id === id))
              .filter(Boolean) as OptionType[];

            onChange?.([...normalValues, newOption] as M extends true
              ? OptionType[]
              : OptionType | null);
          } else {
            onChange?.(
              newOption as M extends true ? OptionType[] : OptionType | null
            );
          }
        } catch (error) {
          console.error("Error creating new option:", error);
        } finally {
          setIsCreating(false);
        }

        return;
      }

      // NORMAL SELECTION
      if (multiple) {
        const selectedOptions = (val as string[])
          .map((id) => options.find((o) => o.Id === id))
          .filter(Boolean) as OptionType[];

        onChange?.(
          selectedOptions as M extends true ? OptionType[] : OptionType | null
        );
      } else {
        const selected = options.find((o) => o.Id === (val as string)) ?? null;
        onChange?.(
          selected as M extends true ? OptionType[] : OptionType | null
        );
      }
    },
    [
      isCreatable,
      onCreate,
      multiple,
      options,
      onChange,
      apiUrl,
      isStatic,
      loadOptions,
    ]
  );

  // -------------------
  // Creatable Option
  // -------------------
  const creatableOptions =
    isCreatable &&
    searchRef.current &&
    !options.some(
      (o) => o.Value.toLowerCase() === searchRef.current.toLowerCase()
    )
      ? [
          {
            Id: `__create__${searchRef.current}`,
            Value: searchRef.current,
            displayValue: `Create "${searchRef.current}"`,
            isNew: true,
          } as OptionType,
        ]
      : [];

  // -------------------
  // Render
  // -------------------
  return (
    <div className={`w-full ${className}`}>
      {formLabel && (
        <label className="mb-1 block text-sm font-medium text-gray-700">
          {formLabel}
          {isRequired && <span className="ml-1 text-red-500">*</span>}
        </label>
      )}

      <Select
        className="w-full h-10"
        placeholder={placeholder}
        // showSearch
        allowClear
        style={{ borderRadius: 8 }}
        mode={multiple ? "multiple" : undefined}
        filterOption={false}
        onSearch={handleSearch}
        onPopupScroll={onPopupScroll}
        loading={loading || isCreating}
        disabled={disabled || isCreating}
        value={
          multiple
            ? (value as OptionType[] | null)?.map((v) => v.Id) ?? []
            : (value as OptionType | null)?.Id ?? undefined
        }
        onChange={handleChange}
        notFoundContent={
          loading || isCreating ? <Spin size="small" /> : "No options found"
        }
        options={[
          ...options.map((o) => ({
            value: o.Id,
            label: o.displayValue ?? o.Value,
            Value: o.Value, // ✅ ADD THIS
          })),
          ...creatableOptions.map((o) => ({
            value: o.Id,
            label: o.displayValue ?? o.Value,
            Value: o.Value, // ✅ ADD THIS
            isNew: o.isNew,
          })),
        ]}
      />

      {errorMessage && (
        <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default InfiniteDropdown;
