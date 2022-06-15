import { createAction, props } from '@ngrx/store';
import { CryptoResponseInterface } from 'src/app/crypto-ticker/types/crypto-response.interface';

export const fetchCurrencies = createAction(
  '[FETCH CURRENCIES] FETCH ALL CURRENCIES'
);

export const updateCurrencies = createAction(
  '[UPDATE CURRENCIES] UPDATE ALL CURRENCIES',
  props<{ currencies: string[] }>()
);

export const fetchCurrencyPair = createAction(
  '[FETCH CURRENCY PAIR] FETCH CURRENCY PAIR',
  props<{ currencyOne: string; currencyTwo: string }>()
);

export const updateCurrencyPair = createAction(
  '[UPDATE CURRENCY PAIR] UPDATE CURRENCY PAIR',
  props<{ currencyOne: string; currencyTwo: string }>()
);
