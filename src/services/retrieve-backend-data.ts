import {
  FOOD_DETAILS_DATA_URL,
  SEASON_DATA_URL
} from '././../config';
import { IBaseSeason, IHydratedSeason, IHydratedFood } from '../interfaces';

export const getAllSeasonData = (): Promise<IBaseSeason[]> => {
  return fetch(SEASON_DATA_URL).then((resp) => resp.json());
};

export const getSeasonDataBySeasonIndex = (
  seasonIndex: number
): Promise<IHydratedSeason> => {
  return fetch(
      `${SEASON_DATA_URL}/${seasonIndex}`
  ).then((resp) => resp.json());
};

export const getCurrentSeasonIndex = (): number => new Date().getUTCMonth();

export const getFoodDetailsData = (
  foodId: string | null
): Promise<IHydratedFood> => {
  return fetch(`${FOOD_DETAILS_DATA_URL}/${foodId}`)
    .then((resp) => resp.json());
};
