import { ofType, ActionsObservable } from 'redux-observable';

import {
  getFoodDetailsData
} from '../../services';

import {
  setCurrentFoodDetailsSuccess,
  IFoodItemClicked,
  SET_CURRENT_FOOD_DETAILS_START
} from '../actions';

import {
  map,
  switchMap
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SharedSeasonalEpic } from './seasonal-epic.type';

export const getCurrentFoodDetailsEpic$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_CURRENT_FOOD_DETAILS_START),
    switchMap((action) => (
      getFoodDetailsData((action as IFoodItemClicked).foodItemId)
    )),
    map((currentFoodData) => setCurrentFoodDetailsSuccess(currentFoodData))
  )
);
