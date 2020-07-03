import { Component, OnInit } from '@angular/core';
import { RegistrationDetail } from 'app/shared/registration-detail.model';
import { RegistrationDetailService } from 'app/shared/registration-detail.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-registration-detail-list',
  templateUrl: './registration-detail-list.component.html',
  styles: []
})
export class RegistrationDetailListComponent implements OnInit {
  registrationData: RegistrationDetail[] = [];

  constructor(private service: RegistrationDetailService) {
    
   }

   populateForm(data: RegistrationDetail) {
     debugger
    this.service.formData = Object.assign({}, data);
  
  }

  ngOnInit() {
    this.getRegistrationDetail();
  }

getRegistrationDetail()
{
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
  

onDelete(Id) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteRegistrationDetail(Id)
        .subscribe(res => {
          debugger;
          console.log("Deleted successfully");
          this.getRegistrationDetail();
        
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }

}
