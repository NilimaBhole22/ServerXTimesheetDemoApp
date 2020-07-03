import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrationDetailService } from 'app/shared/registration-detail.service';
import { RegistrationDetail } from 'app/shared/registration-detail.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-detail',
  templateUrl: './registration-detail.component.html',
  styles: []
})
export class RegistrationDetailComponent implements OnInit {
  registrationData: RegistrationDetail[] = [];
  constructor(private service: RegistrationDetailService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      id: 0,
      username: '',
      password: '',
      confirmPassword: '',
      userId: ''
    }
  }

  onSubmit(form: NgForm) {
    debugger
    if (this.service.formData.id == 0)
      this.insertRecord(form);
    else
      this.updateRecord(form);
  }

  insertRecord(form: NgForm) {
    this.service.postRegistrationDetail().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.getRegistrationData();
        this.router.navigate(['login']);
      },
      err => {
        debugger;
        console.log("Password Invalid");
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putRegistrationDetail().subscribe(
      res => {
        this.resetForm(form);
      },
      err => {
        console.log(err);
      }
    )
  }

  getRegistrationData(){
    this.service.getRegistrationDetails()
     .subscribe(
       (registration) => {
         debugger
         this.registrationData = JSON.parse(registration["_body"]);
         console.log(this.registrationData);
         console.log("data");
       },
        
     );
  }


}
