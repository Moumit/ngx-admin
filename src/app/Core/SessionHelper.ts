

import { Router } from '@angular/router';
import AdminUser from '../Entity/AdminUser';

export default class SessionHelper {


  public static SetUser(AdminUser: AdminUser) {
    localStorage.setItem('User', JSON.stringify(AdminUser))
  }
  public static GetUser(): AdminUser {
    var item = localStorage.getItem('User');
    if (!item) {
      return item as unknown as AdminUser;
    }

    return JSON.parse(item) as AdminUser;
  }

  public static Logout(router: Router) {

    SessionHelper.SetUser(null as unknown as AdminUser);

    router.navigate(["login"]);
  }
}
