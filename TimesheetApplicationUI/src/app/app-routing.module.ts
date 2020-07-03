import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TimesheetDetailsComponent } from './timesheet-details/timesheet-details.component';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { LoginComponent } from './login/login.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { AssignedProjectsComponent } from './assigned-projects/assigned-projects.component';
import { TimelogDetailsComponent } from './timelog-details/timelog-details.component';

const appRoutes: Routes =[
  {path:'timesheet-list', component: TimesheetDetailsComponent},
  {path:'registration', component: RegistrationDetailsComponent},
  {path:'login', component: LoginComponent},
  {path:'project', component: ProjectListComponent},
  {path:'assigned-project', component: AssignedProjectsComponent},
  {path:'userdetails', component: RegistrationDetailsComponent},
  {path:'timelog-details', component: TimelogDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
