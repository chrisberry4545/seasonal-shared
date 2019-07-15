import { ISettingsState } from '../../interfaces';
import { Action } from 'redux';
import { SET_DIET_TYPE, ISetDietType, INIT_SETTINGS, IInitSettings } from '../actions';
import { DIET_TYPE } from '../../enums';

const getDefaultState = (): ISettingsState => ({
  dietType: DIET_TYPE.ALL
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
    default:
      return state;
  }
}
