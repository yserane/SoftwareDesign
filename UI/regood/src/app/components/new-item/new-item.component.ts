import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Item } from 'src/app/model/item-model';
import { ItemService } from '../../services/Item/item.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/services/Authentication/authentication.service';

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
  selectedFile: File;

  @ViewChild("content") content: HTMLElement;

  constructor(private itemService: ItemService, private modalService: NgbModal) {

   }

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
    this.itemObj.city = this.itemForm.get('city').value
    this.itemObj.zipCode=this.itemForm.get('zipCode').value
    this.itemObj.state =this.itemForm.get('state').value
  }
  
  onFileChanged(event) {
    this.selectedFile = event.target.files[0]
  }
  postItem() {
    this.initItem();
    this.itemService.postItem(this.itemObj).subscribe(
      (data) => {
        this.response = "it worked!\n ";
        this.itemObj.id = data.item_id;
        if(this.selectedFile) {
          const uploadData = new FormData();
          uploadData.append('image', this.selectedFile, this.selectedFile.name);
          this.itemService.uploadImage(uploadData, this.itemObj.id).subscribe(
            (data) => this.response = "it worked!",
            (error)=> this.response = "Something went wrong! "+error.name
            );
        }
    },
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
  onFileDropped(event) {
    this.selectedFile = event[0]
  }
  fileBrowseHandler(event) {
    this.selectedFile = event[0]
  }
  deleteFile(){
    this.selectedFile = null;
  }
}

