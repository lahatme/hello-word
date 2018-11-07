import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DESCRIPTIONComponent implements OnInit {

  constructor(public service: ServiceService) { }

  ngOnInit() {
  }

}
