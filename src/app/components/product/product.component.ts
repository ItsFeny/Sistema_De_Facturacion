import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpConfigServiceService } from 'src/app/Services/http-config-service.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

   
  //arreglo para crear las listas de las tarjetas de credito eh interpolarlo en el tr
  listProduct: any[] = [];

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
      Codigo:['', Validators.required],
      Nombre:['', [Validators.required]], 
      Precio:['', [Validators.required]]
    });

    titulo.setTitle('Productos');

  }

  ngOnInit(): void 
  {
    this.GetProduct();
    
  }




  //metodo para obtener los datos de la api y hacer que la variable lista de tarjeta ejecute esos datos
  GetProduct()
{
    this.HttpConfigServiceService.GetListProduct().subscribe(data =>{
      console.log(data);
      this.listProduct = data;
    }, error =>{
      console.log(error);
    })
}

  
 

  //Metodo para que funciono el boton guardar del formulario
  AddProduct()
  {
    
    const Product: any = 
    {
      Codigo: this.forms.get('Codigo')?.value,
      Nombre: this.forms.get('Nombre')?.value,
      Precio: this.forms.get('Precio')?.value
    }
    


    //Condicional para saber si esta editando o no mediante la variable id
    if(this.id == undefined)
    {
       //Agregamos la tarjeta

       //accede a la lista de tarjetas y le agrega los valores del input
       this.HttpConfigServiceService.SaveProduct(Product).subscribe(data => {
     
      
      
      //llamada al metodo obtener tarjeta
      this.GetProduct(); 
  
      //resetea los campos 
      this.forms.reset(); 
  
      }, error => {
        console.log(error);
      });
   }

 else
    {
      Product.id = this.id;
       
         //Editamos la tarjeta
         this.HttpConfigServiceService.UpdateProduct(this.id, Product).subscribe(data => {
         this.forms.reset();
         this.ChangeName = "agregar";
         this.id = undefined;
         this.GetProduct();
       }, error =>
       {
         console.log(error);
       })}
    }


  //Eliminar Tarjeta de credito
  DeleteProduct(id: number)
  {
    this.HttpConfigServiceService.DeleteProduct(id).subscribe(data => {
    this.GetProduct();
    }, error => {
      console.log(error);
    })
}


 
   //Editar tarjeta de credito
   EditProduct(Product: any)
{
   this.ChangeName = "editar";
   this.id = Product.id;

   this.forms.patchValue({
     Codigo: Product.codigo,
     Nombre: Product.nombre,
     Precio: Product.precio
   })}
}
