import {
  getCurrentSeasonWithFoodStartEpic$,
  getCurrentSeasonWithFoodEpic$
} from './current-season-with-food.epics';

import {
  getCurrentSeasonWithRecipesStartEpic$,
  getCurrentSeasonWithRecipesEpic$
} from './current-season-with-recipes.epics';

import { initAppEpic$ } from './init.epics';

import {
  getAllBasicSeasonsStartEpic$,
  getAllBasicSeasonsEpic$
} from './all-basic-season.epics';

import {
  getAllSeasonsWithFood$
} from './all-seasons-with-food.epic';

import {
  getAllSeasonsWithRecipes$
} from './all-seasons-with-recipes.epic';

import {
  getCurrentFoodDetailsEpic$,
  updateFoodDetailsOnDietTypeChangeEpic$
} from './current-food-details.epics';
import { setSeasonSelectedSeasonName$ } from './season-name.epics';
import {
  getCountriesStart$,
  getCountries$,
  onSelectOneRegionCountry$,
  showCountriesPopup$
} from './country.epics';

export const rootEpics = [
  initAppEpic$,
  getCurrentSeasonWithFoodStartEpic$,
  getCurrentSeasonWithFoodEpic$,
  getCurrentSeasonWithRecipesStartEpic$,
  getCurrentSeasonWithRecipesEpic$,
  getAllBasicSeasonsStartEpic$,
  getAllBasicSeasonsEpic$,
  getAllSeasonsWithFood$,
  getAllSeasonsWithRecipes$,
  getCurrentFoodDetailsEpic$,
  updateFoodDetailsOnDietTypeChangeEpic$,
  setSeasonSelectedSeasonName$,
  getCountriesStart$,
  getCountries$,
  onSelectOneRegionCountry$,
  showCountriesPopup$
];

export * from './seasonal-epic.type';
