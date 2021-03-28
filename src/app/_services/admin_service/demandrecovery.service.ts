import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// const API_URL = 'http://localhost:5000/api/area/';
import { environment } from '../../../environments/environment';
const API_URL = environment.apiUrl+"/demandrecovery/";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DemandrecoveryService {

  constructor(private http: HttpClient) { }
  save(form): Observable<any> {
    return this.http.post(API_URL + 'save', form, httpOptions);
  }

  update(form): Observable<any> {
    return this.http.post(API_URL + 'update', form, httpOptions);
  }

  delete(id): Observable<any> {
    return this.http.post(API_URL + 'delete/'+id , httpOptions);
  }

  get(): Observable<any> {
    return this.http.get(API_URL + 'findAll', { responseType: 'json' });
  }

}
