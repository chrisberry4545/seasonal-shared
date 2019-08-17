import { DIET_TYPE } from '../../enums';

export interface ISettingsState {
  dietType: DIET_TYPE;
  selectedCountryId: string | undefined;
  selectedRegionCode: string | undefined;
}
