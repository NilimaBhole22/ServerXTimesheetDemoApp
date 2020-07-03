import { Injectable } from '@angular/core';
import { RegistrationDetail } from './registration-detail.model';
import { Http } from '@angular/http';
import 'rxjs/Rx';  
import 'rxjs/add/operator/toPromise'; 

@Injectable()
export class RegistrationDetailService {
  formData: RegistrationDetail;
  readonly rootURL = 'http://localhost:44362/api';
  list : RegistrationDetail[] = [];

  constructor(private http: Http) { }
  getRegistrationDetails(){
    return this.http.get(this.rootURL + '/RegistrationDetail');
  }

  postRegistrationDetail() {
    return this.http.post(this.rootURL + '/RegistrationDetail', this.formData);
  }

  putRegistrationDetail() {
    return this.http.put(this.rootURL + '/RegistrationDetail/'+ this.formData.id, this.formData);
  }
  deleteRegistrationDetail(id) {
    return this.http.delete(this.rootURL + '/RegistrationDetail/'+ id);
  }

}
