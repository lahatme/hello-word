import { Component, OnInit } from '@angular/core';
import {Patient} from '../patient';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  list: Patient[];


  constructor(private carService: ServiceService) {
  }

  ngOnInit(): void {
    this.carService.getPatients().subscribe((data: any[]) => {
      this.list = (data);

    });

  }




}
