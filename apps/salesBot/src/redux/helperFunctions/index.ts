import { useDispatch, useSelector } from "react-redux";
import { persistor, store, type RootState } from "../store";
import moment from "moment";
import { clearAuthData, setAuthData } from "../slices/authSlice";
import { setViewMode } from "../slices/viewModeSlice";
import { setPermissions } from "../slices/permissionSlice";
import type { PermissionType } from "../type/type";

export const useUserDetails = () => {
  return useSelector((state: RootState) => state.auth);
};

export const updateAuthData = (data: Partial<RootState["auth"]>) => {
  const currentUser = store.getState().auth;
  store.dispatch(
    setAuthData({
      ...currentUser,
      ...data,
    })
  );
};

export const updatePermissionData = (
  data: RootState["permission"]["permissions"]
) => {
  store.dispatch(setPermissions(data));
};

export const removeAuthData = (): void => {
  store.dispatch(clearAuthData());
  persistor.purge();
};

export const useIsPlanExpired = (): boolean => {
  return useSelector((state: RootState) => {
    const { subscription } = state.auth;
    if (!subscription || !subscription.end_date) return true;

    const endDateUTC = moment.utc(subscription.end_date);
    const nowUTC = moment.utc();
    return endDateUTC.isBefore(nowUTC);
  });
};

export const useDaysRemaining = (): number => {
  return useSelector((state: RootState) => {
    const { subscription } = state.auth;
    if (!subscription || !subscription.end_date) return 0;
    const endDateUTC = moment.utc(subscription.end_date).startOf("day");
    const nowUTC = moment.utc().startOf("day");
    const diffDays = endDateUTC.diff(nowUTC, "days");
    return diffDays > 0 ? diffDays : 0;
  });
};

export const useViewMode = (module: string) => {
  const dispatch = useDispatch();
  const viewType = useSelector(
    (state: RootState) => state.viewMode[module] ?? "table"
  );

  const setGridView = (value: "card" | "table") =>
    dispatch(setViewMode({ module, viewType: value }));
  return { viewType, setGridView };
};

export const useHasPermission = (
  permission: PermissionType | PermissionType[]
): boolean => {
  const userData = useUserDetails();
  if (userData?.user?.is_admin) {
    return true;
  }

  const { permissions } = useSelector((state: RootState) => state.permission);
  const requiredPermissions = Array.isArray(permission)
    ? permission
    : [permission];

  const hasPermission = requiredPermissions.some((req) => {
    if (req?.module_name === "Default") {
      return true;
    }

    return permissions?.some((module: any) => {
      if (module.module_name === req.module_name) {
        return module.permissions?.some(
          (perm: { name: string; is_select: boolean }) =>
            perm.name === req.permission && perm.is_select === true
        );
      }
      return false;
    });
  });

  return hasPermission;
};

export const hasPermissionFn = (
  required: PermissionType | PermissionType[]
): boolean => {
  const state = store.getState();
  const { permissions } = state.permission;

  const requiredPermissions = Array.isArray(required) ? required : [required];

  return requiredPermissions.some((req) => {
    if (req?.module_name === "Default" && req?.permission === "Default")
      return true;

    return permissions?.some((module: any) => {
      if (module.module_name === req.module_name) {
        return module.permissions?.some(
          (perm: { name: string; is_select: boolean }) =>
            perm.name === req.permission && perm.is_select === true
        );
      }
      return false;
    });
  });
};
