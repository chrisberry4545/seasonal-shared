import { IFood } from './food.interface';
import { IBaseSeason } from './base-season.interface';

export interface IHydratedFood extends IFood {
  seasons: IBaseSeason[];
}
