import {
  currentFoodDetailsReducer
} from './current-food-details.reducer';

import { currentSeasonWithFoodReducer } from './current-season.reducer';

import { allBasicSeasonReducer } from './all-basic-seasons.reducer';

import {
  allSeasonsReducer
} from './all-seasons.reducer';

import { uiReducer } from './ui.reducer';

export const allReducers = {
  allBasicSeasonData: allBasicSeasonReducer,
  allSeasonsWithFoodData: allSeasonsReducer,
  currentFoodDetailsData: currentFoodDetailsReducer,
  currentSeasonData: currentSeasonWithFoodReducer,
  ui: uiReducer
};
