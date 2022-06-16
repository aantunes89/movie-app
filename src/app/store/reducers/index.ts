import { Action, ActionReducer, ActionReducerMap } from '@ngrx/store';
import { apiErrorsReducer, ApiErrosState } from './api-errors.reducer';

export interface AppState {
  apiErrors: ActionReducer<ApiErrosState, Action>;
}

export const reducers = {
  'api-errors': apiErrorsReducer,
};
