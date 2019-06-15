import { ofType, ActionsObservable, StateObservable } from 'redux-observable';

import {
  getSeasonWithRecipes
} from '../../services';

import {
  INIT_APP,
  FOOD_DETAILS_SELECT_SEASON,
  SELECT_SEASON,
  setCurrentSeasonWithRecipesStart,
  SET_CURRENT_SEASON_WITH_RECIPES_START,
  setCurrentSeasonWithRecipesSuccess
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

export const getCurrentSeasonWithRecipesStartEpic$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      SELECT_SEASON,
      INIT_APP,
      FOOD_DETAILS_SELECT_SEASON
    ),
    mapTo(setCurrentSeasonWithRecipesStart())
  )
);

export const getCurrentSeasonWithRecipesEpic$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_CURRENT_SEASON_WITH_RECIPES_START),
    withLatestFrom(state$),
    map(([, state]) => selectCurrentSeasonIndex(state)),
    switchMap((seasonIndex) => getSeasonWithRecipes(seasonIndex)),
    map((recipesData) => setCurrentSeasonWithRecipesSuccess(recipesData))
  )
);
