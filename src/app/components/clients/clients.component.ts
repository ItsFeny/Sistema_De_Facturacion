import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpConfigServiceService } from 'src/app/Services/http-config-service.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  
  //arreglo para crear las listas de las tarjetas de credito eh interpolarlo en el tr
  listClient: any[] = [];

  //variable para cambiar el nombre de agregar a editar cuando esta editando mediante el id
  ChangeName = 'agregar';

  //identificador de si esta editando o no mediante el valor 0 y 1
  id: number | undefined;



  //agregar como un id a los campos mediante las variables con form group 
  //nota se importa un modulo llamado reactiveform para que funcione
  forms: FormGroup;
  constructor(private fb: FormBuilder,
              private HttpConfigServiceService: HttpConfigServiceService,
              private titulo: Title) 
  {
    this.forms = this.fb.group({
      Name:['', Validators.required],
      Cedula:['', [Validators.required]], 
      Telefono:['', [Validators.required]]
    });

    titulo.setTitle('Clientes');

  }

  ngOnInit(): void 
  {
    this.GetClient();
    
  }




  //metodo para obtener los datos de la api y hacer que la variable lista de tarjeta ejecute esos datos
  GetClient()
{
    this.HttpConfigServiceService.GetListClient().subscribe(data =>{
      console.log(data);
      this.listClient = data;
    }, error =>{
      console.log(error);
    })
}

  
 

  //Metodo para que funciono el boton guardar del formulario
  AddClient()
  {
    
    const client: any = 
    {
      Name: this.forms.get('Name')?.value,
      Cedula: this.forms.get('Cedula')?.value,
      Telefono: this.forms.get('Telefono')?.value
    }
    


    //Condicional para saber si esta editando o no mediante la variable id
    if(this.id == undefined)
    {
       //Agregamos la tarjeta

       //accede a la lista de tarjetas y le agrega los valores del input
       this.HttpConfigServiceService.SaveClient(client).subscribe(data => {
     
      
      
      //llamada al metodo obtener tarjeta
      this.GetClient(); 
  
      //resetea los campos 
      this.forms.reset(); 
  
      }, error => {
        console.log(error);
      });
   }

 else
    {
       client.id = this.id;
       
         //Editamos la tarjeta
         this.HttpConfigServiceService.UpdateClient(this.id, client).subscribe(data => {
         this.forms.reset();
         this.ChangeName = "agregar";
         this.id = undefined;
         this.GetClient();
       }, error =>
       {
         console.log(error);
       })}
    }


  //Eliminar Tarjeta de credito
  DeleteClient(id: number)
  {
    this.HttpConfigServiceService.DeleteClient(id).subscribe(data => {
    this.GetClient();
    }, error => {
      console.log(error);
    })
}


 
   //Editar tarjeta de credito
   EditClient(client: any)
{
   this.ChangeName = "editar";
   this.id = client.id;

   this.forms.patchValue({
     Name: client.name,
     Cedula: client.cedula,
     Telefono: client.telefono
   })}


}
