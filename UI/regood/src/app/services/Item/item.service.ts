import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Item } from 'src/app/model/item-model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  endpoint = 'http://{localhost}:3000/api';
  constructor(private httpClient: HttpClient) { }

  postItem(itemObj: Item): Observable<any> {
    return this.httpClient.post(this.endpoint+'/item', itemObj,
       { headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },});

  }

}
