import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/Item/item.service';
import { Router } from '@angular/router';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items: any[] = [];
  pageIndex =1;
  constructor(private itemService: ItemService, private router: Router) { }

  ngOnInit(): void {

    this.itemService.getAllItems(this.pageIndex, 9).subscribe(
      (data) => this.items = data,
      (error) => {
        if (error.status == 401) {
          alert("Session had Expired, please log in");
          this.router.navigateByUrl("/login");
        }
      }
    )
  }
  onChangePage(pe:PageEvent) {
    console.log(pe.pageIndex);
    console.log(pe.pageSize);
    this.itemService.getAllItems(pe.pageIndex+1, pe.pageSize-1).subscribe(
      (data) => this.items = data,
      (error) => {
        if (error.status == 401) {
          alert("Session had Expired, please log in");
          this.router.navigateByUrl("/login");
        }
      }
    )
  } 
}
