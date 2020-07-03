import { Injectable } from '@angular/core';
import { LoginDetail } from './login-detail.model';
import { Http } from '@angular/http';
import 'rxjs/Rx';  
import 'rxjs/add/operator/toPromise'; 

@Injectable()
export class LoginDetailService {
  formData: LoginDetail;
  readonly rootURL = 'http://localhost:44362/api';

  constructor(private http: Http) { }
  getLoginDetails(){
    return this.http.get(this.rootURL + '/LoginDetail');
  }

  postLoginDetail() {
    return this.http.post(this.rootURL + '/LoginDetail', this.formData);
  }

}
