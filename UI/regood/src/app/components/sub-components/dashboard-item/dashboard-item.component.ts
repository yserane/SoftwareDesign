import { Component, Input, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PostItemModalComponent } from '../post-item-modal/post-item-modal.component';
import { RequestModalComponent } from '../request-modal/request-modal.component';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.css']
})
export class DashboardItemComponent implements OnInit {

  @Input() item: any = {}
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(event) {
    const dialogRef = this.dialog.open(PostItemModalComponent, {
      height: '600px',
      width: '600px',
      data: {
        item: this.item,
      }
    });
}
requestItem() {
  const dialogRef = this.dialog.open(RequestModalComponent, {
    height: '300px',
    width: '500px',
    data: {
      title: this.item.name,
    }
  });

}
}
