import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-post-item-modal',
  templateUrl: './post-item-modal.component.html',
  styleUrls: ['./post-item-modal.component.css']
})
export class PostItemModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  item: any;
  ngOnInit(): void {

    this.item = this.data.item;
  }

}
