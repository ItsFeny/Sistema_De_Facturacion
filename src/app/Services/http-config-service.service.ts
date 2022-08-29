import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigServiceService {

 
  //url del Swager
  private AppUrl = 'https://localhost:7017/';

  //url del endpoin de registro
  private ApiUrlRegister = 'api/Auth/register';

  //url del endpoin de Login
  private ApiUrlLogin = 'api/Auth/login';


  constructor(private http: HttpClient)
  {

  }


  
SaveRegister(user: any): Observable<any>
{
  return this.http.post(this.AppUrl + this.ApiUrlRegister,user)
}



Login(users: any): Observable<any>
{
  return this.http.post(this.AppUrl + this.ApiUrlLogin,users)
}



}
