import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import * as ApiErrorsActions from '../actions/api-errors.actions';

export interface ApiErrosState {
  showError: boolean | null;
  errorMsg: string;
}

const initialState: ApiErrosState = {
  showError: null,
  errorMsg: '',
};

export const apiErrorsReducer = createReducer(
  initialState,
  on(ApiErrorsActions.apiErrorsAction, (state, action) => ({
    ...state,
    showError: action.showError,
    errorMsg: action.errorMsg,
  }))
);

export function apiErrorsreducers(state: ApiErrosState, action: Action) {
  return apiErrorsReducer(state, action);
}
