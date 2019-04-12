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

export const INCREASE_NUMBER_OF_ALL_FOOD_SEASONS_IN_VIEW =
  'INCREASE_NUMBER_OF_ALL_FOOD_SEASONS_IN_VIEW';
export function increaseNumberOfAllFoodSeasonsInView(): Action {
  return {
    type: INCREASE_NUMBER_OF_ALL_FOOD_SEASONS_IN_VIEW
  };
}
