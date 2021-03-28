import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
const API_URL = environment.apiUrl+"/report-taxcollection-register/";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class TaxcollectionReportService {

  constructor(private http: HttpClient) { }

  registerOfDemands(format,wardNumber,propertyNumber,propertyNumber1,propertyNumberTo,propertyNumberTo1,fromDate,toDate): Observable<any> {
    return this.http.get(API_URL + 'register-Of-collection/'+format+'/'+wardNumber+'/'+propertyNumber+'/'+propertyNumber1+'/'+propertyNumberTo+'/'+propertyNumberTo1+'/'+fromDate+'/'+toDate, { responseType: 'blob' });
  }

  collectionMonthly(format,type,fromDate,toDate): Observable<any> {
    return this.http.get(API_URL + 'collection-monthly/'+format+'/'+type+'/'+fromDate+'/'+toDate, { responseType: 'blob' });
  }

  trashDistributionRegister(format,fromDate,toDate): Observable<any> {
    return this.http.get(API_URL + 'trash-distribution-register/'+format+'/'+fromDate+'/'+toDate, { responseType: 'blob' });
  }

}
