import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const API_URL = environment.apiUrl+"/doctor_reference/";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class DoctorReferenceService {

  constructor(private http: HttpClient) { }

  getDoctorReferenceList(): Observable<any> {
    return this.http.get(API_URL + 'getDoctorReferenceList', { responseType: 'json' });
  }

}
