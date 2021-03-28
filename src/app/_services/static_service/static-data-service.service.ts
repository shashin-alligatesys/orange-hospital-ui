import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const API_URL = environment.apiUrl+"/ward/";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class StaticDataServiceService {

  constructor(private http: HttpClient) { }

  // WardList =[
  //   {"id" :"1", "name":"નવસારી", "vid":"10"},
  //   {"id" :"2", "name":"નવસારી", "vid":"10"},
  //   {"id" :"3", "name":"નવસારી", "vid":"10"},
  //   {"id" :"4", "name":"નવસારી", "vid":"10"},
  //   {"id" :"5", "name":"નવસારી", "vid":"10"},
  //   {"id" :"6", "name":"નવસારી", "vid":"10"},
  //   {"id" :"7", "name":"નવસારી", "vid":"10"},
  //   {"id" :"8", "name":"નવસારી", "vid":"10"},
  //   {"id" :"9", "name":"નવસારી", "vid":"10"},
  //   {"id" :"10", "name":"નવસારી", "vid":"10"},
  //   {"id" :"11", "name":"નવસારી", "vid":"10"},
    
  //   {"id" :"1", "name":"વિજલપોર", "vid":"11"},
  //   {"id" :"2", "name":"વિજલપોર", "vid":"11"},
  //   {"id" :"3", "name":"વિજલપોર", "vid":"11"},
  //   {"id" :"4", "name":"વિજલપોર", "vid":"11"},
  //   {"id" :"5", "name":"વિજલપોર", "vid":"11"},
  //   {"id" :"6", "name":"વિજલપોર", "vid":"11"},
  //   {"id" :"7", "name":"વિજલપોર", "vid":"11"},
  //   {"id" :"8", "name":"વિજલપોર", "vid":"11"},
  //   {"id" :"9", "name":"વિજલપોર", "vid":"11"},
  //   {"id" :"10", "name":"વિજલપોર", "vid":"11"},
  //   {"id" :"11", "name":"વિજલપોર", "vid":"11"},

  //   {"id" :"13", "name":"જમાલપોર", "vid":"2"},
  //   {"id" :"14", "name":"વિરાવળ", "vid":"1"},
  //   {"id" :"15", "name":"તીઘરા", "vid":"3"},
  //   {"id" :"16", "name":"ચોવીસી", "vid":"4"},
  //   {"id" :"17", "name":"કબીલપોર", "vid":"5"},
  //   {"id" :"18", "name":"કાળિયાવાડી", "vid":"6"},
  //   {"id" :"19", "name":"છાપરા", "vid":"7"},
  //   {"id" :"20", "name":"ઇટાળવા", "vid":"8"},
  //   ];

  // getWardList(): Promise<any> {
  //   return Promise.resolve(this.WardList);
  // }

  getWardData(): Observable<any> {
    return this.http.get(API_URL + 'getWard', { responseType: 'json' });
  }
  save(form): Observable<any> {
    return this.http.post(API_URL + 'save', form, httpOptions);
  }
  
  delete(uid): Observable<any> {
    return this.http.post(API_URL + 'delete/'+uid , httpOptions);
  }
  findAll(): Observable<any> {
    return this.http.get(API_URL + 'findAll', { responseType: 'json' });
  }
}
