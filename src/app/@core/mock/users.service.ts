import { of as observableOf, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User, UserData } from '../data/users';

@Injectable()
export class UserService extends UserData {



  private users: User[] = [
    { name: 'Mr MKM', picture: '' }
  ]


  getUser(): Observable<User> {
    return observableOf(this.users.find(i => i));
  }
}
