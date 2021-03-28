import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// const API_URL = 'http://localhost:5000/api/auth/';
import { environment } from '../../environments/environment';
const API_URL = environment.apiUrl + "/auth/";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<any> {
    return this.http.get(API_URL + 'allUser');
  }

  deleteUser(id): Observable<any> {
    return this.http.post(API_URL + 'user-delete/' + id, httpOptions);
  }

  updateUser(form): Observable<any> {
    return this.http.post(API_URL + 'user-update', form, httpOptions);
  }

  updatePass(form): Observable<any> {
    return this.http.post(API_URL + 'user-pass-update', form, httpOptions);
  }

}
