
import { createSelector } from 'reselect';
import { IHydratedSeason } from '../../../interfaces';
import {
  selectAllSeasonsWithFoodData,
  selectNumberOfAllSeasonsInView
} from '../all-seasons-with-food-data.selectors';
import { getDataThatContainsSearchTerm } from '../../../helpers';
import { selectCurrentSearchTerm } from '../ui.selectors';

export const selectAllSeasonsVisibleFoodData = createSelector(
  selectAllSeasonsWithFoodData,
  selectCurrentSearchTerm,
  selectNumberOfAllSeasonsInView,
  (
    seasons,
    searchTerm,
    numberOfSeasonsInView
  ): IHydratedSeason[] | undefined => (
    seasons && seasons.slice(0, numberOfSeasonsInView).map((season) => ({
      ...season,
      food: getDataThatContainsSearchTerm(searchTerm, season.food)
    })).filter(({ food }) => food && food.length > 0)
  )
);
