import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
const API_URL = environment.apiUrl+"/report-taxgeneral-register/";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class TaxgeneralReportService {

  constructor(private http: HttpClient) { }

  assessmentRegister(format,wardNumber,propertyNumber,propertyNumber1,propertyNumberTo,propertyNumberTo1,register): Observable<any> {
    return this.http.get(API_URL + 'assessment-register/'+format+'/'+wardNumber+'/'+propertyNumber+'/'+propertyNumber1+'/'+propertyNumberTo+'/'+propertyNumberTo1+'/'+register, { responseType: 'blob' });
  }

  propertyWardTotal(format,wardNumber,type): Observable<any> {
    return this.http.get(API_URL + 'property-ward-total/'+format+'/'+wardNumber+'/'+type, { responseType: 'blob' });
  }

  area(format,wardNumber): Observable<any> {
    return this.http.get(API_URL + 'area/'+format+'/'+wardNumber, { responseType: 'blob' });
  }

  waterConnection(format,fromDate,toDate): Observable<any> {
    return this.http.get(API_URL + 'water-connection/'+format+'/'+fromDate+'/'+toDate, { responseType: 'blob' });
  }

}
