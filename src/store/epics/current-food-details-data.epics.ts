import { ofType, ActionsObservable } from 'redux-observable';

import {
  getFoodDetailsData
} from '../../services';

import {
  setCurrentFoodDetailsDataSuccess,
  IFoodItemClicked,
  SET_CURRENT_FOOD_DETAILS_DATA_START
} from '../actions';

import {
  map,
  switchMap
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SharedSeasonalEpic } from './seasonal-epic.type';

export const getCurrentFoodDetailsDataEpic$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_CURRENT_FOOD_DETAILS_DATA_START),
    switchMap((action) => (
      getFoodDetailsData((action as IFoodItemClicked).foodItemId)
    )),
    map((currentFoodData) => setCurrentFoodDetailsDataSuccess(currentFoodData))
  )
);
