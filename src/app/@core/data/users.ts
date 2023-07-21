import { Observable } from 'rxjs';

export interface User {
  name: string;
  picture: string;
}



export abstract class UserData {
  abstract getUser(): Observable<User>;
}
