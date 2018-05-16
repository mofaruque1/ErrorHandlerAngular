import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataService {

  data:any;
  constructor(private http: HttpClient) { }

  getData(postId:number) {
  
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+postId);
  }

}
