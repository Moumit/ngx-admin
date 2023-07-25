
import { Injectable } from '@angular/core';

import { BaseApi } from '../Core';
import AdminUser from '../Entity/AdminUser';

@Injectable()
export class AdminUserService extends BaseApi {





  Login(userName: string, password: string, domain: string) {

    return this.Post<AdminUser>("AdminUser/Login", { userName: userName, password: password, domain: domain });
  }
}
