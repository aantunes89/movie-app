import { createAction, props } from '@ngrx/store';

export const apiErrorsAction = createAction(
  '[API ERROR] API ERROR',
  props<{ showError: boolean; errorMsg: string }>()
);
