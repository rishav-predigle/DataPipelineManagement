import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {
  message:any
  constructor(@Inject(MAT_DIALOG_DATA) public data:any,public dialogRef:MatDialogRef<any>,public rout:Router) { 
    this.message=data.msg
  }
  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close()
    this.rout.navigate([this.data.route]);

  }

}
