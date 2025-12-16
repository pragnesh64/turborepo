export interface FieldErrorMap {
    [key: string]: string;
}

interface AxiosErrorResponse {
    status: number;
    data: {
        message?: string | Array<Record<string, string>>;
    };
}

interface AxiosError {
    response?: AxiosErrorResponse;
    message?: string;
}

type UnknownError = AxiosError | Error | unknown;

// Type guard to check if error has response property (AxiosError)
const isAxiosError = (err: UnknownError): err is AxiosError => {
    return typeof err === 'object' && err !== null && 'response' in err;
};

// Type guard to check if error has message property
const hasMessage = (err: UnknownError): err is { message: string } => {
    return typeof err === 'object' && err !== null && 'message' in err && typeof (err as { message: unknown }).message === 'string';
};

export const getFieldErrors = (error: UnknownError): FieldErrorMap | null => {
    if (!isAxiosError(error) || !error.response) {
        return null;
    }

    const message = error.response.data?.message;

    const fieldErrors: FieldErrorMap = {};

    // CASE 1: message = array of objects
    if (Array.isArray(message)) {
        message.forEach((errObj) => {
            if (typeof errObj === "object" && errObj !== null) {
                Object.entries(errObj).forEach(([field, msg]) => {
                    if (typeof msg === "string") fieldErrors[field] = msg;
                });
            }
        });

        return Object.keys(fieldErrors).length ? fieldErrors : null;
    }

    // CASE 2: message = "Error Message"
    if (typeof message === "string") {
        return null; // no field errors, just general error
    }

    return null;
};

export const getApiErrorMessage = (error: UnknownError): string => {
    if (!isAxiosError(error) || !error.response) {
        if (hasMessage(error) && error.message === "Network Error") {
            return "Network error — Please check your internet connection.";
        }

        if (hasMessage(error) && error.message.includes("timeout")) {
            return "Request timed out — Please try again.";
        }

        if (hasMessage(error) && error.message.includes("CORS")) {
            return "CORS error — server blocked the request.";
        }

        return hasMessage(error) ? error.message : "Unable to reach the server.";
    }
    // ✔ Response exists → backend returned an error
    const status = error.response.status;
    const data = error.response.data;

    // Handler for string messages
    if (typeof data?.message === "string") return data.message;

    // Specific status codes
    switch (status) {
        case 400:
            return "Bad Request — Please check your inputs.";
        case 401:
            return "Unauthorized — Please log in again.";
        case 403:
            return "You do not have permission to perform this action.";
        case 404:
            return "Resource not found.";
        case 408:
            return "Request timeout — Please try again.";
        case 413:
            return "File too large — upload a smaller file.";
        case 429:
            return "Too many requests — Please slow down.";
        default:
            if (status >= 500 && status <= 599) {
                return "An internal server error occurred. Please try again later.";
            }
            return "An error occurred while processing your request.";
    }
};
