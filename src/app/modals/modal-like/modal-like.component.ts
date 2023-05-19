import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-like',
  templateUrl: './modal-like.component.html',
  styleUrls: ['./modal-like.component.scss']
})
export class ModalLikeComponent implements OnInit{

  constructor(public dialogRef: MatDialogRef<ModalLikeComponent>){}

  ngOnInit(): void {}

  continue(): void {
    this.dialogRef.close();
  }
}
