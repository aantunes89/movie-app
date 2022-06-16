import { createAction, props } from '@ngrx/store';
import { CryptoPairResponseInterface } from '../types/crypto-pair-response.interface';

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
  props<{ cryptoPairDetails: CryptoPairResponseInterface }>()
);
