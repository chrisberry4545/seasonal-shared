import {
  IFood
} from './food.interface';

export interface IAirtableFood extends IFood {
  seasons: string[];
}
