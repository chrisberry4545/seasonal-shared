
import { createSelector } from 'reselect';
import { IState, IHydratedSeason } from '../../interfaces';

const selectAllSeasonsWithFoodDataState = (
  state: IState
) => state.allSeasonsWithFoodData;

export const selectIsAllSeasonsWithFoodDataLoading = createSelector(
  selectAllSeasonsWithFoodDataState,
  (allSeasonsWithFoodData): boolean => allSeasonsWithFoodData.isLoading
);

export const selectAllSeasonsWithFoodData = createSelector(
  selectAllSeasonsWithFoodDataState,
  (allSeasonsWithFoodData): IHydratedSeason[] | undefined => (
    allSeasonsWithFoodData.data
  )
);

export const selectNumberOfAllSeasonsInView = createSelector(
  selectAllSeasonsWithFoodDataState,
  (allSeasonsWithFoodData): number => (
    allSeasonsWithFoodData.numberOfSeasonsInView
  )
);

export const selectHasMoreSeasonsInAllSeasonsView = createSelector(
  selectNumberOfAllSeasonsInView,
  selectAllSeasonsWithFoodData,
  (numberOfAllSeasons, allSeasons): boolean => (
    allSeasons
      ? numberOfAllSeasons < allSeasons.length
      : false
  )
);
