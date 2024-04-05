import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientsComponent } from './patients/patients.component';
import { ImagesComponent } from './images/images.component';
import { ReportsComponent } from './reports/reports.component';
import { CommunityComponent } from './community/community.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'patients', component: PatientsComponent},
  {path: 'images', component: ImagesComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'community', component: CommunityComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
