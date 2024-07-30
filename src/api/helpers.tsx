import { IPokemon } from "../interfaces/IPokemon.tsx";

const BaseUrl = `https://api.pokemontcg.io/v2/`;
const ApiKey = "cf7723da-bd7a-4b30-ad96-c24ce22fc106";

const BaseGet = (method: string, url: string) => {
  return fetch(BaseUrl + url, {
    method: method,
    headers: { "X-Api-Key": ApiKey },
  });
};

export const GetCards = async (): Promise<IPokemon[]> => {
  try {
    const response = await BaseGet("GET", `cards`);
    const data = await response.json();
    return data.data as IPokemon[];
  } catch (error) {
    console.error("Error fetching cards:", error);
    return [];
  }
};
