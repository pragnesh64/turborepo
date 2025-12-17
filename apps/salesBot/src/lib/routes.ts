export const ROUTES = {
  HOME: "/home",
  DASHBOARD: "/dashboard",
  PRICING: "/pricing",
  LOGIN: "/login",
  FORGOT_PASSWORD: "/forgot-password",
  OTP_VERIFICATION: "/otp-verification",
  CHANGE_PASSWORD: "/changePassword",
  REGISTER: "/register",
  REGISTER_OTP_VERIFICATION: "/register-otp-verification",
  SENT_EMAIL: "email-sent",
  INVITE: "/invite",
  CHECKOUT: "/checkout",
  SETTING: (() => {
    const base = "/setting";
    return {
      BASE: base,
      PROFILE: `${base}/profile`,
      CHANGE_PASSWORD: `${base}/change-password`,
      PRICING: `${base}/pricing`,
      PLANS: `${base}/plans`,
      INVOICE: `${base}/invoice`,
      TRANSACTION: `${base}/transaction`,
    };
  })(),
  USER: (() => {
    const base = "/user";
    return {
      BASE: base,
      EDIT: (id: string) => `${base}/${id}`,
    };
  })(),
  USER_INVITATION: (() => {
    const base = "/user-invitation";
    const base_invite = "/send-user-invitation";
    return {
      BASE: base,
      SEND_INVITATION: base_invite,
      EDIT: (id: string) => `${base_invite}/${id}`,
    };
  })(),
  WHATSAPP_CONTACT: (() => {
    const base = "/whatsapp-contact";
    return {
      BASE: base,
      CREATE: `${base}/add`,
      EDIT: (id: string) => `${base}/${id}`,
      BULK_UPLOAD: "/bulkUpload-whatsapp-contact",
    };
  })(),
  LINKEDIN_CONTACT: (() => {
    const base = "/linkedin-contact";
    return {
      BASE: base,
      CREATE: `${base}/add`,
      EDIT: (id: string) => `${base}/${id}`,
      BULK_UPLOAD: "/bulkUpload-linkedin-contact",
    };
  })(),
  PRODUCT: (() => {
    const base = "/product";
    return {
      BASE: base,
      CREATE: `${base}/add`,
      EDIT: (id: string) => `${base}/${id}`,
    };
  })(),
  AGENT_CONFIGURATION: (() => {
    const base = "/agent-configuration";
    return {
      BASE: base,
      CREATE: `${base}/add`,
      EDIT: (id: string) => `${base}/${id}`,
    };
  })(),
  KNOWLEDGE_BASE: (() => {
    const base = "/knowledge-base";
    return {
      BASE: base,
      CREATE: `${base}/add`,
      EDIT: (id: string) => `${base}/${id}`,
    };
  })(),
  WHATSAPP_CONVERSATION: (() => {
    const base = "/whatsapp-conversation";
    return {
      BASE: base,
      VIEW: (id: string) => `${base}/${id}`,
    };
  })(),
  INTEGRATION: (() => {
    const base = "/integration";
    return {
      BASE: base,
    };
  })(),
  PLAYGROUND: (() => {
    const base = "/playground";
    return {
      BASE: base,
    };
  })(),
  WHATSAPP_TEMPLATE: (() => {
    const base = "/whatsapp-template";
    return {
      BASE: base,
      CREATE: `${base}/add`,
      EDIT: (id: string) => `${base}/${id}`,
    };
  })(),
  EMAIL_TEMPLATE: (() => {
    const base = "/email-template";
    return {
      BASE: base,
      CREATE: `${base}/add`,
      EDIT: (id: string) => `${base}/${id}`,
      VIEW: (id: string) => `${base}/${id}`,
    };
  })(),
  WHATSAPP_CAMPAIGN: (() => {
    const base = "/whatsapp-campaign";
    return {
      BASE: base,
      CREATE: `${base}/add`,
      EDIT: (id: string) => `${base}/${id}`,
      VIEW: (id: string) => `${base}/${id}`,
    };
  })(),
  EMAIL_CAMPAIGN: (() => {
    const base = "/email-campaign";
    return {
      BASE: base,
      CREATE: `${base}/add`,
      EDIT: (id: string) => `${base}/${id}`,
      VIEW: (id: string) => `${base}/${id}`,
    };
  })(),
  LEAD_MANAGEMENT: (() => {
    const base = "/lead-management";
    return {
      BASE: base,
      CREATE: `${base}/add`,
      EDIT: (id: string) => `${base}/${id}`,
    };
  })(),
  ROLE_PERMISSION: (() => {
    const base = "/role-permissions";
    return {
      BASE: base,
      CREATE: `${base}/add`,
      EDIT: (id: string) => `${base}/${id}`,
      VIEW: (id: string) => `${base}/${id}`,
    };
  })(),
  EMAIL_CONVERSATION: (() => {
    const base = "/email-conversation";
    return {
      BASE: base,
      VIEW: (id: string) => `${base}/${id}`,
    };
  })(),
  CALENDAR: (() => {
    const base = "/calendar";
    return {
      BASE: base,
    };
  })(),
  LINKEDIN_CAMPAIGN_GROUP: (() => {
    const base = "/linkedin-campaign-group";
    return {
      BASE: base,
      CREATE: `${base}/add`,
      EDIT: (id: string) => `${base}/${id}`,
      VIEW: (id: string) => `${base}/${id}`,
    };
  })(),
};
