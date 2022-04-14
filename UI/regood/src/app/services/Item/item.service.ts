import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Item } from 'src/app/model/item-model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  endpoint = 'http://vincentprivatenas.mynetgear.com:7070/reGood/rest';
  headers = {'access_token': localStorage.getItem("userToken")};

  constructor(private httpClient: HttpClient) { }

  uploadImage(image: FormData, itemId): Observable<any> {
    return this.httpClient.post(this.endpoint+'/file?item_id='+itemId, image, {headers: this.headers});
  }
  postItem(itemObj: any): Observable<any> {
    //
   return this.httpClient.post(this.endpoint+'/item', itemObj,
   {headers: this.headers});

  }

  getItemById():Observable<any>{
    return this.httpClient.get(this.endpoint+'/item/1',  {headers: this.headers});
  }

  getAllItems(index, range):Observable<any>{
    return this.httpClient.get(this.endpoint+'/item?row_index='+index+'&range='+range,  {headers: this.headers})
  }
  
}
