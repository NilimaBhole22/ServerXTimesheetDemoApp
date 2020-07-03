import { Component, OnInit } from '@angular/core';
import { AssignedProject } from 'app/shared/assigned-project.model';
import { AssignedProjectService } from 'app/shared/assigned-project.service';

@Component({
  selector: 'app-assigned-project-list',
  templateUrl: './assigned-project-list.component.html',
  styles: []
})
export class AssignedProjectListComponent implements OnInit {
  assignedProjectData: AssignedProject[] = [];
  constructor(private service: AssignedProjectService) { }

   populateForm(data: AssignedProject) {
     debugger
    this.service.formData = Object.assign({}, data);
  }

  ngOnInit() {
    this.getAssignedProjectDetail();
  }

  getAssignedProjectDetail()
  {
    this.service.getAssignedProjects()
      .subscribe(
        (response) => {
          debugger
          this.assignedProjectData = JSON.parse(response["_body"]);
          console.log(this.assignedProjectData);
          console.log("data");
        },
          // You may show error message on the template
      );

  }
    

  onDelete(Id) {
      if (confirm('Are you sure to delete this record ?')) {
        this.service.deleteAssignedProject(Id)
          .subscribe(res => {
            debugger;
            console.log("Deleted successfully");
            this.getAssignedProjectDetail();
            },
            err => {
              debugger;
              console.log(err);
            })
      }
    }
}
