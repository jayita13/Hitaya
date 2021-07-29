import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';



import { IAdminLogin, IUser } from '../../hitaya-interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserValidationService {

  constructor(private http: HttpClient) { }

  validateCredentials(obj: IUser): Observable<number> {

    return this.http.post<number>('https://localhost:44331/api/Hitaya/LoginValidation', obj).pipe(catchError(this.errorHandler));
  }

  AdminLoginValidation(obj: IAdminLogin): Observable<number> {

    return this.http.post<number>('https://localhost:44331/api/Hitaya/AdminLoginValidation', obj).pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    console.error(error);
    return throwError(error.message || "Server Error");
  }
}
