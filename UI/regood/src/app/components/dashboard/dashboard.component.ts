import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/Item/item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: any[] = [];
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {

    this.itemService.getAllItems().subscribe(
      (data) => this.items = data
    )

  //   let obj =    {
  //     item_id: 7,
  //     name: "Item-name",
  //     description: "description here ",
  //     category: "Cloth",
  //     condition: "Good",
  //     city: "Oswego",
  //     state: "New York",
  //     zipCode: "13126"
  // };
    // this.items.push(obj);
    // this.items.push(obj);
    // this.items.push(obj);
    // this.items.push(obj);
    // this.items.push(obj);
    // this.items.push(obj);
    // this.items.push(obj);

  }

}
