import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/app/model/item-model';
import { ItemService } from '../../services/Item/item.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  itemForm: FormGroup;
  itemObj: Item;
  response: string;
  @ViewChild("content") content: HTMLElement;

  constructor(private itemService: ItemService, private modalService: NgbModal) { }

  ngOnInit(): void {
    // this.initFormGroup();
    this.initItem();
    // this.itemService.getItem().subscribe((data)=> console.log(data));
  }
  initFormGroup(){
    this.itemForm = new FormGroup({

      randomInt: new FormControl(null, [Validators.required]),
    
    });
  }
  initItem(){
    this.itemObj = new Item();
    this.itemObj.description = "1st Sprint To Do";
    this.itemObj.name = "Demo Item";
    this.itemObj.category = "Document";
    this.itemObj.condition = "Good";
    this.itemObj.location = "U.S."
  }
  
  postItem(){
    // console.log(this.itemForm.value);
    // this.itemForm.value;

    // this.itemObj.randomInt = this.itemForm.get("randomInt").value;

    this.itemService.postItem(this.itemObj).subscribe(
      (data) => this.response = "it worked!\n "+ data,
      (error)=> this.response = error.message
    );
    this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'})
  }
}

