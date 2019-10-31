import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Scene } from './scene';

@Injectable({
  providedIn: 'root'
})
export class SceneService {

  private apiUrl = 'https://proef.diligentia-uitgeverij.be/api';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getScenes(): Observable<Scene[]> {
    return this.http.get<Scene[]>(this.apiUrl + '/scenes')
      .pipe(
        catchError(this.handleError<Scene[]>('getScenes', []))
      );
  }

  getScene(id: string): Observable<Scene> {
    const url = `${this.apiUrl}/scene/${id}`;
    return this.http.get<Scene>(url).pipe(
      catchError(this.handleError<Scene>(`getScene id=${id}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(operation);
      console.error(error);
      return of(result as T);
    };
  }
}
