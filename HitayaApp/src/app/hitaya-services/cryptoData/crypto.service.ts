import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  constructor(private http: HttpClient) { }

  CryptoData(company: string): Observable<any[]> {
    return this.http.get<any[]>('https://www.alphavantage.co/query?function=CRYPTO_INTRADAY&symbol=' + company + '&market=USD&interval=1min&apikey=S1NVX7J87AT7C59G').pipe(catchError(this.errorHandler));
  }




  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || "Server Error");
  }
}
