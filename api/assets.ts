import { IAssets } from "./types/assets";

export const fetchFindManyAssets = async (): Promise<IAssets[]> => {
  try {
    const response = await fetch(
      `https://track-invest-production.up.railway.app/invest`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
