import { ofType, ActionsObservable } from 'redux-observable';

import {
  getAllSeasons
} from '../../services';

import {
  INIT_SETTINGS,
  SET_ALL_BASIC_SEASONS_START,
  setAllSeasonsStart,
  setAllBasicSeasonsSuccess,
  SET_REGION
} from '../actions';

import {
  map,
  switchMap,
  mapTo
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SharedSeasonalEpic } from './seasonal-epic.type';

export const getAllBasicSeasonsStartEpic$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      INIT_SETTINGS,
      SET_REGION
    ),
    mapTo(setAllSeasonsStart())
  )
);

export const getAllBasicSeasonsEpic$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_ALL_BASIC_SEASONS_START),
    switchMap(() => getAllSeasons()),
    map((seasonData) => setAllBasicSeasonsSuccess(seasonData))
  )
);
