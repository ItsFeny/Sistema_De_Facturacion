import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { HomeComponent } from './components/home/home.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = 
[
  {path:"",redirectTo:"/Login",pathMatch:'full'},
  { path:'Login',  component: LoginComponent},
  { path:'Home', component: HomeComponent},
  { path:'Clients', component: ClientsComponent},
  { path:'Product', component: ProductComponent},
  { path:'Invoice', component: InvoiceComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
