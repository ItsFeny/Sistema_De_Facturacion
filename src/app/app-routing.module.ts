import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './components/clients/clients.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = 
[
  {path:"",redirectTo:"/Login",pathMatch:'full'},
  { path:'Login',  component: LoginComponent},
  { path:'Home', component: HomeComponent},
  { path:'Clients', component: ClientsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
