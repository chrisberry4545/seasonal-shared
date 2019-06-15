import { ofType, ActionsObservable } from 'redux-observable';

import {
  getAllSeasonsWithRecipes
} from '../../services';

import {
  SET_ALL_SEASONS_WITH_RECIPES_START,
  setAllSeasonsWithRecipesSuccess
} from '../actions';

import {
  map,
  switchMap
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SharedSeasonalEpic } from './seasonal-epic.type';

export const getAllSeasonsWithRecipes$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_ALL_SEASONS_WITH_RECIPES_START),
    switchMap(() => getAllSeasonsWithRecipes()),
    map((seasonData) => setAllSeasonsWithRecipesSuccess(seasonData))
  )
);
