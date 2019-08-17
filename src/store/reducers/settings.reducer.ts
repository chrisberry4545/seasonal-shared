import { ISettingsState } from '../../interfaces';
import { Action } from 'redux';
import {
  SET_DIET_TYPE,
  ISetDietType,
  INIT_SETTINGS,
  IInitSettings,
  SET_COUNTRY,
  SET_REGION,
  ISetCountryAction,
  ISetRegionAction
} from '../actions';
import { DIET_TYPE } from '../../enums';

const getDefaultState = (): ISettingsState => ({
  dietType: DIET_TYPE.ALL,
  selectedCountryId: undefined,
  selectedRegionCode: undefined
});

export function settingsReducer(
  state: ISettingsState = getDefaultState(),
  action: Action
) {
  switch (action.type) {
    case INIT_SETTINGS:
      return {
        ...state,
        ...(action as IInitSettings).settings
      };
    case SET_DIET_TYPE:
      return {
        ...state,
        dietType: (action as ISetDietType).dietType
      };
    case SET_COUNTRY:
      return {
        ...state,
        selectedCountryId: (action as ISetCountryAction).countryId
      };
    case SET_REGION:
      return {
        ...state,
        selectedRegionCode: (action as ISetRegionAction).regionCode
      };
    default:
      return state;
  }
}
