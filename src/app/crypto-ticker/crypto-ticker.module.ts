import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoTickerComponent } from 'src/app/crypto-ticker/crypto-ticker.component';
import { CryptoTickerService } from './crypto-ticker.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './store/crypto-ticker.reducer';
import { CryptoTickerEffects } from './store/crypto-ticker.effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiErrorsInterceptor } from '../core/middlewares/api-errors.interceptor.service';

const routes: Routes = [{ path: '', component: CryptoTickerComponent }];

@NgModule({
  declarations: [CryptoTickerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature('crypto-ticker', reducers),
    EffectsModule.forFeature([CryptoTickerEffects]),
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: [
    CryptoTickerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiErrorsInterceptor,
      multi: true,
    },
  ],
  exports: [CryptoTickerComponent],
})
export class CryptoTickerModule {}
