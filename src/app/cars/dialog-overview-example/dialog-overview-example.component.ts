import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {DialogOverviewExampleDialogComponent} from './dialog-overview-example-dialog/dialog-overview-example-dialog.component';
import {ServiceService} from '../../service.service';



export interface DialogData {
  animal: string;
  name: string;
  description: string;

}


@Component({
  selector: 'app-dialog-overview-example',
  templateUrl: './dialog-overview-example.component.html',
  styleUrls: ['./dialog-overview-example.component.css']
})
export class DialogOverviewExampleComponent implements OnInit {
  message = 'Hola Mundo!';
  name1: string;
  description: string;

  constructor(public dialog: MatDialog, public service: ServiceService) {}


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '50%',
      data: {description: this.description},

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      const res_arr = result.split('|');
      this.name1 = res_arr[0];
      this.description = res_arr[1];
      this.message = res_arr[1];
      console.log(this.name1);

    });
  }

  ngOnInit(): void {
  }



}


