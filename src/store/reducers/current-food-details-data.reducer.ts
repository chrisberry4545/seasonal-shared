import {
  SET_CURRENT_FOOD_DETAILS_DATA_START,
  SET_CURRENT_FOOD_DETAILS_DATA_SUCCESS,
  ISetCurrentFoodDetailsDataSuccess
} from '../actions';
import { ICurrentFoodDetailsDataState } from '../../interfaces';
import { Action } from 'redux';

const getDefaultState = (): ICurrentFoodDetailsDataState => ({
  data: undefined,
  isLoading: true
});

export function currentFoodDetailsDataReducer(
  state = getDefaultState(),
  action: Action
): ICurrentFoodDetailsDataState {
  switch (action.type) {
    case SET_CURRENT_FOOD_DETAILS_DATA_START:
      return {
        ...state,
        isLoading: true
      };
    case SET_CURRENT_FOOD_DETAILS_DATA_SUCCESS:
      return {
        ...state,
        data: (action as ISetCurrentFoodDetailsDataSuccess)
          .currentFoodDetailsData,
        isLoading: false
      };
    default:
      return state;
  }
}
