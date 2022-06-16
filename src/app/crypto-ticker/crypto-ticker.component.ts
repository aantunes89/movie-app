import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CryptoTickerActions from 'src/app/crypto-ticker/store/crypto-ticker.actions';
import { selectCurrencies } from './store/crypto-ticker.selectors';

@Component({
  selector: 'app-crypto-ticker',
  templateUrl: './crypto-ticker.component.html',
  styleUrls: ['./crypto-ticker.component.scss'],
})
export class CryptoTickerComponent implements OnInit {
  public currencies$: Observable<string[] | null>;
  public form: FormGroup;

  constructor(private store: Store, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.store.dispatch(CryptoTickerActions.fetchCurrencies());

    this.initializeForm();
    this.initializeCurrencyValues();
  }

  initializeCurrencyValues() {
    this.currencies$ = this.store.pipe(select(selectCurrencies));
  }

  initializeForm(): void {
    this.form = this.fb.group({
      currencyOne: ['', Validators.required],
      currencyTwo: ['', Validators.required],
    });
  }

  public onSubmit(): void {
    const { currencyOne, currencyTwo } = this.form.value;

    this.store.dispatch(
      CryptoTickerActions.fetchCurrencyPair({ currencyOne, currencyTwo })
    );
  }
}
