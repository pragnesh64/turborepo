export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/user/login/",
    REGISTER: "/user/register/",
    REFRESH_TOKEN: "/user/refresh_token/",
    FORGOT_PASSWORD_TOKEN: (() => {
      const basePath = "/user/forgot_password_token/";
      return {
        BASE: basePath,
        Token: (token: string) => {
          const path = `${basePath}${token}/`;
          return {
            BASE: path,
          };
        },
      };
    })(),
    FORGOT_PASSWORD_OTP: "/user/forgot_password_otp/",
    FORGOT_PASSWORD_OTP_VERIFY: "/user/forgot_password_otp_verify/",
    REGISTER_USER_OTP_VERIFY: "/user/verify_register_otp/",
    REGISTER_USER_RESEND_OTP_VERIFY: "/user/resend_otp/",
    CHANGE_PASSWORD: (() => {
      const basePath = "/user/change_password/";
      return {
        BASE: basePath,
      };
    })(),
    UPDATE_PROFILE: (() => {
      const basePath = "/profile_setting/";
      return {
        BASE: basePath,
      };
    })(),
    GET_PROFILE: (() => {
      const basePath = "/user/retrive_update/";
      return {
        BASE: basePath,
      };
    })(),
  },

  API: {
    GRAPH: (() => {
      const basePath = "/onboard/dashboard/";
      return {
        BASE: basePath,
        USAGE: (start_date: string, end_date: string, type: string) => {
          return `${basePath}ai_metric/?start_date=${start_date}&end_date=${end_date}${
            type === "" ? "" : `&operation=${type}`
          }`;
        },
      };
    })(),
    PRODUCT: (() => {
      const basePath = "/core/product/";
      return {
        BASE: basePath,
        FETCH_ALL: `${basePath}fetch_all`,
      };
    })(),
    PRODUCT_CATEGORY: (() => {
      const baseUrl = "/core/product_category/";
      return {
        BASE: baseUrl,
        FETCH_ALL: `${baseUrl}fetch_all`,
      };
    })(),
    LEAD: (() => {
      const basePath = "/core/lead/";
      return {
        BASE: basePath,
        EXPORT_EXCEL: `${basePath}export_excel/`,
        LEAD_CALENDER_EVENTS: (month: string, year: string) => {
          return `${basePath}?month=${month}&year=${year}`;
        },
      };
    })(),
    DOWNLOAD: (() => {
      const basePath = "/core/download_whatsapp_media/";
      return {
        BASE: (id: any) => {
          return `${basePath}${id}/`;
        },
      };
    })(),
    TIMEZONE: (() => {
      const basePath = "/onboard/timezone/fetch_all";
      return {
        BASE: basePath,
      };
    })(),
    CAMPAIGN: (() => {
      const basePath = "/core/whatsapp_campaign/";
      const base = "/core/campaign/";

      return {
        BASE: basePath,
        CATEGORY: (isFetchAll?: boolean) => {
          const fetchAllPath = isFetchAll ? "fetch_all" : "";
          return `/core/campaign-category/${fetchAllPath}`;
        },
        RETRY: (id: string | undefined) => {
          return `${basePath}${id}/retry/`;
        },
        VIEW_WHATSAPP_CONTACT: (id: string) => `${basePath}${id}/message-list/`,
        VIEW_WHATSAPP_COMPAIGN_SUMMARY: (id: string) =>
          `${basePath}${id}/message-status-summary/`,

        FETCH_WHATSAPP_CONTACT: `${base}fetch_whatsapp_contacts/`,
      };
    })(),
    WHATSAPP_CONTACT_QUEUE: (() => {
      const basePath = "/core/contact_queue/";
      return {
        BASE: basePath,
      };
    })(),
    EMAIL_CAMPAIGN: (() => {
      const basePath = "/core/email_campaign/";
      return {
        BASE: basePath,
        CATEGORY: (isFetchAll?: boolean) => {
          const fetchAllPath = isFetchAll ? "fetch_all" : "";
          return `/core/email_campaign_category/${fetchAllPath}`;
        },
        RETRY: (id: string | undefined) => {
          return `${basePath}${id}/rerun/`;
        },
        FETCH_EMAIL_CONTACT: (id: string) =>
          `${basePath}get_emails/?campaign_id=${id}`,
      };
    })(),
    CHECKUNIQNESS: (() => {
      const basePath = "/user/check-uniqueness/";
      return {
        BASE: basePath,
      };
    })(),
    WHATSAPP_CONTACTS: (() => {
      const basePath = "/core/whatsapp_contact/";
      return {
        BASE: basePath,
        CREATE_MULTIPLE: (isOverWrite: any) => {
          if (typeof isOverWrite === "boolean") {
            return `${basePath}create_multiple/?is_overwrite=${isOverWrite}`;
          }
          return `${basePath}create_multiple/`;
        },
        EXPORT_EXCEL: `${basePath}export_excel/`,
        WHATSAPP_CONTACT_EMAIL: `${basePath}fetch_email_contacts/`,
        FILTER_BY_GROUP: (groupIds: any[] = [], is_filter = true) => {
          const groupsParam = groupIds
            .map((id) => `groups=${encodeURIComponent(id)}`)
            .join("&");

          return `${basePath}fetch_email_contacts/?${groupsParam}&is_filter=${is_filter}`;
        },
      };
    })(),
    CONTACT_GROUP: (() => {
      const basePath = "/core/contact_group/";
      return {
        BASE: basePath,
        FETCH_ALL: `${basePath}fetch_all`,
      };
    })(),
    LINKEDIN_CONTACTS: (() => {
      const basePath = "/core/linkedin_contact/";
      return {
        BASE: basePath,
        CREATE_MULTIPLE: (isOverWrite: any) => {
          if (typeof isOverWrite === "boolean") {
            return `${basePath}create_multiple/?is_overwrite=${isOverWrite}`;
          }
          return `${basePath}create_multiple/`;
        },
        EXPORT_EXCEL: `${basePath}export_excel/`,
      };
    })(),
    CONVERSATIONS: (() => {
      const basePath = "/core/conversation/";
      return {
        BASE: basePath,
        GET_PAGINATED_DATA: (
          page: number = 1,
          page_size: number = 10,
          search = ""
        ) => `${basePath}?page=${page}&page_size=${page_size}&search=${search}`,

        CONTACT_SOCKET: (tenantId: string, accessToken: string) =>
          `${
            import.meta.env.VITE_SOCKET_URL
          }ws/tenant/${tenantId}/conversations/?token=${accessToken}`,
        CONVERSATION_SOCKET: (
          tenantId: string,
          conversationiD: string,
          accessToken: string
        ) =>
          `${
            import.meta.env.VITE_SOCKET_URL
          }ws/tenant/${tenantId}/conversation/${conversationiD}/?token=${accessToken}`,
        PLAYGROUND_SOCKET: (AgentId: string, accessToken: string) =>
          `${
            import.meta.env.VITE_SOCKET_URL
          }ws/playground/${AgentId}/?token=${accessToken}`,
        UPDATE_EXECUTIVE_TAKEOVER: (id: string) => {
          return `${basePath}${id}/`;
        },
        TYPING_INDICATION: (conversation_id: string) => {
          return `${basePath}${conversation_id}/send_whatsapp_type_hints/`;
        },
      };
    })(),
    MESSAGES: (() => {
      const basePath = "/core/message/";
      return {
        BASE: basePath,
        GET_MESSAGES_WITH_PAGINATION: (
          id: string,
          page: number = 1,
          page_size: number = 10
        ) =>
          `${basePath}?conversation=${id}&page=${page}&pageSize=${page_size}`,
      };
    })(),
    KNOWLEDGRBASE: (() => {
      const basePath = "/core/knowledge_base/";
      return {
        BASE: basePath,
        FETCH_ALL: `${basePath}fetch_all`,
        DELETE_MULTIPLE_TEXTS: (knowledgeBaseId: string | undefined) =>
          `${basePath}${knowledgeBaseId}/delete_multiple_texts/`,
        DELETE_MULTIPLE_FILES: (knowledgeBaseId: string | undefined) =>
          `${basePath}${knowledgeBaseId}/delete_multiple_files/`,
        DELETE_MULTIPLE_QUESTION_ANSWER: (
          knowledgeBaseId: string | undefined
        ) => `${basePath}${knowledgeBaseId}/delete_multiple_question_answer/`,
        DELETE_MULTIPLE_WEBSITES: (knowledgeBaseId: string | undefined) =>
          `${basePath}${knowledgeBaseId}/delete_multiple_websites/`,
      };
    })(),
    PROMPT_TEMPLATE: (() => {
      const basePath = "/core/prompt-template/";
      return {
        BASE: basePath,
        AddUpdate: `${basePath}search_filter/`,
      };
    })(),
    WHATSAPP_TEMPLATE: (() => {
      const basePath = "core/whatsapp_template/";
      const updateStatusPath = "core/update_template_status/";
      return {
        BASE: basePath,
        WPTEMP: `/${basePath}`,
        UPDATE_STATUS: (whatsapp_template_id:string) =>  `${updateStatusPath}${whatsapp_template_id}/`,

      };
    })(),
    LINKEDIN_CAMPAIGN_GROUP: (() => {
      const basePath = "/core/linkedin_campaign_group/";
      return {
        BASE: basePath,
      };
    })(),
    PRICING_PLAN: (() => {
      const basePath = "/onboard/plan/";
      return {
        BASE: basePath,
      };
    })(),
    CHANGE_PLAN: (() => {
      const basePath = "/onboard/order/change_plan_on_checkout/";
      return {
        BASE: (orderId: string, planId: string) =>
          `${basePath}?order_id=${orderId}&plan_id=${planId}`,
        UPGRADE_PLAN: "/onboard/upgrade_plan/",
      };
    })(),
    APPLY_COUPON_DISCOUNT: (() => {
      const basePath = "coupon-usage/apply_coupon_discount/";
      return {
        ONBOARDING_COUPON: `/onboard/guest-${basePath}`,
        COUPON: `/onboard/${basePath}`,
      };
    })(),
    REMOVE_COUPON_DISCOUNT: (() => {
      const basePath = "coupon-usage/remove_coupon_discount/";
      return {
        ONBOARDING_COUPON: `/onboard/guest-${basePath}`,
        COUPON: `/onboard/${basePath}`,
      };
    })(),
    CHECKOUT_DATA: (() => {
      const basePath = "order/";
      return {
        BASE: basePath,
      };
    })(),
    RAZORPAY_CREATE: (() => {
      const basePath = "razorpay/";
      return {
        BASE: basePath,
      };
    })(),
    INVOICE: (() => {
      const basePath = "/onboard/invoice/";
      return {
        BASE: basePath,
      };
    })(),
    TRANSACTIONS: (() => {
      const basePath = "/onboard/order/transaction-list/";
      return {
        BASE: basePath,
      };
    })(),
    AGENT_CONFIGURATION: (() => {
      const basePath = "/core/agent-configuration/";
      return {
        BASE: basePath,
        PERSONA: "core/persona",
      };
    })(),
    MESSAGE_CREDIT_CONFIG: (() => {
      const basePath = "/onboard/message-credit-config/";
      return {
        BASE: basePath,
      };
    })(),
    CUSTOM_VARIABLE: (() => {
      const basePath = "custom-variable/";
      return {
        BASE: basePath,
      };
    })(),
    WHATSAPP_INTEGRATION: (() => {
      const basePath = "/core/whatsapp_integration/";
      return {
        BASE: basePath,
      };
    })(),
    LINKEDIN_INTEGRATION: (() => {
      const basePath = "/core/linkedin_integration/";
      return {
        BASE: basePath,
      };
    })(),
    INSTAGRAM_INTEGRATION: (() => {
      const basePath = "/core/instagram_integration/";
      return {
        BASE: basePath,
      };
    })(),
    NOTIFICATION: (() => {
      const basePath = "/core/notification/";
      return {
        BASE: basePath,
        READ: `${basePath}read/`,
        UNREAD: `${basePath}unread/`,
        DELETE_MULTIPLE: `${basePath}delete_multiple/`,
        WEBSOCKET_URL: (tenantId: string, token: string) =>
          `${
            import.meta.env.VITE_SOCKET_URL
          }ws/notifications/${tenantId}/?token=${token}`,
      };
    })(),
    USER_PERMISSION: (() => {
      const basePath = "/user/user-permissions/";
      return {
        BASE: basePath,
      };
    })(),
    TENANTSETUPSTATE: (() => {
      const basePath = "/onboard/tenant_setup_state/";
      return {
        BASE: basePath,
      };
    })(),
    ORDER_COMPLETE_TOPUP: (() => {
      const basePath = "/onboard/order/complete-topup/";
      return {
        BASE: basePath,
      };
    })(),
    ORDER_COMPLETE: (() => {
      const basePath = "/onboard/order/complete/";
      return {
        BASE: basePath,
      };
    })(),
    CHECKOUT: (() => {
      const basePath = "/onboard/checkout/";
      return {
        BASE: basePath,
        ORDERID: (OrderId: string) => `${basePath}${OrderId}`,
      };
    })(),
    GUEST_CHECKOUT: (() => {
      const basePath = "/onboard/guest-checkout/";
      return {
        BASE: basePath,
        ORDERID: (OrderId: string) => `${basePath}${OrderId}`,
      };
    })(),
    CURRENT_PALAN: (() => {
      const basePath = "/onboard/current_plan/";
      return {
        BASE: basePath,
      };
    })(),
    MESSAGE_CREDIT_TOPUP: (() => {
      const basePath = "/onboard/message-credit-topup/";
      return {
        BASE: basePath,
      };
    })(),
    USER: (() => {
      const basePath = "/user/account/";
      return {
        BASE: basePath,
      };
    })(),
    SEND_USER_INVITATION: (() => {
      const basePath = "/user/send-user-invitation/";
      return {
        BASE: basePath,
      };
    })(),
    ACCOUNT_INVITATION: (() => {
      const basePath = "/core/account-invitation/";
      return {
        BASE: basePath,
      };
    })(),
    CANCEL_USER_INVITATION: (() => {
      const basePath = "/user/cancel-user-invitation/";
      return {
        BASE: basePath,
      };
    })(),
    VERIFY_USER_INVITATION: (() => {
      const basePath = "/user/verify-user-invitation/";
      return {
        BASE: basePath,
      };
    })(),
    ACCEPT_USER_INVITATION: (() => {
      const basePath = "/user/accept-user-invitation/";
      return {
        BASE: basePath,
      };
    })(),
    COUNTRY: (() => {
      const basePath = "/onboard/country/fetch_all";
      return {
        BASE: basePath,
      };
    })(),
    STATE: (() => {
      const basePath = "/onboard/state/fetch_all";
      return {
        BASE: basePath,
      };
    })(),
    CITY: (() => {
      const basePath = "/onboard/city/fetch_all";
      return {
        BASE: basePath,
      };
    })(),
    TENANT_CATEGORY: (() => {
      const basePath = "/onboard/tenant-category/";
      return {
        BASE: basePath,
        FETCH_ALL: `${basePath}fetch_all`,
      };
    })(),
    ROLE_PERMISSIONS: (() => {
      const basePath = "/core/tenant-group-mapping/";
      return {
        BASE: basePath,
        FETCH_ALL_PERMISSIONS: "/core/permissions/fetch_all/",
      };
    })(),
    LANGUAGE: (() => {
      const basePath = "/core/language/";
      return {
        BASE: basePath,
        FETCH_ALL: `${basePath}fetch_all`,
      };
    })(),
    CURRENCY: (() => {
      const basePath = "/core/currency/";
      return {
        BASE: basePath,
        FETCH_ALL: `${basePath}fetch_all`,
      };
    })(),
    INTIGRATION_STATUS: (() => {
      const basePath = "/core/integration_status/";
      return {
        BASE: basePath,
      };
    })(),
    EMAIL_TEMPLATE: (() => {
      const basePath = "/core/email_template/";
      return {
        BASE: basePath,
        EMAIL_TEMPLATE_VARIABLE: `/core/email_template_variable/`,
      };
    })(),
    EMAIL_TEMPLATE_FOOTER: (() => {
      const basePath = "/core/email_template_footer/";
      return {
        BASE: basePath,
      };
    })(),
    CALENDLY_INTEGRATION: (() => {
      const basePath = "/core/calendly_integration/";
      return {
        BASE: basePath,
        DISCONNECT: `${basePath}disconnect/`,
      };
    })(),
    SYSTEM_STATUS: (() => {
      const basePath = "/core/system_update/";
      return {
        BASE: basePath,
        WEBSOCKET_URL: (tenantId: string, token: string) =>
          `${
            import.meta.env.VITE_SOCKET_URL
          }ws/system_update/${tenantId}/?token=${token}`,
      };
    })(),
    EMAIL_CONVERSTION_SOCKET: (() => {
      return {
        EMAIL_TRAIL_WEBSOCKET_URL: (
          tenantId: string,
          conversationId: string,
          token: string
        ) =>
          `${
            import.meta.env.VITE_SOCKET_URL
          }ws/tenant/${tenantId}/email_conversation/${conversationId}/trails/?token=${token}`,
        EMAIL_CONVERSATION_WEBSOCKET_URL: (tenantId: string, token: string) =>
          `${
            import.meta.env.VITE_SOCKET_URL
          }ws/tenant/${tenantId}/email_conversations/?token=${token}`,
        EMAIL_WEBSOCKET_URL: (
          tenantId: string,
          trail_id: string,
          token: string
        ) =>
          `${
            import.meta.env.VITE_SOCKET_URL
          }ws/tenant/${tenantId}/trail/${trail_id}/emails/?token=${token}`,
      };
    })(),
    PLAN_CHANGE_REQUEST: (() => {
      const basePath = "/onboard/plan-change-request/";
      return {
        BASE: basePath,
      };
    })(),
    GOOGLE_CALENDER_INTEGRATION: (() => {
      const basePath = "/core/google-calendar-integration/";
      return {
        BASE: basePath,
        DISCONNECT: `${basePath}disconnect/`,
      };
    })(),
    FETCH_EMAIL_CONTACTS: (() => {
      const basePath = "/core/email_conversation/";
      return {
        BASE: basePath,
        GET_PAGINATED_DATA: (
          page: number = 1,
          page_size: number = 10,
          search = ""
        ) => `${basePath}?page=${page}&page_size=${page_size}&search=${search}`,

        UPDATE_EXECUTIVE_TAKE_OVER: (
          updateType: "email_conversation" | "email_trail",
          id: string,
          value: boolean
        ) =>
          `/core/email_update/update_executive_takeover/?${updateType}=${id}&is_executive_takeover=${value}`,
      };
    })(),
    FETCH_TRAIL_CONTACTS: (() => {
      const basePath = "/core/email_trail/";
      const email = "/core/email/";
      return {
        BASE: basePath,
        GET_BY_CONVERSATION_ID: (conversation_id: string) =>
          `${basePath}?email_conversation=${conversation_id}`,
        GET_BY_EMAIL_BY_TRAIL_ID: (
          trail_id: string,
          page: number,
          page_size: number
        ) =>
          `${email}?email_trail=${trail_id}&page=${page}&page_size=${page_size}`,
        GET_PAGINATED_DATA: (
          page: number = 1,
          page_size: number = 10,
          search = ""
        ) => `${basePath}?page=${page}&page_size=${page_size}&search=${search}`,
      };
    })(),
    EMAIL_CONVERSATION_REPLY: (() => {
      const basePath = "/core/email/send_email/";
      return {
        BASE: basePath,
      };
    })(),
  },
} as const;
