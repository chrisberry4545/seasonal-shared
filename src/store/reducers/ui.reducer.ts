import {
  CLOSE_MENU,
  OPEN_MENU,
  SELECT_SEASON,
  SEARCH_BAR_CHANGED,
  ISearchBarChanged,
  SHOW_SEARCH_BAR,
  HIDE_SEARCH_BAR
} from '../actions';
import { IUiState } from '../../interfaces';
import { Action } from 'redux';

const getDefaultState = (): IUiState => ({
  isMenuOpen: false,
  isSearchBarVisible: false
});

export function uiReducer(
  state = getDefaultState(),
  action: Action
): IUiState {
  switch (action.type) {
    case SELECT_SEASON:
    case CLOSE_MENU:
      return {
        ...state,
        isMenuOpen: false
      };
    case OPEN_MENU:
      return {
        ...state,
        isMenuOpen: true
      };
    case SEARCH_BAR_CHANGED:
      return {
        ...state,
        searchTerm: (action as ISearchBarChanged).newSearchTerm
      };
    case SHOW_SEARCH_BAR:
      return {
        ...state,
        isSearchBarVisible: true
      };
    case HIDE_SEARCH_BAR:
      return {
        ...state,
        isSearchBarVisible: false,
        searchTerm: ''
      };
    default:
      return state;
  }
}
