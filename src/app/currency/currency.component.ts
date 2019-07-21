import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './services/currency.service';
import { CurrencyForm } from '../models/currencyForm.model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.sass']
})
export class CurrencyComponent implements OnInit {

  baseCurrency: any;
  rateCurrency: any;
  formCurrencyData: CurrencyForm;
  isEmpty = false;

  fg: number;

  constructor(private currService: CurrencyService) { }


  ngOnInit() {
    // Obtener los datos desde el servicio
    this.currService.getCurrencyBySymbols()
      .subscribe(data => {
        this.baseCurrency = data.base.toString();
        this.rateCurrency = data.rates.USD;
        // Carga el valor inicial del dolar y toma solo 4 decimales
        this.formCurrencyData.usdInput = parseFloat(this.rateCurrency).toFixed(4).toString();
      });

    this.formCurrencyData = {
      sterlingInput: 1,
      usdInput: 0
    };


  }

  // Actualiza el valor total cuando se hace clic sobre  el botón Calculate
  updateTotal() {
    if (this.formCurrencyData.usdInput) {}
    this.formCurrencyData.usdInput = parseFloat((this.formCurrencyData.sterlingInput * this.formCurrencyData.usdInput).toFixed(4));
  }

}
