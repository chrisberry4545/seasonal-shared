import {
  currentFoodDetailsDataReducer
} from './current-food-details-data.reducer';

import { currentSeasonDataReducer } from './current-season-data.reducer';

import { allBasicSeasonDataReducer } from './all-basic-season-data.reducer';

import { uiReducer } from './ui.reducer';

export const allReducers = {
  allBasicSeasonData: allBasicSeasonDataReducer,
  currentFoodDetailsData: currentFoodDetailsDataReducer,
  currentSeasonData: currentSeasonDataReducer,
  ui: uiReducer
};
