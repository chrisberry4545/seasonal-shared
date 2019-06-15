import { ofType, ActionsObservable, StateObservable } from 'redux-observable';

import {
  getSeasonWithFood
} from '../../services';

import {
  SET_CURRENT_SEASON_WITH_FOOD_START,
  setCurrentSeasonWithFoodSuccess,
  INIT_APP,
  FOOD_DETAILS_SELECT_SEASON,
  setCurrentSeasonWithFoodStart,
  SELECT_SEASON
} from '../actions';

import {
  map,
  switchMap,
  mapTo,
  withLatestFrom
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SharedSeasonalEpic } from './seasonal-epic.type';
import { IState } from '../../interfaces';
import { selectCurrentSeasonIndex } from '../selectors';

export const getCurrentSeasonWithFoodStartEpic$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      SELECT_SEASON,
      INIT_APP,
      FOOD_DETAILS_SELECT_SEASON
    ),
    mapTo(setCurrentSeasonWithFoodStart())
  )
);

export const getCurrentSeasonWithFoodEpic$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_CURRENT_SEASON_WITH_FOOD_START),
    withLatestFrom(state$),
    map(([, state]) => selectCurrentSeasonIndex(state)),
    switchMap((seasonIndex) => getSeasonWithFood(seasonIndex)),
    map((foodData) => setCurrentSeasonWithFoodSuccess(foodData))
  )
);
