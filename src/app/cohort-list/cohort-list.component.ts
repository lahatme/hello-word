import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cohort-list',
  templateUrl: './cohort-list.component.html',
  styleUrls: ['./cohort-list.component.css']
})
export class CohortListComponent implements OnInit {
  query_list = [{Name: 'Primary PCI', Type: 'Query',Creation_date: '27/05/18 07:39',Modified_date:'27/05/18 08:59', Size: 8389},
    {Name: 'Primary PCI', Type: 'Query',Creation_date: '27/05/18 07:39',Modified_date:'27/05/18 08:59', Size: 8389},
    {Name: 'Primary PCI - full', Type: 'Query',Creation_date: '27/05/18 07:39',Modified_date:'27/05/18 08:59', Size: 1900},
    {Name: 'PCI Cohort - 2', Type: 'Query',Creation_date: '27/05/18 07:39',Modified_date:'27/05/18 08:59', Size: 786},
    {Name: 'PCI Cohort - 1', Type: 'Query',Creation_date: '27/05/18 07:39',Modified_date:'27/05/18 08:59', Size: 230},
    {Name: 'Primary PCI JG', Type: 'Cohort #321',Creation_date: '27/05/18 07:39',Modified_date:'27/05/18 08:59', Size: 6987}];

  constructor() {

  }

  ngOnInit() {
  }
}


