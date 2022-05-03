import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-request-modal',
  templateUrl: './request-modal.component.html',
  styleUrls: ['./request-modal.component.css']
})
export class RequestModalComponent implements OnInit {
  msg: String="";
  remainingText: number = 0;
  title: String = ""
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.title = this.data.title;
  }

  msgChanged(text) {

    this.remainingText = text.length;
   }
}
