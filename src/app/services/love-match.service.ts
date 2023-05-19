import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoveProfileModel } from '../model/love-profile.model';

@Injectable({
  providedIn: 'root'
})
export class LoveMatchService {
  private apiUrl = 'api/matches';
  constructor(private http: HttpClient) { }

  getLoveMatch(): Observable<LoveProfileModel[]> {
    return this.http.get<LoveProfileModel[]>(this.apiUrl).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }

  updateLikes(loveMatch: LoveProfileModel): Observable<LoveProfileModel> {
    const url = `${this.apiUrl}/${loveMatch.id}`;
    return this.http.put<LoveProfileModel>(url, loveMatch).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(() => error);
      })
    );
  }
}
