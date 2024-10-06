import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  private apiUrl = 'http://localhost:3000/autos'; 

  constructor(private http: HttpClient) { }

  getAutos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAutoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addAuto(auto: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, auto);
  }

  updateAuto(auto: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${auto.id}`, auto);
  }

  deleteAuto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
