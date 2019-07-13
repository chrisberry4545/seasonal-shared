import {
  FOOD_DETAILS_URL,
  SEASON_URL,
  SEASON_WITH_FOOD_URL,
  SEASON_WITH_RECIPES_URL
} from '././../config';
import { IBaseSeason, IHydratedSeason, IHydratedFood } from '../interfaces';

export const getCurrentSeasonIndex = (): number => new Date().getUTCMonth();

export const getAllSeasons = (): Promise<IBaseSeason[]> => {
  return fetch(SEASON_URL).then((resp) => resp.json());
};

export const getSeasonWithFood = (
  seasonIndex: number
): Promise<IHydratedSeason> => {
  return fetch(
      `${SEASON_WITH_FOOD_URL}/${seasonIndex}`
  ).then((resp) => resp.json());
};

export const getAllSeasonsWithFood = (): Promise<IHydratedSeason[]> => {
  return fetch(SEASON_WITH_FOOD_URL).then((resp) => resp.json());
};

export const getSeasonWithRecipes = (
  seasonIndex: number,
  isVegetarian?: boolean,
  isVegan?: boolean
): Promise<IHydratedSeason> => {
  const query = [
    isVegetarian && 'is-vegetarian',
    isVegan && 'is-vegan'
  ].filter(Boolean).join('&');
  const queryString = query && `?${query}`;
  return fetch(
      `${SEASON_WITH_RECIPES_URL}/${seasonIndex}${queryString}`
  ).then((resp) => resp.json());
};

export const getAllSeasonsWithRecipes = (): Promise<IHydratedSeason[]> => {
  return fetch(SEASON_WITH_RECIPES_URL).then((resp) => resp.json());
};

export const getFoodDetailsData = (
  foodId: string | null
): Promise<IHydratedFood> => {
  return fetch(`${FOOD_DETAILS_URL}/${foodId}`)
    .then((resp) => resp.json());
};
