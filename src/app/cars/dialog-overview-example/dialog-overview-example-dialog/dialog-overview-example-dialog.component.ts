import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogData} from '../dialog-overview-example.component';
import {ServiceService} from '../../../service.service';


@Component({
  selector: 'app-dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.component.html',
  styleUrls: ['./dialog-overview-example-dialog.component.css']
})
export class DialogOverviewExampleDialogComponent implements OnInit {
  constructor(public service: ServiceService,
              public dialogRef: MatDialogRef<DialogOverviewExampleDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  doThis(name, description) {
    console.log(name.value);
    this.service.titel_name = name.value;
    this.service.description = description.value;
  }

  ngOnInit(): void {
  }
}
