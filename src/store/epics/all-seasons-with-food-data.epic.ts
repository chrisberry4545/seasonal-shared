import { ofType, ActionsObservable } from 'redux-observable';

import {
  getAllSeasonDataWithFood
} from '../../services';

import {
  SET_ALL_SEASONS_WITH_FOOD_DATA_START,
  setAllSeasonsWithFoodDataSuccess
} from '../actions';

import {
  map,
  switchMap
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SharedSeasonalEpic } from './seasonal-epic.type';

export const getAllSeasonsWithFood$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_ALL_SEASONS_WITH_FOOD_DATA_START),
    switchMap(() => getAllSeasonDataWithFood()),
    map((seasonData) => setAllSeasonsWithFoodDataSuccess(seasonData))
  )
);
