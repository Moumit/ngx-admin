export interface IBaseResponseCore {
    IsSessionExpired: boolean;
    IsSuccess: boolean;
    Errors: ErrorMessage[];
    Message: string;
    SessionToken: string;
}
export interface IBaseResponse<T> extends IBaseResponseCore {
    Data: T;
}
export enum MessageType {
    Error="Error",
    Warning="Warning",
    Info="Info",
    Success="Success"
}
export interface IErrorMessage {
    FieldName?: string;
    Message: string;
    AdditionInfo?: any | null;
    MessageType: MessageType;
}
export class BaseResponse<T> implements IBaseResponse<T>{
    IsSessionExpired: boolean;
    IsSuccess: boolean;
    Data: T;
    Errors: ErrorMessage[];
    Message: string;
    SessionToken: string;
    constructor(data: IBaseResponse<T> = { IsSessionExpired: false, IsSuccess: false, Data: {} as T, Errors: [], Message: "", SessionToken: "" }) {
        this.IsSessionExpired = data.IsSessionExpired;
        this.IsSuccess = data.IsSuccess;
        this.Data = data.Data;
        this.Errors = data.Errors || [];
        this.Message = data.Message;
        this.SessionToken = data.SessionToken;
    }
}


export class ErrorMessage {
    Key: string;
    FieldName?: string;
    Message: string;
    AdditionInfo?: any | null;
    MessageType: MessageType;

    constructor(data: IErrorMessage = { AdditionInfo: null, FieldName: undefined, Message: "", MessageType: MessageType.Error }) {
        this.Key = Math.random().toString(36).substr(2, 5);
        this.FieldName = data.FieldName;
        this.Message = data.Message;
        this.AdditionInfo = data.AdditionInfo;
        this.MessageType = data.MessageType;
        //console.log(this.Key)
    }
}

