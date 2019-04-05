
import { createSelector } from 'reselect';
import { selectCurrentSearchTerm } from '../ui.selectors';
import { selectCurrentSeasonFood, selectCurrentSeasonRecipes } from '../current-season-data.selectors';
import { IFood, IRecipe } from '../../../interfaces';

const getDataThatContainsSearchTerm = <T extends { name: string }>(
  searchTerm: string | undefined,
  data: T[] | undefined
) => data && data.filter(({ name }) => (
  !searchTerm || name.toLowerCase().includes(searchTerm)
));

export const selectVisibleFoodData = createSelector(
  selectCurrentSearchTerm,
  selectCurrentSeasonFood,
  (searchTerm, food): IFood[] | undefined => getDataThatContainsSearchTerm(
    searchTerm,
    food
  )
);

export const selectVisibleRecipeData = createSelector(
  selectCurrentSearchTerm,
  selectCurrentSeasonRecipes,
  (searchTerm, recipes): IRecipe[] | undefined => getDataThatContainsSearchTerm(
    searchTerm,
    recipes
  )
);
