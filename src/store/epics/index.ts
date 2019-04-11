import {
  getCurrentSeasonDataStartEpic$,
  getCurrentSeasonDataEpic$
} from './current-season-data.epics';

import { initAppEpic$ } from './init.epics';

import {
  getAllBasicSeasonDataStartEpic$,
  getAllBasicSeasonDataEpic$
} from './all-basic-season-data.epics';

import {
  getAllSeasonsWithFood$
} from './all-seasons-with-food-data.epic';

import {
  getCurrentFoodDetailsDataEpic$
} from './current-food-details-data.epics';

export const rootEpics = [
  initAppEpic$,
  getCurrentSeasonDataStartEpic$,
  getCurrentSeasonDataEpic$,
  getAllBasicSeasonDataStartEpic$,
  getAllBasicSeasonDataEpic$,
  getAllSeasonsWithFood$,
  getCurrentFoodDetailsDataEpic$
];

export * from './seasonal-epic.type';
