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

  uploadImage(image: FormData): Observable<any> {
    return this.httpClient.post("", image, 
    { headers: {'Content-type': 'multipart/form-data;'}});
  }
  postItem(itemObj: any): Observable<any> {
    //
   return this.httpClient.post(this.endpoint+'/item', itemObj,
       { headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Accept':'application/json',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    },});

  }

  getItemById():Observable<any>{
    return this.httpClient.get(this.endpoint+'/item/1');
  }
  
}
