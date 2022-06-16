import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CryptoTickerActions from 'src/app/crypto-ticker/store/crypto-ticker.actions';
import { CryptoTickerService } from '../crypto-ticker.service';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CryptoTickerEffects {
  loadCurrencies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CryptoTickerActions.fetchCurrencies),
      switchMap(() => {
        return this.cryptoTickerService.getCurrencies().pipe(
          map(({ result }) => {
            const instrumentsName = result.instruments.map(
              (currency) => currency.base_currency
            );

            return CryptoTickerActions.updateCurrencies({
              currencies: instrumentsName,
            });
          })
        );
      })
    );
  });

  loadPair$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CryptoTickerActions.fetchCurrencyPair),
      switchMap(({ currencyOne, currencyTwo }) => {
        return this.cryptoTickerService
          .getCurrencyPair(currencyOne, currencyTwo)
          .pipe();
      }),
      map(({ result }: any) => {
        console.log(result);

        return result;
      })
    );
  });

  constructor(
    private actions$: Actions,
    private cryptoTickerService: CryptoTickerService
  ) {}
}
