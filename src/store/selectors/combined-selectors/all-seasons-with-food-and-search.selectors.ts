
import { createSelector } from 'reselect';
import { IHydratedSeason } from '../../../interfaces';
import { selectAllSeasonsWithFoodData } from '../all-seasons-with-food-data.selectors';
import { getDataThatContainsSearchTerm } from '../../../helpers';
import { selectCurrentSearchTerm } from '../ui.selectors';

export const selectAllSeasonsVisibleFoodData = createSelector(
  selectAllSeasonsWithFoodData,
  selectCurrentSearchTerm,
  (seasons, searchTerm): IHydratedSeason[] | undefined => (
    seasons && seasons.map((season) => ({
      ...season,
      food: getDataThatContainsSearchTerm(searchTerm, season.food)
    }))
  )
);
