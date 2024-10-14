import { axiosClient } from "@/shared/configs/axios";
import { ILoginRequest, ISignupRequest } from "./types/auth";

export const login = async (
  body: ILoginRequest
): Promise<{ access_token: string }> => {
  const response = await axiosClient.post("/auth/login", body);
  return response.data;
};

export const signup = async (
  body: ISignupRequest
): Promise<{ access_token: string }> => {
  const response = await axiosClient.post("/auth/signup", {});
  return response.data;
};
