import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { ServiceInterface } from '../interfaces/service.interface';

import { Establishment } from './establishment.model';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentsService implements ServiceInterface<Establishment> {
  private REST_API_SERVER = "https://my-json-server.typicode.com/james-delivery/frontend-challenge/establishments";

  constructor(
    private http: HttpClient
  ) { }

  public findAll(): Observable<Establishment[]> {
    return this.http.get<Establishment[]>(this.REST_API_SERVER)
      .pipe(catchError(this.handleError));
  }

  public find(id: string): Observable<Establishment> {
    return this.http.get<Establishment>(`${this.REST_API_SERVER}/${id}`)
      .pipe(catchError(this.handleError));
  }

  public update(establishment: Establishment): Observable<any> {
    const url = `${this.REST_API_SERVER}/${establishment.id}`
    const body = JSON.stringify(establishment)

    return this.http.put(url, body)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }

    window.alert(errorMessage);

    return throwError(errorMessage);
  }
}
