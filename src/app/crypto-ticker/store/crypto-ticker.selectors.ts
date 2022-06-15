import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CryptoTickerState } from 'src/app/crypto-ticker/types/crypto-ticker-state.interface';

export const selectCryptoTickerState =
  createFeatureSelector<CryptoTickerState>('crypto-ticker');

export const selectCurrencies = createSelector(
  selectCryptoTickerState,
  (state: CryptoTickerState): string[] => state?.currencies
);
