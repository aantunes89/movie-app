import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ApiErrosState } from '../reducers/api-errors.reducer';

export const selectFeature = createFeatureSelector<ApiErrosState>('api-errors');

export const selectApiErrors = createSelector(
  selectFeature,
  (state: ApiErrosState) => state
);
