import { IUiState } from './ui-state.interface';
import { ISeasonDataState } from './season-data-state.interface';
import { ICurrentSeasonDataState } from './current-season-data-state.interface';

import {
  ICurrentFoodDetailsDataState
} from './current-food-details-data-state.interface';

export interface IState {
  allBasicSeasonData: ISeasonDataState;
  currentFoodDetailsData: ICurrentFoodDetailsDataState;
  currentSeasonData: ICurrentSeasonDataState;
  ui: IUiState;
}
