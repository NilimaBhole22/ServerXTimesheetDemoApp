import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginDetailService } from 'app/shared/login-detail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  public response : boolean;
  constructor(private service: LoginDetailService, private router: Router) { }

  ngOnInit() {
    this.resetForm();
  }

   onSubmit() {
    debugger
      console.log("After Submit");
      this.service.postLoginDetail().subscribe(
        res => {
          debugger;
          this.response = JSON.parse(res["_body"]);
          //this.resetForm(form);
          if(this.response == true){
            this.router.navigate(['timesheet-list']);
          }
          else{
            this.router.navigate(['login']);
            console.log("Invalid credential");
          }
          console.log(this.response);
          console.log("Submitted successfully");
        },
        err => {
          debugger;
          console.log(err);
        }
      )
     }

    resetForm(form?: NgForm) {
      if (form != null)
        form.form.reset();
      this.service.formData = {
        id: 0,
        username: '',
        password: ''
      }
    }

}
