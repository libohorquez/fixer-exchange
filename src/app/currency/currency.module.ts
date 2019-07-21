import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyRoutingModule } from './currency-routing.module';
import { CurrencyComponent } from './currency.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CurrencyComponent],
  imports: [
    CommonModule,
    CurrencyRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CurrencyModule { }
