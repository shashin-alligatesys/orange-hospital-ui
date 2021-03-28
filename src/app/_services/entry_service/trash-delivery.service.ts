import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// const API_URL = 'http://localhost:5000/api/water-connection/';
import { environment } from '../../../environments/environment';
const API_URL = environment.apiUrl+"/trash-delivery/";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const httpOptionsFile = {
  headers: new HttpHeaders({ 'Content-Type': 'application/blob' })
};

@Injectable({
  providedIn: 'root'
})
export class TrashDeliveryService {

  constructor(private http: HttpClient) { }

  update(form): Observable<any> {
    return this.http.post(API_URL + 'update', form, httpOptions);
  }

  print(form): Observable<any> {
    return this.http.post(API_URL + 'print', form, { responseType: 'blob' });
  }

  // getprint(fromDate,toDate): Observable<any> {
  //   return this.http.get(API_URL + 'report/pdf/'+fromDate+'/'+toDate, { responseType: 'blob' });
  // }

}
