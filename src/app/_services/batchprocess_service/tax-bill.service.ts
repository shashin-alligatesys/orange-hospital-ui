import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
const API_URL = environment.apiUrl+"/generate-tax-bill/";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TaxBillService {

  constructor(private http: HttpClient) { }

  generate(form): Observable<any> { 
    return this.http.post(API_URL + 'generate',  form, httpOptions);
  }

}
