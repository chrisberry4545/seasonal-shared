import { ofType, ActionsObservable } from 'redux-observable';

import {
  getAllSeasonData
} from '../../services';

import {
  INIT_APP,
  SET_ALL_BASIC_SEASON_DATA_START,
  setAllBasicSeasonDataStart,
  setAllBasicSeasonDataSuccess
} from '../actions';

import {
  map,
  switchMap,
  mapTo
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SharedSeasonalEpic } from './seasonal-epic.type';

export const getAllBasicSeasonDataStartEpic$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(INIT_APP),
    mapTo(setAllBasicSeasonDataStart())
  )
);

export const getAllBasicSeasonDataEpic$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_ALL_BASIC_SEASON_DATA_START),
    switchMap(() => getAllSeasonData()),
    map((seasonData) => setAllBasicSeasonDataSuccess(seasonData))
  )
);
