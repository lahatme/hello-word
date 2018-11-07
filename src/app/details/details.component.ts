import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  Created = 'Apr 3, 2018';
  Updated = 'Apr 3, 2018';
  Active = '91 days';

  constructor(public service: ServiceService) { }

  ngOnInit() {
  }

}
