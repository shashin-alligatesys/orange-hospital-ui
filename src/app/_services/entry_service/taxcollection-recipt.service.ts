import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
const API_URL = environment.apiUrl+"/taxcollection-recipt/";
const API_URL_Temp = environment.apiUrl_Temp+"/taxdemand-bill-temp/";
// 'http://localhost:5000/api/taxdemand-bill/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaxcollectionReciptService {
  constructor(private http: HttpClient) { }

  
  save(form): Observable<any> {
    return this.http.post(API_URL + 'save', form, httpOptions);
  }

  update(form): Observable<any> {
    return this.http.post(API_URL + 'update', form, httpOptions);
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


  save_temp(form): Observable<any> {
    return this.http.post(API_URL_Temp + 'save', form, httpOptions);
  }

  update_temp(form): Observable<any> {
    return this.http.post(API_URL_Temp + 'update', form, httpOptions);
  }

  delete_temp(id): Observable<any> {
    return this.http.post(API_URL_Temp + 'delete/'+id , httpOptions);
  }

  get_temp(): Observable<any> {
    return this.http.get(API_URL_Temp + 'findAll', { responseType: 'json' });
  }

  getByUserVillage_temp(): Observable<any> {
    return this.http.get(API_URL_Temp + 'findAllByVillage', { responseType: 'json' });
  }

  getByRequestStatus_temp(request): Observable<any> {
    return this.http.post(API_URL_Temp + 'findAllByRequestStatus/'+request , httpOptions);
  }

  // approveByID(id): Observable<any> {
  //   return this.http.post(API_URL_Temp + 'approveById/'+id , httpOptions);
  // }

  // rejectByID(id): Observable<any> {
  //   return this.http.post(API_URL_Temp + 'rejectById/'+id , httpOptions);
  // }

  getByRequestStatusAndUserVillage_temp(request): Observable<any> {
    return this.http.post(API_URL_Temp + 'findAllByRSAndVillage/'+request , httpOptions);
  }

  getCount(): Observable<any> {
    return this.http.get(API_URL_Temp + 'getCount', { responseType: 'json' });
  }

  getNextReciptNumber(): Observable<any> {
    return this.http.get(API_URL + 'getNextReciptNumber', { responseType: 'json' });
  }

  
  getDemandByWardAndProperty(wardNumber,propertyNumber,propertyNumber1): Observable<any> {
    return this.http.post(API_URL + 'getDemandByWardAndProperty/'+wardNumber+'/'+propertyNumber+'/'+propertyNumber1 , httpOptions);
  }

  // 1.4
  getprint(format,fromDate,toDate): Observable<any> {
    return this.http.get(API_URL + 'report/'+format+'/'+fromDate+'/'+toDate, { responseType: 'blob' });
  }

  getBillprint(format,body): Observable<any> {
    return this.http.get(API_URL + 'report/'+format+'/'+body, { responseType: 'blob' });
  }

  /*
  For User--------------------------------------
  */

 updateQueue(form): Observable<any> {
  return this.http.post(API_URL + 'update-queue', form, httpOptions);
}

//  getByUserVillageQueue(status): Observable<any> {
//   return this.http.post(API_URL + 'findAllByVillageQueue/'+status , httpOptions);
// }

findAllByVillageNameQueue(villageName,status): Observable<any> {
  return this.http.post(API_URL + 'findAllByVillageNameQueue/'+villageName+'/'+status , httpOptions);
}

approveByID(id): Observable<any> {
  return this.http.post(API_URL + 'approveQueueById/'+id , httpOptions);
}

rejectByID(id): Observable<any> {
  return this.http.post(API_URL + 'rejectQueueById/'+id , httpOptions);
}


// findCountByHeaderVillageAndStatus(status): Observable<any> {
//   return this.http.post(API_URL + 'findCountByHeaderVillageAndStatus/'+status , httpOptions);
// }




sumByLastTotalBetweenReceiptNumber(receiptNumber1,receiptNumber2): Observable<any> {
  return this.http.post(API_URL + 'sumByLastTotalBetweenReceiptNumber/'+receiptNumber1+'/'+receiptNumber2 , httpOptions);
}

    //code recatore
  
    /*
    *Load Property Data With Pending Tax
    */
    findByWardNumberAndPropertyNumberAndPropertyNumber1AndVillageCdAndYearCd(wardNumber,propertyNumber,propertyNumber1): Observable<any> {
      return this.http.post(API_URL + 'findByWardNumberAndPropertyNumberAndPropertyNumber1AndVillageCdAndYearCd/'+wardNumber+'/'+propertyNumber+'/'+propertyNumber1 , httpOptions);
    }

    

    findCountByVillageAndStatus(villageCd,status): Observable<any> {
      return this.http.post(API_URL + 'findCountByVillageAndStatus/'+villageCd+'/'+status , httpOptions);
    }
    
/*
	 * With Header
	 */
    findByWardNumberAndPropertyNumberAndPropertyNumber1AndVillageCdAndYearCdAndReceiptNumber(wardNumber,propertyNumber,propertyNumber1,receiptNumber): Observable<any> {
      return this.http.post(API_URL + 'findByWardNumberAndPropertyNumberAndPropertyNumber1AndVillageCdAndYearCdAndReceiptNumber/'+wardNumber+'/'+propertyNumber+'/'+propertyNumber1+'/'+receiptNumber , httpOptions);
    }
    /*
	 * No Header
	 */
  findByWardNumberAndPropertyNumberAndPropertyNumber1AndVillageCdAndYearCdAndReceiptNumber_new(wardNumber,propertyNumber,propertyNumber1,villageCd,yearCd,receiptNumber): Observable<any> {
    return this.http.post(API_URL + 'findByWardNumberAndPropertyNumberAndPropertyNumber1AndVillageCdAndYearCdAndReceiptNumber_new/'+wardNumber+'/'+propertyNumber+'/'+propertyNumber1+'/'+villageCd +'/'+yearCd +'/'+receiptNumber , httpOptions);
  }
    
}
