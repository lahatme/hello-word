import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-line2',
  templateUrl: './line2.component.html',
  styleUrls: ['./line2.component.css']
})
export class Line2Component implements OnInit {

  constructor() { }

  ngOnInit() {  }

  ToggleComplete(){
    let completes = document.querySelectorAll(".complete");
    let no_completes = document.querySelectorAll(".li");
    let lastComplete = no_completes[completes.length];

    lastComplete.classList.toggle('complete');
  }

}

