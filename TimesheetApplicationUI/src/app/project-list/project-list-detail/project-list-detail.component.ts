import { Component, OnInit } from '@angular/core';
import { ProjectList } from 'app/shared/project-list.model';
import { ProjectListService } from 'app/shared/project-list.service';

@Component({
  selector: 'app-project-list-detail',
  templateUrl: './project-list-detail.component.html',
  styles: []
})
export class ProjectListDetailComponent implements OnInit {
  projectData: ProjectList[] = [];
  constructor(private service: ProjectListService) {
    
   }

   populateForm(data: ProjectList) {
     debugger
    this.service.formData = Object.assign({}, data);
  }

  ngOnInit() {
    this.getProjectDetail();
  }

  getProjectDetail()
  {
    this.service.getProjectDetails()
      .subscribe(
        (projectData) => {
          debugger
          this.projectData = JSON.parse(projectData["_body"]);
          console.log(this.projectData);
          console.log("data");
        },
          
      );

  }
    

  onDelete(Id) {
      if (confirm('Are you sure to delete this record ?')) {
        this.service.deleteProjectDetail(Id)
          .subscribe(res => {
            debugger;
            console.log("Deleted successfully");
            this.getProjectDetail();
          },
            err => {
              debugger;
              console.log(err);
            })
      }
  }

}
