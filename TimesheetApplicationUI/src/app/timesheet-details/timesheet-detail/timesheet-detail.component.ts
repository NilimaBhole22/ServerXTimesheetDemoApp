import { Component, OnInit } from '@angular/core';
import { TimesheetDetailService } from 'app/shared/timesheet-detail.service';
import { NgForm } from '@angular/forms';
import { TimesheetDetail } from 'app/shared/timesheet-detail.model';
import { ProjectListService } from 'app/shared/project-list.service';
import { ProjectList } from 'app/shared/project-list.model';
import { RegistrationDetail } from 'app/shared/registration-detail.model';
import { RegistrationDetailService } from 'app/shared/registration-detail.service';
import { LoginDetailService } from 'app/shared/login-detail.service';
import { LoginDetail } from 'app/shared/login-detail.model';
import { AssignedProject } from 'app/shared/assigned-project.model';
import { AssignedProjectService } from 'app/shared/assigned-project.service';

@Component({
  selector: 'app-timesheet-detail',
  templateUrl: './timesheet-detail.component.html',
  styles: []
})
export class TimesheetDetailComponent implements OnInit {
  timesheetData: TimesheetDetail[] = [];
  registerData: RegistrationDetail[] = [];
  registrationData: RegistrationDetail[] = [];
  projectsData: ProjectList[] = [];
  //projectsData: AssignedProject[] = [];
  loginData: LoginDetail[] = [];
  user;
  constructor(private service: TimesheetDetailService, private projectService: ProjectListService, private registerservice: RegistrationDetailService, private loginService:LoginDetailService, private assignService: AssignedProjectService) {
    debugger

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


    this.assignService.getAssignedProjectsByUser()
    .subscribe(
      (responseData) => {
        debugger
        this.projectsData = JSON.parse(responseData["_body"]);
        console.log(this.projectsData);
        console.log("data");
      },
       
    );

    // this.projectService.getProjectDetails()
    // .subscribe(
    //   (responseData) => {
    //     debugger
    //     this.projectsData = JSON.parse(responseData["_body"]);
    //     console.log(this.projectsData);
    //     console.log("data");
    //   },
       
    // );




    // this.assignService.getAssignedProject()
    // .subscribe(
    //   (responseData) => {
    //     debugger
    //     this.projectsData = JSON.parse(responseData["_body"]);
    //     console.log(this.projectsData.filter(this.user));
    //     console.log("data");
    //   },
       
    // );
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
      projectName: '',
      recordDate:'',
      hour: 0,
      comment: ''
    }
  }

  // onSubmit(form: NgForm) {
  //   console.log("After Submit");
  //   debugger
  //   this.service.postTimesheetDetail(form.value).subscribe(
  //     res => {},
  //     err =>{
  //       console.log("timesheet error")
  //     }
  //   )
  // }

  onSubmit(form: NgForm) {
    debugger
    // this.loginService.getLoginDetails()
    //  .subscribe(
    //    (response) => {
    //      debugger
    //      this.loginData = JSON.parse(response["_body"]);
    //      this.service.formData.user = this.loginData[0].username;
    //      console.log(this.loginData);
    //      console.log("data");
    //    },
    //     // You may show error message on the template
    //  );

    //  this.registerservice.getRegistrationDetails()
    //  .subscribe(
    //    (response) => {
    //      debugger
    //      this.registrationData = JSON.parse(response["_body"]);
    //      console.log(this.registrationData);
    //      console.log("data");
    //    },
         //You may show error message on the template
    // );
    debugger
      //this.service.formData.user = this.loginData[0].username;
    if (this.service.formData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    debugger
    this.service.postTimesheetDetail().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.getTimesheetData();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    debugger
    this.service.putTimesheetDetail().subscribe(
      res => {
        this.resetForm(form);
        this.getTimesheetData();
      },
      err => {
        console.log(err);
      }
    )
  }


  getTimesheetData(){
    this.service.getTimesheetDetails()
     .subscribe(
       (timesheet) => {
         debugger
         this.timesheetData = JSON.parse(timesheet["_body"]);
         console.log(this.timesheetData);
         console.log("data");
       },
        // You may show error message on the template
     );
  }



}
