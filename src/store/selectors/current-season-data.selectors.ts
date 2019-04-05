import { createSelector } from 'reselect';
import {
  IState
} from '../../interfaces';
import {
  IHydratedSeason,
  IFood,
  IRecipe
} from '../../interfaces';

const selectCurrentSeasonDataState = (state: IState) => state.currentSeasonData;

export const selectIsCurrentSeasonLoading = createSelector(
  selectCurrentSeasonDataState,
  (currentSeasonData): boolean => currentSeasonData.isLoading
);

export const selectCurrentSeason = createSelector(
  selectCurrentSeasonDataState,
  (currentSeasonData): IHydratedSeason | undefined => currentSeasonData.data
);

export const selectCurrentSeasonFood = createSelector(
  selectCurrentSeason,
  (currentSeason): IFood[] | undefined => currentSeason && currentSeason.food
);

export const selectCurrentSeasonRecipes = createSelector(
  selectCurrentSeason,
  (currentSeason): IRecipe[] | undefined => currentSeason &&
    currentSeason.recipes
);

export const selectCurrentSeasonRecipesById = (recipeId: string) => (
  createSelector(
    selectCurrentSeasonRecipes,
    (recipes): IRecipe | undefined => recipes && recipes.find(({ id }) => (
      id === recipeId
    ))
  )
);

export const selectCurrentSeasonIndex = createSelector(
  selectCurrentSeasonDataState,
  (currentSeasonData) => currentSeasonData.currentSeasonIndex
);

export const selectCurrentSeasonName = createSelector(
  selectCurrentSeason,
  (currentSeason): string | undefined => currentSeason && currentSeason.name
);
