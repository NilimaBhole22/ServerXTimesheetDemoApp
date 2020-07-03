import { Component, OnInit } from '@angular/core';
import { ProjectListService } from 'app/shared/project-list.service';
import { NgForm } from '@angular/forms';
import { ProjectList } from 'app/shared/project-list.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styles: []
})
export class ProjectDetailComponent implements OnInit {
  projectData: ProjectList[] = [];
  constructor(private service: ProjectListService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.form.reset();
    this.service.formData = {
      id: 0,
      project: ''
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
    this.service.postProjectDetail().subscribe(
      res => {
        debugger;
        this.resetForm(form);
        this.getProjectData();
      },
      err => {
        debugger;
        console.log(err);
      }
    )
  }
  updateRecord(form: NgForm) {
    this.service.putProjectDetail().subscribe(
      res => {
        this.resetForm(form);
        this.getProjectData();
      },
      err => {
        console.log(err);
      }
    )
  }

  getProjectData(){
    this.service.getProjectDetails()
     .subscribe(
       (projectData) => {
         debugger
         this.projectData = JSON.parse(projectData["_body"]);
         console.log(this.projectData);
         console.log("data");
       },
        // You may show error message on the template
     );
  }
  
}
