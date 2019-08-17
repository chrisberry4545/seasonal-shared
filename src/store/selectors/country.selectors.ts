import { createSelector } from 'reselect';
import {
  IState, ICountryState, ICountry
} from '../../interfaces';

const selectCountryState = (
  state: IState
): ICountryState => state.countryData;

export const selectAreCountriesLoading = createSelector(
  selectCountryState,
  (countryState): boolean => countryState.isLoading
);

export const selectCountries = createSelector(
  selectCountryState,
  (countryState): ICountry[] | undefined => countryState.data
);
