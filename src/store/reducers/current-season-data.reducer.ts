import {
  SET_CURRENT_SEASON_DATA_START,
  SET_CURRENT_SEASON_DATA_SUCCESS,
  ISetCurrentSeasonDataSuccess,
  FOOD_DETAILS_SELECT_SEASON,
  ISelectSeason,
  SELECT_SEASON
} from '../actions';
import { ICurrentSeasonDataState } from '../../interfaces';
import { Action } from 'redux';
import { getCurrentSeasonIndex } from '../../services';

const getDefaultState = (): ICurrentSeasonDataState => ({
  currentSeasonIndex: getCurrentSeasonIndex(),
  data: undefined,
  isLoading: true
});

export function currentSeasonDataReducer(
  state = getDefaultState(),
  action: Action
): ICurrentSeasonDataState {
  switch (action.type) {
    case SET_CURRENT_SEASON_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    case SET_CURRENT_SEASON_DATA_SUCCESS:
      return {
        ...state,
        data: (action as ISetCurrentSeasonDataSuccess).currentSeasonData,
        isLoading: false
      };
    case SELECT_SEASON:
    case FOOD_DETAILS_SELECT_SEASON:
      return {
        ...state,
        currentSeasonIndex: (action as ISelectSeason).seasonIndex
      };
    default:
      return state;
  }
}
