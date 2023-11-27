import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';
import { Conferencias } from './conferencias';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConferenciasService {

  private apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getConferencias(): Observable<Conferencias[]> {
    return this.http.get<Conferencias[]>(this.apiUrl);
  }
}
