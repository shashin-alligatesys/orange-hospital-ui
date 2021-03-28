import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

const API_URL = environment.apiUrl+"/reception_reception_registration/";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  
  constructor(private http: HttpClient) { }

  // getByVillageID(id): Observable<any> {
  //   return this.http.post(API_URL + 'getByVillageID/'+id, httpOptions);
  // }

  save(form: any): Observable<any> { 
    return this.http.post(API_URL + 'save', form, httpOptions);
  }

  update(form): Observable<any> {
    return this.http.put(API_URL + 'update', form, httpOptions);
  }

  delete(id): Observable<any> {
    return this.http.delete(API_URL + 'delete/'+id , httpOptions);
  }

  get(): Observable<any> {
    return this.http.get(API_URL + 'findAll', { responseType: 'json' });
  }

  getNextUHID(): Observable<any> {
    return this.http.get(API_URL + 'getNextUHID', { responseType: 'json' });
  }

  getNextMLC(): Observable<any> {
    return this.http.get(API_URL + 'getNextMLC', { responseType: 'json' });
  }

  getNextTOKEN(): Observable<any> {
    return this.http.get(API_URL + 'getNextTOKEN', { responseType: 'json' });
  }

  getPatientDetailsByUHID(uhid): Observable<any> {
    return this.http.delete(API_URL + 'getPatientDetailsByUHID/'+uhid , httpOptions);
  }

}
