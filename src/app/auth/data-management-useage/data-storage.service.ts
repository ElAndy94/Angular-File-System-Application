// import {Injectable} from '@angular/core';
// import {HttpClient, HttpRequest} from '@angular/common/http';
// import 'rxjs/Rx';
//
// import {AuthService} from '../auth.service';
// import {UserIdService} from './user-id.service';
// import {User} from './user.model';
//
// @Injectable()
//
// export class DataStorageService {
//   constructor(private http: HttpClient,
//               private userid: UserIdService) {
//   }
//
//   storeId() {
//     const req = new HttpRequest('PUT', 'https://ng-file-system.firebaseio.com/userId.json', this.userid.storeUserId(), {reportProgress: true});
//     return this.http.request(req);
//   }


  // getTheUserId() {
  //   this.http.get<User[]>('https://ng-file-system.firebaseio.com/userId.json', {
  //     observe: 'body',
  //     responseType: 'json'
  //   })
  //     .map(
  //       (users) => {
  //         for (const user of users) {
  //           if (!user['user']) {
  //             console.log(users);
  //             user['user'] = [];
  //           }
  //         }
  //         return users;
  //       }
  //     )
  //     .subscribe(
  //       (users: User[]) => {
  //         this.userid.setUserId(users);
  //       }
  //     );
  // }
// }
