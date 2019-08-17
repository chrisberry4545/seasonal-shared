import { ofType, ActionsObservable, StateObservable } from 'redux-observable';

import {
  getFoodDetailsData
} from '../../services';

import {
  setCurrentFoodDetailsSuccess,
  IFoodItemClicked,
  SET_CURRENT_FOOD_DETAILS_START,
  SET_DIET_TYPE,
  setCurrentFoodDetailsOnDietChange,
  SET_CURRENT_FOOD_DETAILS_ON_DIET_CHANGE
} from '../actions';

import {
  map,
  switchMap,
  withLatestFrom,
  filter
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SharedSeasonalEpic } from './seasonal-epic.type';
import { IState } from '../../interfaces';
import { selectSettingsDietType, selectCurrentFoodDetailsId, selectSettingsRegionCode } from '../selectors';
import { DIET_TYPE } from '../../enums';

export const updateFoodDetailsOnDietTypeChangeEpic$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(SET_DIET_TYPE),
    withLatestFrom(state$),
    map(([, state]) => selectCurrentFoodDetailsId(state)),
    filter((currentFoodDetailsId) => Boolean(currentFoodDetailsId)),
    map((currentFoodDetailsId) => (
      setCurrentFoodDetailsOnDietChange(currentFoodDetailsId))
    )
  )
);

export const getCurrentFoodDetailsEpic$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(
      SET_CURRENT_FOOD_DETAILS_START,
      SET_CURRENT_FOOD_DETAILS_ON_DIET_CHANGE
    ),
    withLatestFrom(state$),
    map(([action, state]: [Action, IState]) => ({
      dietType: selectSettingsDietType(state),
      foodItemId: (action as IFoodItemClicked).foodItemId,
      regionCode: selectSettingsRegionCode(state)
    })),
    switchMap(({ dietType, foodItemId, regionCode }) => (
      getFoodDetailsData(
        foodItemId,
        dietType === DIET_TYPE.VEGETARIAN,
        dietType === DIET_TYPE.VEGAN,
        regionCode
      )
    )),
    map((currentFoodData) => setCurrentFoodDetailsSuccess(currentFoodData))
  )
);
