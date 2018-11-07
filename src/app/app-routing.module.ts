import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './cars/car/car.component';
import {HomeComponent} from './home/home.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'cars', component: CarsComponent, children:[
      {path: ':id', component: CarComponent }
    ]},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
