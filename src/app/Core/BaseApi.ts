import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseResponse } from './BaseResponse';
import SessionHelper from './SessionHelper';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseApi {

  constructor(private http: HttpClient) { }
  readonly baseUrl = environment.apiUrl;

  protected Get<T>(url: string): Observable<BaseResponse<T>> {
    var apiAuthorization = SessionHelper.GetUser()?.SessionToken;
    let headers =
    {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiAuthorization}`
    };

    return this.http.get<BaseResponse<T>>(
      this.baseUrl + url, { headers });

  }
  protected Post<T>(url: string, model: any): Observable<BaseResponse<T>> {
    var apiAuthorization = SessionHelper.GetUser()?.SessionToken;
    let headers =
    {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiAuthorization}`
    };

    return this.http.post<BaseResponse<T>>(
      this.baseUrl + url, JSON.stringify(model), { headers });

  }

  public PostForDownload(url: string, model: any) {
    var apiAuthorization = SessionHelper.GetUser()?.SessionToken;
    var headers =
    {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiAuthorization}`
    };
    return this.http.post(this.baseUrl + url,
      JSON.stringify(model),
      { headers, observe: 'response', responseType: 'blob' as 'json' }
    );
  }


}
