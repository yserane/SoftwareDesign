import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/app/model/item-model';
import { ItemService } from 'src/app/Services/Item/item.service';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  itemForm: FormGroup;
  itemObj: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.initFormGroup();
  }
  initFormGroup(){
    this.itemForm = new FormGroup({

      randomInt: new FormControl(null, [Validators.required]),
    
    });
  }
  
  postItem(){
    console.log(this.itemForm.value);
    this.itemForm.value;
    this.itemObj = new Item();
    this.itemObj.randomInt = this.itemForm.get("randomInt").value;
    this.itemService.postItem(this.itemObj).subscribe(
      (data) => console.log(data)
    );
    
  }
}
