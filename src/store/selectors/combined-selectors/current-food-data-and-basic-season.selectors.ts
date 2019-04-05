import { createSelector } from 'reselect';
import {
  selectIsCurrentFoodDetailsLoading,
  selectCurrentFoodDetailsSeasons
} from '../current-food-details-data.selectors';
import {
  selectIsBasicSeasonDataLoading,
  selectAllBasicSeasonData
} from '../all-season-data.selectors';
import { ISelectableItem } from '../../../interfaces';

export const selectIsFoodDataOrBasicSeasonsLoading = createSelector(
  selectIsCurrentFoodDetailsLoading,
  selectIsBasicSeasonDataLoading,
  (isCurrentFoodDetailsLoading, isBasicSeasonDataLoading): boolean => (
    isCurrentFoodDetailsLoading || isBasicSeasonDataLoading
  )
);

export const selectSeasonsSelectedForFood = createSelector(
  selectCurrentFoodDetailsSeasons,
  selectAllBasicSeasonData,
  (foodDetailsSeasons, basicSeasons): ISelectableItem[] | undefined => (
    foodDetailsSeasons && basicSeasons &&
      basicSeasons.map(({ id, name }) => ({
        isSelected: foodDetailsSeasons
          .some((foodDetailSeason) => foodDetailSeason.id === id),
        name
      }))
));
