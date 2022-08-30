import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HttpConfigServiceService {

  //LOGIN Y REGISTRO

  //url del Swager
  private AppUrl = 'https://localhost:7017/';

  //url del endpoin de registro
  private ApiUrlRegister = 'api/Auth/register';

  //url del endpoin de Login
  private ApiUrlLogin = 'api/Auth/login';



   //CLIENTES
   private ApiUrlClient = 'api/Client/';
    

   //PRODUCTO
   private ApiUrlProduct = 'api/Product/';






  constructor(private http: HttpClient)
  {

  }


 




//LOGIN Y REGISTRO


SaveRegister(user: any): Observable<any>
{
  return this.http.post(this.AppUrl + this.ApiUrlRegister,user)
}



Login(users: any): Observable<any>
{
  return this.http.post(this.AppUrl + this.ApiUrlLogin,users)
}







//CLIENTE

//Metodo para obtener los datos de la api
GetListClient(): Observable<any>
{
  return this.http.get(this.AppUrl + this.ApiUrlClient);
}


//Metodo para guardar los datos 
SaveClient(Client: any): Observable<any>
{
   return this.http.post(this.AppUrl + this.ApiUrlClient,Client)
}


//Metodo para actualizar los datos
UpdateClient(id: number, Client: any): Observable <any>
{
  return this.http.put(this.AppUrl + this.ApiUrlClient + id,Client)
}


//Metodo para eliminar 
DeleteClient(id: number): Observable<any>
{
   return this.http.delete(this.AppUrl + this.ApiUrlClient + id)
}










//PRODUCTO

//Metodo para obtener los datos de la api
GetListProduct(): Observable<any>
{
  return this.http.get(this.AppUrl + this.ApiUrlProduct);
}


//Metodo para guardar los datos 
SaveProduct(Product: any): Observable<any>
{
   return this.http.post(this.AppUrl + this.ApiUrlProduct,Product)
}


//Metodo para actualizar los datos
UpdateProduct(id: number, Product: any): Observable <any>
{
  return this.http.put(this.AppUrl + this.ApiUrlProduct + id,Product)
}


//Metodo para eliminar 
DeleteProduct(id: number): Observable<any>
{
   return this.http.delete(this.AppUrl + this.ApiUrlProduct + id)
}



}
