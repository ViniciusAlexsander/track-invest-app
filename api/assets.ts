import { IAssets } from "./types/assets";

export const fetchFindManyAssets = async (): Promise<IAssets[]> => {
  try {
    const response = await fetch(
      `https://7201-2804-14c-5b95-95d6-8c9c-acee-a172-6f50.ngrok-free.app/invest`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
