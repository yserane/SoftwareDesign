import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Item } from 'src/app/model/item-model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  endpoint = 'http://vincentprivatenas.mynetgear.com:7070/reGood/rest';
  constructor(private httpClient: HttpClient) { }

  uploadImage(image: FormData, itemId): Observable<any> {
    return this.httpClient.post(this.endpoint+'/file?item_id='+itemId, image);
  }
  postItem(itemObj: any): Observable<any> {
    //
   return this.httpClient.post(this.endpoint+'/item', itemObj,
       { headers: {
    },});

  }

  getItemById():Observable<any>{
    return this.httpClient.get(this.endpoint+'/item/1');
  }

  getAllItems():Observable<any>{
    return this.httpClient.get(this.endpoint+'/item')
  }
  
}
