import { ofType, ActionsObservable, StateObservable } from 'redux-observable';

import {
  getSeasonDataBySeasonIndex
} from '../../services';

import {
  SET_CURRENT_SEASON_DATA_START,
  setCurrentSeasonDataSuccess,
  INIT_APP,
  FOOD_DETAILS_SELECT_SEASON,
  setCurrentSeasonDataStart,
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

export const getCurrentSeasonDataStartEpic$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      SELECT_SEASON,
      INIT_APP,
      FOOD_DETAILS_SELECT_SEASON
    ),
    mapTo(setCurrentSeasonDataStart())
  )
);

export const getCurrentSeasonDataEpic$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_CURRENT_SEASON_DATA_START),
    withLatestFrom(state$),
    map(([, state]) => selectCurrentSeasonIndex(state)),
    switchMap((seasonIndex) => getSeasonDataBySeasonIndex(seasonIndex)),
    map((foodData) => setCurrentSeasonDataSuccess(foodData))
  )
);
