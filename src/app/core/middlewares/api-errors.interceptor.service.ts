import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as ApiErrosActions from 'src/app/store/actions/api-errors.actions';

@Injectable()
export class ApiErrorsInterceptor implements HttpInterceptor {
  constructor(private store: Store) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error) => {
        return of(error).pipe(
          tap((error) => {
            this.store.dispatch(
              ApiErrosActions.apiErrorsAction({
                showError: true,
                errorMsg: error.message,
              })
            );
          })
        );
      })
    );
  }
}
