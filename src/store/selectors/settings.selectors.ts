import { createSelector } from 'reselect';
import {
  IState
} from '../../interfaces';
import { DIET_TYPE } from '../../enums';

export const selectSettingsState = (state: IState) => state.settings;

export const selectSettingsDietType = createSelector(
  selectSettingsState,
  (settings): DIET_TYPE => settings.dietType
);

export const selectSettingsCountryId = createSelector(
  selectSettingsState,
  (settings): string | undefined => settings.selectedCountryId
);

export const selectSettingsRegionCode = createSelector(
  selectSettingsState,
  (settings): string | undefined => settings.selectedRegionCode
);
