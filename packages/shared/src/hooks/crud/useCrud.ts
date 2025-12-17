import { useMutation, useQuery } from "@tanstack/react-query";
import type { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import type {
  ApiResponse,
  DeleteByIdProps,
  FetchAllIDParams,
} from "./types";

/* ---------------------------------------
 * DELETE
 * ------------------------------------- */
export const useDeleteById = (
  apiClient: AxiosInstance
) =>
  useMutation<AxiosResponse, AxiosError, DeleteByIdProps>({
    mutationFn: async ({ apiname, id, forceDelete = false }) => {
      if (!id) throw new Error("Invalid ID");

      if (Array.isArray(id)) {
        return apiClient.post(apiname, { ids: id });
      }

      const url = forceDelete
        ? `${apiname}${id}/?force=true`
        : `${apiname}${id}/`;

      return apiClient.delete(url);
    },
  });

/* ---------------------------------------
 * CREATE / UPDATE
 * ------------------------------------- */
export const useCreateUpdate = <
  T extends Record<string, unknown> | FormData
>(
  apiClient: AxiosInstance,
  apiname: string,
  id?: number | string,
  method: "POST" | "PUT" = "POST"
) =>
  useMutation<AxiosResponse, AxiosError, T>({
    mutationFn: async (data) => {
      const url = id ? `${apiname}${id}/` : apiname;

      const headers =
        data instanceof FormData
          ? { "Content-Type": "multipart/form-data" }
          : { "Content-Type": "application/json" };

      if (method === "PUT" || id) {
        return apiClient.put(url, data, { headers });
      }

      return apiClient.post(url, data, { headers });
    },
  });

/* ---------------------------------------
 * FETCH BY ID
 * ------------------------------------- */
const fetchById = async <T>(
  apiClient: AxiosInstance,
  params: FetchAllIDParams
): Promise<T> => {
  const { apiname, id } = params;

  if (!id) return {} as T;

  const url = `${apiname}${id}/`;
  const res = await apiClient.get<ApiResponse<T>>(url);

  return res.data.data;
};

export const useFetchById = <T>(
  apiClient: AxiosInstance,
  params: FetchAllIDParams
) =>
  useQuery<T>({
    queryKey: ["fetchById", params.apiname, params.id],
    queryFn: () => fetchById<T>(apiClient, params),
    enabled: !params.skip,
    refetchOnWindowFocus: false,
  });

/* ---------------------------------------
 * FETCH (AUTH / ONBOARDING)
 * ------------------------------------- */
export const useFetchByIdAuth = <T>(
  authClient: AxiosInstance,
  params: FetchAllIDParams
) =>
  useQuery<T>({
    queryKey: ["fetchByIdAuth", params.apiname, params.id],
    queryFn: () => fetchById<T>(authClient, params),
  });
