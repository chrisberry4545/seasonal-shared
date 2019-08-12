import { IRegion } from './region.interface';

export interface ICountry {
  name: string;
  regions?: IRegion[];
}
