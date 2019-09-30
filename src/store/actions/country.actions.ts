import { Action } from 'redux';
import { ICountry } from '../../interfaces';

export const GET_COUNTRIES_START = 'GET_COUNTRIES_START';
export function getCountriesStart(): Action {
  return {
    type: GET_COUNTRIES_START
  };
}

export interface IGetCountriesSuccess extends Action {
  countries: ICountry[];
}
export const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS';
export function getCountriesSuccess(
  countries: ICountry[]
): IGetCountriesSuccess {
  return {
    countries,
    type: GET_COUNTRIES_SUCCESS
  };
}

export interface ISetRegionAction extends Action {
  regionCode: string;
}
export const SET_REGION = 'SET_REGION';
export function setRegion(
  regionCode: string
): ISetRegionAction {
  return {
    regionCode,
    type: SET_REGION
  };
}
