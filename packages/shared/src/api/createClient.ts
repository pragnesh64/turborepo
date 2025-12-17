import axios from "axios";

const commonHeaders = {
  "Content-Type": "application/json",
  "ngrok-skip-browser-warning": "true",
};

export const createClient = (baseURL: string) => {
  return axios.create({
    baseURL,
    headers: commonHeaders,
  });
};
