import {
  IHydratedSeason
} from '../../interfaces';

export interface ICurrentSeasonDataState {
  currentSeasonIndex: number;
  isLoading: boolean;
  data?: IHydratedSeason;
}
