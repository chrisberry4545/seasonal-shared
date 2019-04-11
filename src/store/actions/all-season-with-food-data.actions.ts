import { Action } from 'redux';
import { IHydratedSeason } from '../../interfaces';

export const SET_ALL_SEASONS_WITH_FOOD_DATA_START =
  'SET_ALL_SEASONS_WITH_FOOD_DATA_START';
export function setAllSeasonsWithFoodDataStart(): Action {
  return {
    type: SET_ALL_SEASONS_WITH_FOOD_DATA_START
  };
}

export interface ISetAllSeasonsWithFoodDataSuccess extends Action {
  seasonData: IHydratedSeason[];
}
export const SET_ALL_SEASONS_WITH_FOOD_DATA_SUCCESS =
  'SET_ALL_SEASONS_WITH_FOOD_DATA_SUCCESS';
export function setAllSeasonsWithFoodDataSuccess(
  seasonData: IHydratedSeason[]
): ISetAllSeasonsWithFoodDataSuccess {
  return {
    seasonData,
    type: SET_ALL_SEASONS_WITH_FOOD_DATA_SUCCESS
  };
}
