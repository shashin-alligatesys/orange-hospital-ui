import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
const API_URL = environment.apiUrl+"/taxdemand-bill/";
const API_URL_Temp = environment.apiUrl_Temp+"/taxdemand-bill-temp/";
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
export class TaxdemandBillService {

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

  getByUserVillage(): Observable<any> {
    return this.http.get(API_URL + 'findAllByVillage', { responseType: 'json' });
  }
  

  save_temp(form): Observable<any> {
    return this.http.post(API_URL_Temp + 'save', form, httpOptions);
  }

  update_temp(form): Observable<any> {
    return this.http.post(API_URL_Temp + 'update', form, httpOptions);
  }

  delete_temp(id): Observable<any> {
    return this.http.post(API_URL_Temp + 'delete/'+id , httpOptions);
  }

  get_temp(): Observable<any> {
    return this.http.get(API_URL_Temp + 'findAll', { responseType: 'json' });
  }

  getByUserVillage_temp(): Observable<any> {
    return this.http.get(API_URL_Temp + 'findAllByVillage', { responseType: 'json' });
  }
  
  getByRequestStatus_temp(request): Observable<any> {
    return this.http.post(API_URL_Temp + 'findAllByRequestStatus/'+request , httpOptions);
  }

  approveByID(id): Observable<any> {
    return this.http.post(API_URL_Temp + 'approveById/'+id , httpOptions);
  }

  rejectByID(id): Observable<any> {
    return this.http.post(API_URL_Temp + 'rejectById/'+id , httpOptions);
  }

  getByRequestStatusAndUserVillage_temp(request): Observable<any> {
    return this.http.post(API_URL_Temp + 'findAllByRSAndVillage/'+request , httpOptions);
  }

  getCount(): Observable<any> {
    return this.http.get(API_URL_Temp + 'getCount', { responseType: 'json' });
  }

  getprint(wardNumber,propertyNumber,propertyNumber1): Observable<any> {
    return this.http.get(API_URL + 'report/pdf/'+wardNumber+'/'+propertyNumber+'/'+propertyNumber1, { responseType: 'blob' });
  }

}


