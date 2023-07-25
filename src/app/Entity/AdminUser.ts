import User from "./User";

export default interface AdminUser extends User {
  UserName: string;
  SessionToken: string;
}
