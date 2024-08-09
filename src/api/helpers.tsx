import { PokemonDto } from '../interfaces/PokemonDto.tsx';
import { BaseUrl, ApiKey } from './constants.tsx';

const baseGet = (url: string) => {
  return fetch(BaseUrl + url, {
    method: 'GET',
    headers: { 'X-Api-Key': ApiKey },
  });
};

export const getCards = async (): Promise<PokemonDto[]> => {
  try {
    const response = await baseGet(`cards`);
    const data = await response.json();
    return data.data as PokemonDto[];
  } catch (error) {
    console.error('Error fetching cards:', error);
    return [];
  }
};

export const getCardById = async (
  id: string
): Promise<PokemonDto | undefined> => {
  try {
    const response = await baseGet(`cards/` + id);
    const data = await response.json();
    return data.data as PokemonDto;
  } catch (error) {
    console.error('Error fetching cards:', error);
    return;
  }
};
