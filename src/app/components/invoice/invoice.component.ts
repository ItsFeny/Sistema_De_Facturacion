import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpConfigServiceService } from 'src/app/Services/http-config-service.service';
import { AddInvoiceComponent } from '../add-invoice/add-invoice.component';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  //comunicacion entre componentes
  @ViewChild('addInvoiceChield') addInvoiceChield!: AddInvoiceComponent;
   
  listInvoice:any [] = [];

  userName: string = "jbond";

  
  constructor(private HttpConfigServiceService: HttpConfigServiceService)
  { 

  }

  ngOnInit(): void 
  {
     this.GetInvoice();
  }

   ngOnDestroy():void
  {
    this.ShowInvoice(this.listInvoice);
  }

  

  GetInvoice()
  {
      this.HttpConfigServiceService.GetListInvoice().subscribe(data =>{
        console.log(data);
        this.listInvoice = data;
      }, error =>{
        console.log(error);
      })
  }
 
  
   //Eliminar Factura
   DeleteInvoice(id: number)
   {
     this.HttpConfigServiceService.DeleteInvoice(id).subscribe(data => {
     this.GetInvoice();
     }, error => {
       console.log(error);
     })
 }


 ShowInvoice(invoice: any)
 { 
    
  this.HttpConfigServiceService.GetListInvoice().subscribe(data =>{
     this.listInvoice = data;
     console.log(data)

     this.addInvoiceChield.form.patchValue({
      id: invoice.id,
      Nombre: invoice.name,
      Rnc: invoice.rnc,
      Ncf: invoice.ncf,
      Pago: invoice.Pago,
      Comprobante: invoice.Comprobante,
      Nota: invoice.Nota,
      Fecha: invoice.Fecha,
      Subtotal: invoice.Subtotal,
      Descuento: invoice.Descuento,
      Total: invoice.Total,
    })


  }, error =>{
    console.log(error);
  })
}
 
 
}
