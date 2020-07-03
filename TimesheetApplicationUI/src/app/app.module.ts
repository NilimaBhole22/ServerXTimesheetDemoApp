import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { RegistrationDetailComponent } from './registration-details/registration-detail/registration-detail.component';
import { RegistrationDetailListComponent } from './registration-details/registration-detail-list/registration-detail-list.component';
import { RegistrationDetailService } from './shared/registration-detail.service';
import { TimesheetDetailsComponent } from './timesheet-details/timesheet-details.component';
import { TimesheetDetailComponent } from './timesheet-details/timesheet-detail/timesheet-detail.component';
import { TimesheetDetailListComponent } from './timesheet-details/timesheet-detail-list/timesheet-detail-list.component';
import { TimesheetDetailService } from './shared/timesheet-detail.service';
import { AppRoutingModule }     from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LoginDetailService } from './shared/login-detail.service';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectListService } from './shared/project-list.service';
import { ProjectDetailComponent } from './project-list/project-detail/project-detail.component';
import { ProjectListDetailComponent } from './project-list/project-list-detail/project-list-detail.component';
import { AssignedProjectsComponent } from './assigned-projects/assigned-projects.component';
import { AssignedProjectService } from './shared/assigned-project.service';
import { AssignedProjectComponent } from './assigned-projects/assigned-project/assigned-project.component';
import { AssignedProjectListComponent } from './assigned-projects/assigned-project-list/assigned-project-list.component';
import { TimelogDetailsComponent } from './timelog-details/timelog-details.component';
import { TimelogDetailComponent } from './timelog-details/timelog-detail/timelog-detail.component';
import { TimelogDetailListComponent } from './timelog-details/timelog-detail-list/timelog-detail-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationDetailsComponent,
    RegistrationDetailComponent,
    RegistrationDetailListComponent,
    TimesheetDetailsComponent,
    TimesheetDetailComponent,
    TimesheetDetailListComponent,
    HeaderComponent,
    LoginComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectListDetailComponent,
    AssignedProjectsComponent,
    AssignedProjectsComponent,
    AssignedProjectComponent,
    AssignedProjectListComponent,
    TimelogDetailsComponent,
    TimelogDetailComponent,
    TimelogDetailListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [RegistrationDetailService, TimesheetDetailService,LoginDetailService,ProjectListService, AssignedProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
