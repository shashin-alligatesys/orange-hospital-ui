import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

const API_URL = environment.apiUrl+"/master-other_masters1-group/";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private http: HttpClient) { }

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

  getGruopListByDepartment(department): Observable<any> {
    return this.http.get(API_URL + 'getGruopListByDepartment/'+department, { responseType: 'json' });
  }

  getGruopListByDepartmentAndSuperGroup(department,superGroup): Observable<any> {
    return this.http.get(API_URL + 'getGruopListByDepartmentAndSuperGroup/'+department+'/'+superGroup, { responseType: 'json' });
  }

}
