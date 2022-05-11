import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ItemService } from 'src/app/services/Item/item.service';

@Component({
  selector: 'app-post-item-modal',
  templateUrl: './post-item-modal.component.html',
  styleUrls: ['./post-item-modal.component.css']
})
export class PostItemModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private itemService: ItemService) {}
  item: any;
  image:String="";
  ngOnInit(): void {

    this.item = this.data.item;
    this.itemService.getItemImage(this.item.item_id).subscribe(
      (data)=> this.image = data && data.length >0?data[0]:"../../../assets/regood_logo.png"
    )

  }

}
