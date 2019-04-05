import { Action } from 'redux';
import { IBaseSeason } from '../../interfaces';

export const SET_ALL_BASIC_SEASON_DATA_START =
  'SET_ALL_BASIC_SEASON_DATA_START';
export function setAllBasicSeasonDataStart(): Action {
  return {
    type: SET_ALL_BASIC_SEASON_DATA_START
  };
}

export interface ISetAllBasicSeasonDataSuccess extends Action {
  seasonData: IBaseSeason[];
}
export const SET_ALL_BASIC_SEASON_DATA_SUCCESS =
  'SET_ALL_BASIC_SEASON_DATA_SUCCESS';
export function setAllBasicSeasonDataSuccess(
  seasonData: IBaseSeason[]
): ISetAllBasicSeasonDataSuccess {
  return {
    seasonData,
    type: SET_ALL_BASIC_SEASON_DATA_SUCCESS
  };
}
