import { Action } from 'redux';

export const OPEN_MENU = 'OPEN_MENU';
export function openMenu(): Action {
  return {
    type: OPEN_MENU
  };
}

export const CLOSE_MENU = 'CLOSE_MENU';
export function closeMenu(): Action {
  return {
    type: CLOSE_MENU
  };
}

export interface ISelectSeason extends Action {
  seasonIndex: number;
}
export const SELECT_SEASON = 'SELECT_SEASON';
export function selectSeason(
  seasonIndex: number
): ISelectSeason {
  return {
    seasonIndex,
    type: SELECT_SEASON
  };
}

export const FOOD_DETAILS_SELECT_SEASON = 'FOOD_DETAILS_SELECT_SEASON';
export function foodDetailsSelectSeason(
  seasonIndex: number
): ISelectSeason {
  return {
    seasonIndex,
    type: FOOD_DETAILS_SELECT_SEASON
  };
}

export interface ISearchBarChanged extends Action {
  newSearchTerm: string;
}
export const SEARCH_BAR_CHANGED = 'SEARCH_BAR_CHANGED';
export function searchBarChanged(
  newSearchTerm: string
): ISearchBarChanged {
  return {
    newSearchTerm,
    type: SEARCH_BAR_CHANGED
  };
}

export const SHOW_SEARCH_BAR = 'SHOW_SEARCH_BAR';
export function showSearchBar(): Action {
  return {
    type: SHOW_SEARCH_BAR
  };
}

export const HIDE_SEARCH_BAR = 'HIDE_SEARCH_BAR';
export function hideSearchBar(): Action {
  return {
    type: HIDE_SEARCH_BAR
  };
}

export interface IFoodItemClicked extends Action {
  foodItemId: string;
}
export const FOOD_ITEM_CLICKED = 'FOOD_ITEM_CLICKED';
export function foodItemClicked(
  foodItemId: string
): IFoodItemClicked {
  return {
    foodItemId,
    type: FOOD_ITEM_CLICKED
  };
}

export interface IRecipeItemClicked extends Action {
  recipeItemId: string;
}
export const RECIPE_ITEM_CLICKED = 'RECIPE_ITEM_CLICKED';
export function recipeItemClicked(
  recipeItemId: string
): IRecipeItemClicked {
  return {
    recipeItemId,
    type: RECIPE_ITEM_CLICKED
  };
}
