import { Action, createReducer, on } from '@ngrx/store';
import * as CryptoTickerActions from 'src/app/crypto-ticker/store/crypto-ticker.actions';
import { CryptoTickerState } from 'src/app/crypto-ticker/types/crypto-ticker-state.interface';

const INITIAL_STATE: CryptoTickerState = {
  currencies: [],
};

export const currenciesReducer = createReducer(
  INITIAL_STATE,
  on(
    CryptoTickerActions.updateCurrencies,
    (state, action): CryptoTickerState => ({
      ...state,
      currencies: action.currencies,
    })
  )
);

export function reducers(state: CryptoTickerState, action: Action) {
  return currenciesReducer(state, action);
}
