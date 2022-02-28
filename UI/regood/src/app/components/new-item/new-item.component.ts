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
  category: string;
  condition: string;
  selectedFile: File

  @ViewChild("content") content: HTMLElement;

  constructor(private itemService: ItemService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.initFormGroup();
    
  }
  initFormGroup(){
    this.itemForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      description: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      zipCode: new FormControl()
    });
  }
  initItem(){
    this.itemObj = new Item();
    this.itemObj.name = this.itemForm.get('name').value;
    this.itemObj.description =this.itemForm.get('description').value;
    this.itemObj.category =  this.category;
    this.itemObj.condition = this.condition
    this.itemObj.location = {"city":this.itemForm.get('city').value, "state":this.itemForm.get('state').value, "zipCode":this.itemForm.get('zipCode').value}
  }
  
  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }
  postItem() {
    const uploadData = new FormData();
    uploadData.append('image', this.selectedFile, this.selectedFile.name);
    this.initItem();
    this.itemService.uploadImage(uploadData).subscribe(
      (data) => this.response = "it worked! ID =\n "+ data.item_id,
      (error)=> this.response = "Something went wrong! "+error.name
      );
    this.itemService.postItem(this.itemObj).subscribe(
      (data) => this.response = "it worked! ID =\n "+ data.item_id,
      (error)=> this.response = "Something went wrong! "+error.name
    );
    this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'})
  }

  setCondition(condition){
    this.condition = condition;
  }
  setCategory(e){
    this.category = e.target.value;

  }
}

