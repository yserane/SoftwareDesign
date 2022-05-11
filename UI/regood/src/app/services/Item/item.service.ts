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
    let headers = {'access_token': localStorage.getItem("userToken")};
    return this.httpClient.post(this.endpoint+'/file?item_id='+itemId, image, {headers: headers});
  }
  postItem(itemObj: any): Observable<any> {
    let headers = {'access_token': localStorage.getItem("userToken")};
   return this.httpClient.post(this.endpoint+'/item', itemObj,
   {headers: headers});

  }

  getItemById():Observable<any>{
    let headers = {'access_token': localStorage.getItem("userToken")};
    return this.httpClient.get(this.endpoint+'/item/1',  {headers: headers});
  }

  getItemImage(id: string):Observable<any> {
    let headers = {'access_token': localStorage.getItem("userToken")};
    return this.httpClient.get(this.endpoint+'/item_url?item_id='+id,{headers: headers});

  }

  getAllItems(index, range):Observable<any>{
    let headers = {'access_token': localStorage.getItem("userToken")};
    return this.httpClient.get(this.endpoint+'/item?row_index='+index+'&range='+range,  {headers: headers})
  }

  getItemsSize():Observable<any>{
    let headers = {'access_token': localStorage.getItem("userToken")};

    return this.httpClient.get(this.endpoint+'/rest/item_size',  {headers: headers})

  }
  
}
