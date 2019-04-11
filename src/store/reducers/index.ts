import {
  currentFoodDetailsDataReducer
} from './current-food-details-data.reducer';

import { currentSeasonDataReducer } from './current-season-data.reducer';

import { allBasicSeasonDataReducer } from './all-basic-season-data.reducer';

import {
  allSeasonsWithFoodDataReducer
} from './all-seasons-with-food-data.reducer';

import { uiReducer } from './ui.reducer';

export const allReducers = {
  allBasicSeasonData: allBasicSeasonDataReducer,
  allSeasonsWithFoodData: allSeasonsWithFoodDataReducer,
  currentFoodDetailsData: currentFoodDetailsDataReducer,
  currentSeasonData: currentSeasonDataReducer,
  ui: uiReducer
};
