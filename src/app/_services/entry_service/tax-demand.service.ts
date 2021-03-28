import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
const API_URL = environment.apiUrl+"/tax-demand/";
// 'http://localhost:5000/api/taxdemand-bill/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const httpOptionsFile = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TaxDemandService {

  constructor(private http: HttpClient) { }

  update(form): Observable<any> {
    return this.http.post(API_URL + 'update', form, httpOptions);
  }

  getprint(format,wardNumber,propertyNumber,propertyNumber1): Observable<any> {
    return this.http.get(API_URL + 'report/'+format+'/'+wardNumber+'/'+propertyNumber+'/'+propertyNumber1, { responseType: 'blob' });
  }

}
