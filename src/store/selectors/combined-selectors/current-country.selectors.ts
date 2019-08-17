import { createSelector } from 'reselect';
import {
  selectCountries
} from '../country.selectors';
import {
  selectSettingsCountryId,
  selectSettingsRegionCode
} from '../settings.selectors';
import { ISelectOption, ICountry, IRegion } from '../../../interfaces';

export const selectCurrentCountry = createSelector(
  selectCountries,
  selectSettingsCountryId,
  (countries, countryId): ICountry | undefined => (
    countries && countries.find((country) => country.id === countryId)
  )
);

export const selectCurrentRegion = createSelector(
  selectCurrentCountry,
  selectSettingsRegionCode,
  (currentCountry, regionCode): IRegion | undefined => (
    currentCountry &&
    currentCountry.regions.find((region) => region.code === regionCode)
  )
);

export const selectCountriesSelectOptions = createSelector(
  selectCountries,
  selectSettingsCountryId,
  (countries, countryId): ISelectOption[] | undefined => (
    countries && countries.map((country) => ({
      isSelected: country.id === countryId,
      name: country.name,
      value: country.id
    }))
  )
);

export const selectRegionsSelectOptions = createSelector(
  selectCurrentCountry,
  selectSettingsRegionCode,
  (currentCountry, regionCode): ISelectOption[] | undefined => (
    currentCountry && currentCountry.regions.map((region) => ({
      isSelected: region.code === regionCode,
      name: region.name,
      value: region.code
    }))
  )
);
