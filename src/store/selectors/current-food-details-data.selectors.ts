import { createSelector } from 'reselect';
import {
  IState, ICurrentFoodDetailsDataState
} from '../../interfaces';
import {
  IHydratedFood,
  IBaseSeason
} from '../../interfaces';

const selectCurrentFoodDetailsDataState = (
  state: IState
): ICurrentFoodDetailsDataState => state.currentFoodDetailsData;

export const selectIsCurrentFoodDetailsLoading = createSelector(
  selectCurrentFoodDetailsDataState,
  (currentFoodDetails): boolean => currentFoodDetails.isLoading
);

export const selectCurrentFoodDetails = createSelector(
  selectCurrentFoodDetailsDataState,
  (currentFoodDetails): IHydratedFood | undefined => currentFoodDetails.data
);

export const selectCurrentFoodDetailsName = createSelector(
  selectCurrentFoodDetails,
  (currentFoodDetails): string | undefined => currentFoodDetails &&
    currentFoodDetails.name
);

export const selectCurrentFoodDetailsImageUrl = createSelector(
  selectCurrentFoodDetails,
  (currentFoodDetails): string | undefined => currentFoodDetails &&
    currentFoodDetails.imageUrlSmall
);

export const selectCurrentFoodDetailsSeasons = createSelector(
  selectCurrentFoodDetails,
  (currentFoodDetails): IBaseSeason[] | undefined => currentFoodDetails &&
    currentFoodDetails.seasons
);
