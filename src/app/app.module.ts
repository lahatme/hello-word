import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Line2Component } from './line2/line2.component';
import { FirstLineComponent } from './first-line/first-line.component';
import { DetailsComponent } from './details/details.component';
import { DESCRIPTIONComponent } from './description/description.component';
import { PROJECTComponent } from './project/project.component';
import { CohortListComponent } from './cohort-list/cohort-list.component';
import { AskComponent } from './ask/ask.component';
import { PROJECTTEAMComponent } from './project-team/project-team.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './cars/car/car.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogOverviewExampleComponent } from './cars/dialog-overview-example/dialog-overview-example.component';
import { DialogOverviewExampleDialogComponent } from './cars/dialog-overview-example/dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {ServiceService} from './service.service';
import { HttpClientModule } from '@angular/common/http';










@NgModule({
  declarations: [
    AppComponent,
    Line2Component,
    FirstLineComponent,
    DetailsComponent,
    DESCRIPTIONComponent,
    PROJECTComponent,
    CohortListComponent,
    AskComponent,
    PROJECTTEAMComponent,
    CarsComponent,
    CarComponent,
    HomeComponent,
    DialogOverviewExampleComponent,
    DialogOverviewExampleDialogComponent,
  ],
  entryComponents: [DialogOverviewExampleDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,


  ],
  exports: [


  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
