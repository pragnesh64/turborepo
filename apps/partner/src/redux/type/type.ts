export type PermissionType = {
  module_name: string;
  permission: string;
};


interface Tenant {
  id: string;
  business_name: string;
  business_type: string;
  tenant_timezone: string;
}

interface User {
  email: string;
  first_name: string;
  last_name: string;
  is_admin: boolean;
}

interface Subscription {
  id: string;
  start_date: string;
  end_date: string;
  status: "active" | "expired";
}

export interface AuthState {
  is_onboarded: boolean | null;
  access: string | null;
  refresh: string | null;
  onboarding_token: string | null;
  tenant: Tenant | null;
  user: User | null;
  subscription: Subscription | null;
  order_id: string | null;
  plan_id: string | null;
  payment_status: string | null;
}


export interface NotificationState {
  id: string;
  is_read: boolean;
  notification_type: "message" | "system";
  title: string;
  body: string;
  object_id?: string;
  sent_time: string;
}

export interface Notification {
  readNotification: NotificationState[];
  unReadNotification: NotificationState[];
}

export interface PermissionState {
  module_name: string;
  permissions: string;
  is_select: true;
  is_disable: false;
}

export interface Permission {
  permissions: PermissionState[];
}


export interface ViewModeState {
  [moduleName: string]:  "card"| "table"; 
}

