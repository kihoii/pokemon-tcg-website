import { CardFullResponse } from '../models/ResponseModels/CardFullResponse.tsx';
import { CardShortResponse } from '../models/ResponseModels/CardShortResponse.tsx';
import { BaseUrl, ApiKey } from './constants.tsx';

const baseGet = (url: string) => {
  return fetch(BaseUrl + url, {
    method: 'GET',
    headers: { 'X-Api-Key': ApiKey },
  });
};

export const getCards = async (
  page: number,
  pageSize: number
): Promise<CardShortResponse[]> => {
  try {
    const response = await baseGet(
      `cards?page=` + page + `&pageSize=` + pageSize
    );
    const data = await response.json();
    return data.data as CardShortResponse[];
  } catch (error) {
    console.error('Error fetching cards:', error);
    return [];
  }
};

export const getCardById = async (
  id: string
): Promise<CardFullResponse | undefined> => {
  try {
    const response = await baseGet(`cards/` + id);
    const data = await response.json();
    return data.data as CardFullResponse;
  } catch (error) {
    console.error('Error fetching cards:', error);
    return;
  }
};
