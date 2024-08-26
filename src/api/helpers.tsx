import { PokemonDto } from '../interfaces/PokemonDto.tsx';
import { SignUpRequest } from '../models/RequestModels/SignUpRequest.tsx';
import { BaseUrl, ApiKey } from './constants.tsx';

const baseGet = (url: string) => {
  return fetch(BaseUrl + url, {
    method: 'GET',
    headers: { 'X-Api-Key': ApiKey },
  });
};

export const addUser = async (user: SignUpRequest) => {
  try {
    const response = await fetch(
      import.meta.env.VITE_MIRACULOUS_API_URL + 'users/sign-up',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      }
    );
    console.log(response.ok);
  } catch (error) {
    console.error('Error adding user:', error);
  }
};

export const getCards = async (
  page: number,
  pageSize: number
): Promise<PokemonDto[]> => {
  try {
    const response = await baseGet(
      `cards?page=` + page + `&pageSize=` + pageSize
    );
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
