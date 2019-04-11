import {
  SET_ALL_SEASONS_WITH_FOOD_DATA_START,
  SET_ALL_SEASONS_WITH_FOOD_DATA_SUCCESS,
  ISetAllSeasonsWithFoodDataSuccess
} from '../actions';
import { IAllSeasonDataWithFoodState } from '../../interfaces';
import { Action } from 'redux';

const getDefaultState = (): IAllSeasonDataWithFoodState => ({
  data: undefined,
  isLoading: true
});

export function allSeasonsWithFoodDataReducer(
  state = getDefaultState(),
  action: Action
): IAllSeasonDataWithFoodState {
  switch (action.type) {
    case SET_ALL_SEASONS_WITH_FOOD_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    case SET_ALL_SEASONS_WITH_FOOD_DATA_SUCCESS:
      return {
        ...state,
        data: (action as ISetAllSeasonsWithFoodDataSuccess).seasonData,
        isLoading: false
      };
    default:
      return state;
  }
}
