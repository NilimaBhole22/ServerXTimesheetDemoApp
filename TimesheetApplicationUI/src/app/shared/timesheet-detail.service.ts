import { Injectable } from '@angular/core';  
import 'rxjs/Rx';   
import 'rxjs/add/operator/toPromise'; 
import { TimesheetDetail } from './timesheet-detail.model';
import { Http } from '@angular/http';

@Injectable()
export class TimesheetDetailService {
    formData: TimesheetDetail;
    readonly rootURL = 'http://localhost:44362/api';
    list : TimesheetDetail[] = [];
  
  constructor(private http: Http) { }

  getTimesheetDetails(){
      return this.http.get(this.rootURL + '/TimesheetDetail/GetTimesheetDetails');
  }

  getTimesheetDetailsByUser(){
    return this.http.get(this.rootURL + '/TimesheetDetail/GetTimesheetDetailsByUser');
  }

  postTimesheetDetail() {
    return this.http.post(this.rootURL + '/TimesheetDetail/PostTimesheetDetail', this.formData);
  }

  putTimesheetDetail() {
    return this.http.put(this.rootURL + '/TimesheetDetail/PutTimesheetDetail/'+ this.formData.id, this.formData);
  }
  deleteTimesheetDetail(id) {
    return this.http.delete(this.rootURL + '/TimesheetDetail/DeleteTimesheetDetail/'+ id);
  }

}
