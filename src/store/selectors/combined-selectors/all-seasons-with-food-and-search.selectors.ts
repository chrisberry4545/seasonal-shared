
import { createSelector } from 'reselect';
import { IHydratedSeason, IAllSeasonsGraphData } from '../../../interfaces';
import {
  selectAllSeasonsWithFoodData,
  selectNumberOfAllSeasonsInView
} from '../all-seasons-with-food-data.selectors';
import { getDataThatContainsSearchTerm } from '../../../helpers';
import { selectCurrentSearchTerm } from '../ui.selectors';

export const selectAllSeasonsWithFoodAndSearchAppliedData = createSelector(
  selectAllSeasonsWithFoodData,
  selectCurrentSearchTerm,
  (seasons, searchTerm): IHydratedSeason[] | undefined => (
    seasons && seasons.map((season) => ({
      ...season,
      food: getDataThatContainsSearchTerm(searchTerm, season.food)
    }))
  )
);

export const selectAllSeasonsVisibleFoodData = createSelector(
  selectAllSeasonsWithFoodAndSearchAppliedData,
  selectNumberOfAllSeasonsInView,
  (
    seasonsWithSearchApplied,
    numberOfSeasonsInView
  ): IHydratedSeason[] | undefined => (
    seasonsWithSearchApplied &&
      seasonsWithSearchApplied.slice(0, numberOfSeasonsInView)
        .filter(({ food }) => food && food.length > 0)
    )
);

export const selectFoodInSeasonGraphData = createSelector(
  selectAllSeasonsWithFoodAndSearchAppliedData,
  (allSeasonData): IAllSeasonsGraphData[] | undefined => (
    allSeasonData && allSeasonData.map(({ name, food }) => ({
      'Number of food items in season': food
        ? food.length
        : 0,
      'name': name
    }))
  )
);
