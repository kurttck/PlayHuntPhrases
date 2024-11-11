import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseURL = 'http://localhost:8080';
  private phrase: any;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  get(endpoint: string): Observable<any> {
    return this.http.get(`${this.baseURL}/${endpoint}`, this.httpOptions).pipe(
      tap((data) => console.log('Datos recibidos', data)),
      catchError((error) => this.handleError(error))
    );
  }

  post(endpoint: string, body: any): Observable<any> {
    return this.http
      .post(`${this.baseURL}/${endpoint}`, body, this.httpOptions)
      .pipe(
        tap((data) => console.log('Datos enviados', data)),
        catchError((error) => this.handleError(error))
      );
  }

  put(endpoint: string, body: any): Observable<any> {
    return this.http
      .put(`${this.baseURL}/${endpoint}`, body, this.httpOptions)
      .pipe(
        tap((data) => console.log('Datos actualizados', data)),
        catchError((error) => this.handleError(error))
      );
  }

  delete(endpoint: string): Observable<any> {
    return this.http
      .delete(`${this.baseURL}/${endpoint}`, this.httpOptions)
      .pipe(
        tap((data) => console.log('Datos eliminados', data)),
        catchError((error) => this.handleError(error))
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('Error al hacer a solicitud:', error);
    return throwError(error);
  }
}
