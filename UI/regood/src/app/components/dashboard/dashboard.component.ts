import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/Item/item.service';
import {MatDialog} from '@angular/material/dialog';
import { PostItemModalComponent } from '../post-item-modal/post-item-modal.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: any[] = [];
  constructor(private itemService: ItemService, public dialog: MatDialog) { }

  ngOnInit(): void {

    this.itemService.getAllItems().subscribe(
      (data) => this.items = data
    )
  }

  openDialog(item) {
    const dialogRef = this.dialog.open(PostItemModalComponent);
    

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
