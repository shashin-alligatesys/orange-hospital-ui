import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const API_URL = environment.apiUrl+"/bedmaster/";
const TEMP_API_URL = environment.apiUrl
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BedmasterService {

  constructor(private http: HttpClient) { }

  getBedList(): Observable<any> {
    return this.http.get(API_URL + 'getBedList', { responseType: 'json' });
  }

  
  getAdmittedPatiendDetails():Observable<any>{
    return this.http.get(TEMP_API_URL+'/patient/getpatientdetail', {responseType:'json'});
  }
 // /api/bedmaster/getBedList

  // getBedDetails():Observable<any>{

  //   return this.http.get(TEMP_API_URL+'/bedmaster/getBedList',{responseType:'json'});

  // }

}
