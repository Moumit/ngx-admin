
import { NbGlobalPhysicalPosition, NbToastrService } from "@nebular/theme";
import { IBaseResponseCore, MessageType } from ".";


export class UIHelper {
  public static ShowSnackBar(snackbarserive: NbToastrService, message: string, type: MessageType = MessageType.Error, duration = 2000) {

    var classname = `${type.toString().toLowerCase()}`

    snackbarserive.show(message, '', {
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      duration: duration,
      status: classname
    });
  }
  public static ProcessResponseInSnackBar(snackbarserive: NbToastrService,
    Response: IBaseResponseCore,
    ShowIsSucessMessage: boolean = true) {

    if (Response.IsSessionExpired) {
      this.ShowSnackBar(snackbarserive, "Your session is expired, please try to re-login",)
      return;
    }


    if (!ShowIsSucessMessage && Response.IsSuccess) {
      return;
    }
    var mainMesageType = Response.IsSuccess ? MessageType.Success : MessageType.Error;
    this.ShowSnackBar(snackbarserive, Response.Message, mainMesageType)
    return;
  }
}
