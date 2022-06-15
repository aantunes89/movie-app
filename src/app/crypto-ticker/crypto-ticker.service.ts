import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CryptoResponseInterface } from 'src/app/crypto-ticker/types/crypto-response.interface';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class CryptoTickerService {
  constructor(private httpClient: HttpClient) {}

  public getCurrencies(): Observable<CryptoResponseInterface> {
    return this.httpClient.get<CryptoResponseInterface>(
      `${environment.baseUrl}/public/get-instruments`
    );
  }

  public getCurrencyPair(currencyOne: string, currencyTwo: string) {
    let params = new HttpParams();

    params = params.append('instrument_name', `${currencyOne}_${currencyTwo}`);

    return this.httpClient.get(`${environment.baseUrl}/public/get-ticker`, {
      params,
    });
  }
}
