import { PokemonDto } from '../interfaces/IPokemon.tsx';
import { BaseUrl, ApiKey } from './constants.tsx';

const BaseGet = (url: string) => {
  return fetch(BaseUrl + url, {
    method: 'GET',
    headers: { 'X-Api-Key': ApiKey },
  });
};

export const GetCards = async (): Promise<PokemonDto[]> => {
  try {
    const response = await BaseGet(`cards`);
    const data = await response.json();
    return data.data as PokemonDto[];
  } catch (error) {
    console.error('Error fetching cards:', error);
    return [];
  }
};
