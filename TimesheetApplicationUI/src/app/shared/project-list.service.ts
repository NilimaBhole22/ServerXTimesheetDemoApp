import { Injectable } from '@angular/core';
import { ProjectList } from './project-list.model';
import { Http } from '@angular/http';

@Injectable()
export class ProjectListService {
  formData: ProjectList;
  readonly rootURL = 'http://localhost:44362/api';
  
constructor(private http: Http) { }
  
  getProjectDetails(){
    return this.http.get(this.rootURL + '/ProjectDetail');
  }

  postProjectDetail() {
    return this.http.post(this.rootURL + '/ProjectDetail', this.formData);
  }

  putProjectDetail() {
    return this.http.put(this.rootURL + '/ProjectDetail/'+ this.formData.id, this.formData);
  }
  deleteProjectDetail(id) {
    return this.http.delete(this.rootURL + '/ProjectDetail/'+ id);
  }

}
