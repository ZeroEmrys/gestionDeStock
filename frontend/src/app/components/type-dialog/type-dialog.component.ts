import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-type-dialog',
  templateUrl: './type-dialog.component.html',
  styleUrls: ['./type-dialog.component.css']
})
export class TypeDialogComponent{

  constructor(
    public dialogRef:MatDialogRef<TypeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  onNoClick() {
    this.dialogRef.close();
  }

}
