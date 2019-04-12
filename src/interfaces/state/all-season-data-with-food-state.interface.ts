import { IHydratedSeason } from '../../interfaces';

export interface IAllSeasonDataWithFoodState {
  isLoading: boolean;
  data?: IHydratedSeason[];
  numberOfSeasonsInView: number;
}
