import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FixerResponse } from 'src/app/models/currency.model';


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private baseUrl = 'http://data.fixer.io/api/latest?access_key=';
  // private apiKey = '80db560e62b350c320ad6a38c4fdd8ab';
  private apiKey = '80db560e62b350c320ad6a38c4fdd8ab';
  private currBase = 'EUR';
  private symbols: string[] = ['USD'];



  constructor(private http: HttpClient) { }

  // getCurrencyBySymbols() {
  //   return this.http.get(this.baseUrl + this.apiKey + '&base=' + this.currBase + ' &symbols=' + this.symbols[0]);
  // }




  // Obtiene la información de la API
  // http://data.fixer.io/api/latest?access_key=33b23d6e01efe285daf21f65e1124757&base=EUR&symbols=USD
  getCurrencyBySymbols() {
    // return this.http.get('http://data.fixer.io/api/latest?access_key=33b23d6e01efe285daf21f65e1124757&base=EUR&symbols=USD');
    return this.http.get<FixerResponse>(this.baseUrl + this.apiKey);
  }




}
