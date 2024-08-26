import { PokemonDto } from '../interfaces/PokemonDto.tsx';
import { LoginRequest } from '../models/RequestModels/LoginRequest.tsx';
import { SignUpRequest } from '../models/RequestModels/SignUpRequest.tsx';
import { setItem } from '../services/localStorageService.tsx';
import { accessApiToken } from '../store/localStorageKeys.tsx';
import { BaseUrl, ApiKey, BaseAPIUrl } from './constants.tsx';

const baseGet = (url: string) => {
  return fetch(BaseUrl + url, {
    method: 'GET',
    headers: { 'X-Api-Key': ApiKey },
  });
};

export const addUser = async (user: SignUpRequest) => {
  try {
    const response = await fetch(BaseAPIUrl + 'users/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();
    console.log(response.ok);
  } catch (error) {
    console.error('Error adding user:', error);
  }
};

export const logIn = async (loginRequest: LoginRequest) => {
  try {
    const response = await fetch(BaseAPIUrl + 'users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginRequest),
    });

    if (response.ok) {
      const data = await response.json();
      setItem<string>(accessApiToken, data.accessToken);
    }
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

export const getCardsByIds = async (ids: string[]): Promise<PokemonDto[]> => {
  try {
    const cardPromises = ids.map((id) => getCardById(id));
    const cards = await Promise.all(cardPromises);
    return cards.filter((card) => card !== undefined) as PokemonDto[];
  } catch (error) {
    console.error('Error fetching cards by IDs:', error);
    return [];
  }
};
