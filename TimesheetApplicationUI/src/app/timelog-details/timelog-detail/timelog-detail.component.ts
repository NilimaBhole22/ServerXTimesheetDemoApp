import { Component, OnInit } from '@angular/core';
import { RegistrationDetail } from 'app/shared/registration-detail.model';
import { ProjectList } from 'app/shared/project-list.model';
import { Router } from '@angular/router';
import { RegistrationDetailService } from 'app/shared/registration-detail.service';
import { ProjectListService } from 'app/shared/project-list.service';
import { NgForm } from '@angular/forms';
import { TimesheetDetailService } from 'app/shared/timesheet-detail.service';

@Component({
  selector: 'app-timelog-detail',
  templateUrl: './timelog-detail.component.html',
  styles: []
})
export class TimelogDetailComponent implements OnInit {
  userData: RegistrationDetail[] = [];
  projectList: ProjectList[] = [];
  // assignedData: AssignedProject[] = [];
  // loginData: LoginDetail[] = [];
  user;
  //isAllowed :string = "Admin";
  constructor(private router: Router, private registerservice: RegistrationDetailService, private projectService: ProjectListService, private service: TimesheetDetailService) { 
    
    // this.loginService.getLoginDetails()
    // .subscribe(
    //   (response) => {
    //     debugger
    //     this.loginData = JSON.parse(response["_body"]);
    //     this.service.formData.user = this.loginData[0].username;
    //     this.user = this.loginData[0].username;
    //     console.log(this.loginData);
    //     console.log("data");
    //   },
       
    // );

    this.registerservice.getRegistrationDetails()
    .subscribe(
      (responseData) => {
        debugger
        this.userData = JSON.parse(responseData["_body"]);
        console.log(this.userData);
        console.log("data");
      },
       
    );

    this.projectService.getProjectDetails()
    .subscribe(
      (responseData) => {
        debugger
        this.projectList = JSON.parse(responseData["_body"]);
        console.log(this.projectList);
        console.log("data");
      },
       
    );
  }

  ngOnInit() {
    //this.resetForm();
  }

  // resetForm(form?: NgForm) {
  //   if (form != null)
  //     form.form.reset();
  //   this.service.formData = {
  //     id: 0,
  //     user: '',
  //     project: ''
  //   }
  // }

  onSubmit(form: NgForm) {
    debugger
    
      this.insertRecord(form);
   
  }

  insertRecord(form: NgForm) {
    // this.service.postAssignedProject().subscribe(
    //   res => {
    //     debugger;
    //     this.resetForm(form);
    //     this.router.navigate(['timesheet-list']);
    //   },
    //   err => {
    //     debugger;
    //     console.log("Password Invalid or invalid data");
    //     console.log(err);
    //   }
    // )
  }
  
  getAssignedProjectData(){
    // this.service.getAssignedProjects()
    //  .subscribe(
    //    (response) => {
    //      debugger
    //      this.assignedData = JSON.parse(response["_body"]);
    //      console.log(this.assignedData);
    //      console.log("data");
    //    },
        
    //  );
  }


}
