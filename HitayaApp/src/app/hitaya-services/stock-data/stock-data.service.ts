import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {

  constructor(private http: HttpClient) { }


  StockData(company: string): Observable<any[]> {
    return this.http.get<any[]>('https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=' + company + '&interval=30min&outputsize=full&apikey=S1NVX7J87AT7C59G').pipe(catchError(this.errorHandler));
  }

  CompanyOverview(company: string): Observable<any[]> {
    return this.http.get<any[]>('https://www.alphavantage.co/query?function=OVERVIEW&symbol=' + company + '&apikey=S1NVX7J87AT7C59G').pipe(catchError(this.errorHandler));
  }




  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || "Server Error");
  }
}
