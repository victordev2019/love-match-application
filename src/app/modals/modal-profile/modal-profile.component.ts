import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA , MatDialogRef } from '@angular/material/dialog';
import { LoveProfileModel } from 'src/app/model/love-profile.model';

@Component({
  selector: 'app-modal-profile',
  templateUrl: './modal-profile.component.html',
  styleUrls: ['./modal-profile.component.scss']
})
export class ModalProfileComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public matchLove: LoveProfileModel,
    public dialogRef: MatDialogRef<ModalProfileComponent>
  ) {}
  
  close() : void {
    this.dialogRef.close();
  }
}
