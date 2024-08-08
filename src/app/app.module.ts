import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowHistoryComponent } from './cars/show-history/show-history.component';
import { AddCarComponent } from './cars/add-car/add-car.component';
import { AddJobsComponent } from './jobs/add-jobs/add-jobs.component';



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ShowHistoryComponent,
    AddCarComponent,
    AddJobsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
