import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { filter, tap } from 'rxjs/operators';

import * as ApiErrosSelectors from './store/selectors/api-errors.selectors';
import * as ApiErrorsActions from './store/actions/api-errors.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  apiErrors$: Observable<boolean | null>;

  constructor(private _snackBar: MatSnackBar, private store: Store) {}

  ngOnInit(): void {
    this.initValues();
  }

  initValues() {
    this.store
      .pipe(
        select(ApiErrosSelectors.selectApiErrors),
        filter((errorObj) => !!errorObj.showError),
        tap((error) => {
          this._snackBar.open(`CORS ERROR : ${error.errorMsg}`, 'close');
          this.store.dispatch(
            ApiErrorsActions.apiErrorsAction({ showError: false, errorMsg: '' })
          );
        })
      )
      .subscribe();
  }
}
