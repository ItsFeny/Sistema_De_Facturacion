import { HttpConfigServiceService } from 'src/app/Services/http-config-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  form2: FormGroup;

  //Variable de pantalla de carga
  loading = false;

  constructor(private fb: FormBuilder, 
              private _httpConfig: HttpConfigServiceService, 
              private router: Router,
              private titulo: Title) 
  {
    this.form = this.fb.group({
      name:[''],
      correo:[''],
      password:['']
    });

    this.form2 = this.fb.group({
      usuario:[''],
      contraseña:['']
    });

    //Configuracion de titulo
    titulo.setTitle('Login');

  }



  ngOnInit(): void 
  {

  }


  //Guardar los datos del registro
  Register()
  {
      const user: any = 
      {
         Name: this.form.get('name')?.value,
         Email: this.form.get('correo')?.value,
         password:  this.form.get('password')?.value
      }

      
        this._httpConfig.SaveRegister(user).subscribe(data => {

        console.log("se agrego");

        //resetea los campos 
        this.form.reset(); 
    
        }, error => {
          console.log(error);
        });
  }


  Loggedin()
  {
    const users: any = 
    {  
       Name: this.form2.get('usuario')?.value,
       Password: this.form2.get('contraseña')?.value
    }

    this._httpConfig.Login(users).subscribe(({token}) => {
      console.log("Logeado");
      sessionStorage.setItem('token', token)
      this.screenLoading();
      this.form2.reset();
      
    }, (error) => {
        console.log(error);
      });
  }


    //Pantalla de carga
    screenLoading()
    {
      this.loading = true;
      setTimeout(() =>
      {
        this.loading = false;
        this.router.navigate(["/Home"]);

      }, 1500);
    }
 

}
