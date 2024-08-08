import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarsComponent } from './cars/cars.component';
import { JobsComponent } from './jobs/jobs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:'',redirectTo: '/home/dashboard',pathMatch: 'full' },
  {path:'home',component:HomeComponent,
    children:[
      {path:'dashboard',component:DashboardComponent},
      {path:'cars',component:CarsComponent},
      {path:'jobs',component:JobsComponent},
      {path:'services',component:ServicesComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[
  HomeComponent,
  DashboardComponent,
  CarsComponent,
  JobsComponent
]
