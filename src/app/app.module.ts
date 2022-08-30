import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//servicios http
import { HttpClientModule } from '@angular/common/http';
import { HttpConfigServiceService } from './Services/http-config-service.service';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';


import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ClientsComponent } from './components/clients/clients.component';
import { ProductComponent } from './components/product/product.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ClientsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [HttpConfigServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
