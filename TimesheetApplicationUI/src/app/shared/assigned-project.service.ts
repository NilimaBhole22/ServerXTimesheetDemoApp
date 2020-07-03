import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx'; 
import 'rxjs/add/operator/toPromise'; 
import { AssignedProject } from './assigned-project.model';

@Injectable()
export class AssignedProjectService {
formData: AssignedProject;
readonly rootURL = 'http://localhost:44362/api';

constructor(private http: Http) { }
  
getAssignedProjects(){
  return this.http.get(this.rootURL + '/AssignedProject/GetAssignedProjectDetails');
}

getAssignedProjectsByUser(){
  return this.http.get(this.rootURL + '/AssignedProject/GetAssignedProjectDetailsByUser');
}

// getAssignedProject(){
//   debugger
//   var stringBody = "Nilima";
//   return this.http.get(this.rootURL + '/AssignedProject' , stringBody);
//   //return this.http.get(this.rootURL + '/ProjectDetail');
// }


postAssignedProject() {
  return this.http.post(this.rootURL + '/AssignedProject/PostAssignedProjectDetail', this.formData);
}

putAssignedProject() {
  return this.http.put(this.rootURL + '/AssignedProject/PutAssignedProjectDetail/'+ this.formData.id, this.formData);
}
deleteAssignedProject(id) {
  return this.http.delete(this.rootURL + '/AssignedProject/DeleteAssignedProjectDetail/'+ id);
}


}