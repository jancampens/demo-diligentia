import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SceneDetails } from './models/scene-details';
import { Scenes } from './models/scenes';

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

  getScenes(limit = 0, skip = 0): Observable<Scenes> {
    return this.http.get<Scenes>(`${this.apiUrl}/scenes/${limit}/${skip}`)
      .pipe(
        catchError(this.handleError<Scenes>('getScenes'))
      );
  }

  getScene(id: string): Observable<SceneDetails> {
    const url = `${this.apiUrl}/scene/${id}`;
    return this.http.get<SceneDetails>(url).pipe(
      catchError(this.handleError<SceneDetails>(`getScene id=${id}`))
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
