import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GDPEntry } from '../models/gdp-entry.model';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EurostatService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getGDP(): Observable<GDPEntry[]>{
    return this.http.get<GDPEntry[]>(`${this.baseUrl}/api/eurostat/gdp`)
  }
}
