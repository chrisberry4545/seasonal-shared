import { IUiState } from './ui-state.interface';
import {
  IAllBasicSeasonDataState
} from './all-basic-season-data-state.interface';
import { ICurrentSeasonDataState } from './current-season-data-state.interface';

import {
  ICurrentFoodDetailsDataState
} from './current-food-details-data-state.interface';
import {
  IAllSeasonDataWithFoodState
} from './all-season-data-with-food-state.interface';
import { ISettingsState } from './settings-state.interface';

export interface IState {
  allBasicSeasonData: IAllBasicSeasonDataState;
  allSeasonsWithFoodData: IAllSeasonDataWithFoodState;
  currentFoodDetailsData: ICurrentFoodDetailsDataState;
  currentSeasonData: ICurrentSeasonDataState;
  settings: ISettingsState;
  ui: IUiState;
}
