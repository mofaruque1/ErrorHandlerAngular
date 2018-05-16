import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class DataService {

  data: any;
  constructor(private http: HttpClient) { }

  getData(postId: number) {
    return this.http.get('https://jsonplaceholder.typicode.com/poss/' + postId);
  }

  authenticateUser(username: string, password: string) {
    return this.http.post('https://dpt-gatewaydev11.canadaeast.cloudapp.azure.com/user/login',
      {
        "username": username,
        "password": password,
        "realm": "ROGERS",
        "type": "EXTERNAL",
        "language": "en"
      }
    );
  }

}




// authenticateUser(username: string, password: string) {
//   return this.http.post('https://dpt-gatewaydev11.canadaeast.cloudapp.azure.com/user/login',
//     {
//       "username": username,
//       "password": password,
//       "realm": "ROGERS",
//       "type": "EXTERNAL",
//       "language": "en"
//     }
//   );
// }