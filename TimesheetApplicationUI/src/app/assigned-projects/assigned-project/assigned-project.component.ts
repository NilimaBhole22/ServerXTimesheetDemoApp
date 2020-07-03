import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AssignedProject } from 'app/shared/assigned-project.model';
import { AssignedProjectService } from 'app/shared/assigned-project.service';
import { Router } from '@angular/router';
import { RegistrationDetail } from 'app/shared/registration-detail.model';
import { RegistrationDetailService } from 'app/shared/registration-detail.service';
import { ProjectList } from 'app/shared/project-list.model';
import { ProjectListService } from 'app/shared/project-list.service';
import { LoginDetailService } from 'app/shared/login-detail.service';
import { LoginDetail } from 'app/shared/login-detail.model';

@Component({
  selector: 'app-assigned-project',
  templateUrl: './assigned-project.component.html',
  styles: []
})
export class AssignedProjectComponent implements OnInit {
  registerData: RegistrationDetail[] = [];
  projectData: ProjectList[] = [];
  assignedData: AssignedProject[] = [];
  loginData: LoginDetail[] = [];
  user;
  isAllowed :string = "Admin";
  constructor(private service: AssignedProjectService, private router: Router, private registerservice: RegistrationDetailService, private projectService: ProjectListService, private loginService: LoginDetailService) { 
    
    this.loginService.getLoginDetails()
    .subscribe(
      (response) => {
        debugger
        this.loginData = JSON.parse(response["_body"]);
        this.service.formData.user = this.loginData[0].username;
        this.user = this.loginData[0].username;
        console.log(this.loginData);
        console.log("data");
      },
       
    );

    this.registerservice.getRegistrationDetails()
    .subscribe(
      (responseData) => {
        debugger
        this.registerData = JSON.parse(responseData["_body"]);
        console.log(this.registerData);
        console.log("data");
      },
       
    );

    this.projectService.getProjectDetails()
    .subscribe(
      (responseData) => {
        debugger
        this.projectData = JSON.parse(responseData["_body"]);
        console.log(this.projectData);
        console.log("data");
      },
       
    );
  }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      id: 0,
      user: '',
      project: ''
    }
  }

  onSubmit(form: NgForm) {
    debugger
    if (this.service.formData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
    this.getAssignedProjectData();
  }

  insertRecord(form: NgForm) {
    this.service.postAssignedProject().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.router.navigate(['timesheet-list']);
      },
      err => {
        debugger;
        console.log("Password Invalid or invalid data");
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putAssignedProject().subscribe(
      res => {
        this.resetForm(form);
        
      },
      err => {
        console.log(err);
      }
    )
  }

  getAssignedProjectData(){
    this.service.getAssignedProjects()
     .subscribe(
       (response) => {
         debugger
         this.assignedData = JSON.parse(response["_body"]);
         console.log(this.assignedData);
         console.log("data");
       },
        
     );
  }

}
