import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
const API_URL = environment.apiUrl+"/report-taxdemand-register/";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class TaxdemandReportService {

  constructor(private http: HttpClient) { }

  registerOfDemands(format,wardNumber,propertyNumber,propertyNumber1,propertyNumberTo,propertyNumberTo1,fromDate,toDate): Observable<any> {
    return this.http.get(API_URL + 'register-Of-Demands/'+format+'/'+wardNumber+'/'+propertyNumber+'/'+propertyNumber1+'/'+propertyNumberTo+'/'+propertyNumberTo1+'/'+fromDate+'/'+toDate, { responseType: 'blob' });
  }

  registerTaxArrears(format,wardNumber,propertyNumber,propertyNumber1,propertyNumberTo,propertyNumberTo1): Observable<any> {
    return this.http.get(API_URL + 'register-tax-arrears/'+format+'/'+wardNumber+'/'+propertyNumber+'/'+propertyNumber1+'/'+propertyNumberTo+'/'+propertyNumberTo1, { responseType: 'blob' });
  }

}
