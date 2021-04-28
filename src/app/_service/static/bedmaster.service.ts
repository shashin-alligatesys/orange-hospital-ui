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
    return this.http.get(TEMP_API_URL+'/patient/getpatientdetails', {responseType:'json'});
  }

  shiftAllocatedBed(form: any):Observable<any>{
    return this.http.post(TEMP_API_URL+'/shifting/save',form ,httpOptions);
  }


  bedMasterHistory():Observable<any>{
    return this.http.get(TEMP_API_URL+'/shifting/history', {responseType:'json'});
  }

  bedStatus():Observable<any>{
     return this.http.get(API_URL+'getBedStatus' , {responseType:'json'});
  }

  vacantBedStatus():Observable<any>{

    return this.http.get(API_URL + 'vacantbedreport'  , {responseType:'blob'});
  }

 // /api/bedmaster/getBedList

  // getBedDetails():Observable<any>{

  //   return this.http.get(TEMP_API_URL+'/bedmaster/getBedList',{responseType:'json'});

  // }

}
