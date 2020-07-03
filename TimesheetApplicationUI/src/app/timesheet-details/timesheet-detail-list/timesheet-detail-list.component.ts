import { Component, OnInit } from '@angular/core';
import { TimesheetDetailService } from 'app/shared/timesheet-detail.service';
import { TimesheetDetail } from 'app/shared/timesheet-detail.model';

@Component({
  selector: 'app-timesheet-detail-list',
  templateUrl: './timesheet-detail-list.component.html',
  styles: []
})
export class TimesheetDetailListComponent implements OnInit {
  timesheetData: TimesheetDetail[] = [];
  constructor(private service: TimesheetDetailService) { }
  
  ngOnInit() {
       this.getTimesheetDetail();
  }

  populateForm(data: TimesheetDetail) {
    debugger
   this.service.formData = Object.assign({}, data); 
  }

  getTimesheetDetail()
  {
    this.service.getTimesheetDetailsByUser()
    .subscribe(
      (responseData) => {
        debugger
        this.timesheetData = JSON.parse(responseData["_body"]);
        console.log(this.timesheetData);
        console.log("data");
      },
       
    );
  }

  onDelete(Id) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteTimesheetDetail(Id)
        .subscribe(res => {
          debugger;
          console.log("Deleted successfully");
          this.getTimesheetDetail();
        
        },
          err => {
            debugger;
            console.log(err);
          })
    }
  }

}
