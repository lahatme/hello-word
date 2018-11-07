import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ServiceService} from '../service.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {


  constructor(public service: ServiceService) {
  }

  message: string;

  ngOnInit() {
  }

}


