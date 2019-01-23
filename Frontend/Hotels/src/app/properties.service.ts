import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = "http://localhost:8000/api/v1/";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

export interface Property {
  name: string;
}

@Injectable({
  providedIn: 'root'
})

export class PropertiesService {

  constructor(private http: HttpClient) { }

  getAllProperties(): Observable<Property[]> {
    const t = this.http.get<Property[]>(endpoint + 'properties');
    console.log(t);
    return t;
  }

  getProperty(name: string): Observable<Property> {
    return this.http.get<Property>(endpoint + 'properties/' + name);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    }
  }
}
