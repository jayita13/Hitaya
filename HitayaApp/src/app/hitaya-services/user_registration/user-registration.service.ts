import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http: HttpClient) { }

  //GetUserID(): Observable<any[]> {
  //  return this.http.get<any[]>('https://localhost:44314/api/Investopia/GetAllUserInformations').pipe(catchError(this.errorHandler));
  //}

  public uploadImage(image: File): Observable<any[]> {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post<any[]>('http://127.0.0.1:8000/predict', formData).pipe(catchError(this.errorHandler));
  }



  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || "Server Error");
  }

}
