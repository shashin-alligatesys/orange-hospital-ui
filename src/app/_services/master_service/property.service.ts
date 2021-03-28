import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// const API_URL = 'http://localhost:5000/api/area/';
import { environment } from '../../../environments/environment';
const API_URL = environment.apiUrl+"/property/";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http: HttpClient) { }

  save(form): Observable<any> {
    return this.http.post(API_URL + 'save', form, httpOptions);
  }

  update(form): Observable<any> {
    return this.http.post(API_URL + 'update', form, httpOptions);
  }

  
  updateQueue(form): Observable<any> {
    return this.http.post(API_URL + 'update-queue', form, httpOptions);
  }

  delete(id): Observable<any> {
    return this.http.post(API_URL + 'delete/'+id , httpOptions);
  }

  get(): Observable<any> {
    return this.http.get(API_URL + 'findAll', { responseType: 'json' });
  }

  getByUserVillage(): Observable<any> {
    return this.http.get(API_URL + 'findAllByVillage', { responseType: 'json' });
  }

  findByWardAndPropertyNumber(wardNumber,propertyNumber): Observable<any> {
    return this.http.post(API_URL + 'findByWardAndPropertyNumber/'+wardNumber+'/'+propertyNumber , httpOptions);
  }
  findByWardAndPropertyNumber1(wardNumber,propertyNumber,propertyNumber1): Observable<any> {
    return this.http.post(API_URL + 'findByWardAndPropertyNumber1/'+wardNumber+'/'+propertyNumber+'/'+propertyNumber1 , httpOptions);
  }

  findByWardAndPropertyNumberAndHeaderVillage(wardNumber,propertyNumber): Observable<any> {
    return this.http.post(API_URL + 'findByWardAndPropertyNumberAndHeaderVillage/'+wardNumber+'/'+propertyNumber , httpOptions);
  }
  findByWardAndPropertyNumberAndHeaderVillage1(wardNumber,propertyNumber,propertyNumber1): Observable<any> {
    return this.http.post(API_URL + 'findByWardAndPropertyNumber1AndHeaderVillage/'+wardNumber+'/'+propertyNumber+'/'+propertyNumber1 , httpOptions);
  }

  getNextItemNumber(): Observable<any> {
    return this.http.get(API_URL + 'getNextItemNumber', { responseType: 'json' });
  }

  getTypeOfProperty(): Observable<any> {
    return this.http.get(API_URL + 'getTypeOfProperty', { responseType: 'json' });
  }

  // getByUserVillageQueue(): Observable<any> {
  //   return this.http.get(API_URL + 'findAllByVillageQueue', { responseType: 'json' });
  // }
  // getByVillageNameQueue(villageName): Observable<any> {
  //   return this.http.get(API_URL + 'findAllByVillageNameQueue/'+villageName, { responseType: 'json' });
  // }
  getByUserVillageQueue(villageName,status): Observable<any> {
    return this.http.post(API_URL + 'findAllByVillageQueue/'+villageName+'/'+status , httpOptions);
  }

  // getByVillageNameQueue(villageName,status): Observable<any> {
  //   return this.http.post(API_URL + 'findAllByVillageNameQueue/'+villageName+'/'+status , httpOptions);
  // }

  approveByID(id): Observable<any> {
    return this.http.post(API_URL + 'approveQueueById/'+id , httpOptions);
  }

  rejectByID(id): Observable<any> {
    return this.http.post(API_URL + 'rejectQueueById/'+id , httpOptions);
  }

  
  // findCountByHeaderVillageAndStatus(status): Observable<any> {
  //   return this.http.post(API_URL + 'findCountByHeaderVillageAndStatus/'+status , httpOptions);
  // }

 

  //code recatore
  
  findByWardNumberAndPropertyNumberAndPropertyNumber1AndVillageCdAndYearCd(wardNumber,propertyNumber,propertyNumber1): Observable<any> {
    return this.http.post(API_URL + 'findByWardNumberAndPropertyNumberAndPropertyNumber1AndVillageCdAndYearCd/'+wardNumber+'/'+propertyNumber+'/'+propertyNumber1 , httpOptions);
  }

  findCountByVillageAndStatus(villageName,status): Observable<any> {
    return this.http.post(API_URL + 'findCountByVillageAndStatus/'+villageName+'/'+status , httpOptions);
  }
}
