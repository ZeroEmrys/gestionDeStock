import { Component, OnInit } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-delete-confirm-dialog',
  templateUrl: './delete-confirm-dialog.component.html',
  styleUrls: ['./delete-confirm-dialog.component.css']
})
export class DeleteConfirmDialogComponent {
    constructor(public dialogRef: MatDialogRef<DeleteConfirmDialogComponent>) { }
    onNoClick(): void {
      this.dialogRef.close();
    }
    ngOnInit() {
    }
  
  }
  

