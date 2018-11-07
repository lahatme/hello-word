import { Component, OnInit } from '@angular/core';
import {  Input } from '@angular/core';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-first-line',
  templateUrl: './first-line.component.html',
  styleUrls: ['./first-line.component.css']
})
export class FirstLineComponent implements OnInit {
  @Input() name: string;

  constructor( public service: ServiceService) { }

  ngOnInit() {
  }

}
