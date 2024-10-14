import { IInvest } from "./types/invest";
import { axiosClient } from "@/shared/configs/axios";

export const fetchFindManyInvest = async (): Promise<IInvest[]> => {
  try {
    const response = await axiosClient.get("/invest");

    return response.data;
  } catch (error) {
    throw error;
  }
};
