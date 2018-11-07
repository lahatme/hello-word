import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DetailsComponent } from 'src/app/details/details.component';
import { DESCRIPTIONComponent } from 'src/app/description/description.component';
import { PROJECTComponent } from 'src/app/project/project.component';
import { CohortListComponent } from 'src/app/cohort-list/cohort-list.component';
import { PROJECTTEAMComponent } from 'src/app/project-team/project-team.component';



@NgModule({
  declarations: [
    DetailsComponent,
    DESCRIPTIONComponent,
    PROJECTComponent,
    CohortListComponent,
    PROJECTTEAMComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
})
export class AppModule { }
