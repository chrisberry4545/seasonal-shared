import { ActionsObservable, ofType, StateObservable } from 'redux-observable';

import {
  INIT_APP,
  getCountriesStart,
  getCountriesSuccess,
  GET_COUNTRIES_SUCCESS,
  showLocationPopup
} from '../actions';
import {
  map,
  switchMap,
  mapTo,
  withLatestFrom,
  filter
} from 'rxjs/operators';
import { Action } from 'redux';
import { Observable } from 'rxjs';
import { SharedSeasonalEpic } from './seasonal-epic.type';
import { getCountries } from '../../services';
import { IState } from '../../interfaces';
import { selectSettingsRegionCode, selectCountries } from '../selectors';

export const getCountriesStart$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(INIT_APP),
    mapTo(getCountriesStart())
  )
);

export const getCountries$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>
): Observable<Action> => (
  actions$.pipe(
    ofType(INIT_APP),
    switchMap(() => getCountries()),
    map((countries) => getCountriesSuccess(countries))
  )
);

export const showCountriesPopup$: SharedSeasonalEpic = (
  actions$: ActionsObservable<Action>,
  state$: StateObservable<IState>
): Observable<Action> => (
  actions$.pipe(
    ofType(GET_COUNTRIES_SUCCESS),
    withLatestFrom(state$),
    map(([, state]) => ({
      countrys: selectCountries(state),
      selectedRegionCode: selectSettingsRegionCode(state)
    })),
    filter(({ countrys, selectedRegionCode }) => (
      !countrys || !selectedRegionCode || countrys.every((country) => (
        country.regions.every((region) => region.code !== selectedRegionCode))
      )
    )),
    mapTo(showLocationPopup())
  )
);
