import { ErrorMessage } from "./BaseResponse";

export default class BaseViewModel {     
    IsTableLoading: boolean = false;
    IsPageLoading: boolean = false; 
    IsShowModal: boolean = false;
      
    //toast Mesages
    Messages: ErrorMessage[] = [];
    Message:string="";
    OnChildChange?: (data?: any) => void; 
}