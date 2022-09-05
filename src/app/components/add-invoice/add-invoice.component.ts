import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpConfigServiceService } from 'src/app/Services/http-config-service.service';
import { ClientsComponent } from '../clients/clients.component';
import { InvoiceDetailsComponent } from '../invoice-details/invoice-details.component';
import { InvoiceComponent } from '../invoice/invoice.component';


@Component({
  selector: 'app-add-invoice',
  templateUrl: './add-invoice.component.html',
  styleUrls: ['./add-invoice.component.css']
})
export class AddInvoiceComponent implements OnInit {

  //comunicacion entre componentes
  @ViewChild(ClientsComponent) clientChield!:any;
  @ViewChild(InvoiceComponent) invoiceChield!:any;
  @ViewChild(InvoiceDetailsComponent) detailsChield!:any;
  
  form: FormGroup
  
  cedulaprint: string = "";

  verdadero = false;

  listclientcedula: any[] = [{}];

  idCedula = "";
  //let cedulaIndex: int = listclientcedula[2];

  constructor(private fb: FormBuilder,
              public http: HttpConfigServiceService) 
  {
    
    this.form = this.fb.group({
      rnc:[''],
      fecha:[''],
      pago:[''],
      comprobante:[''],
      nota:[''],
      ncf:[''],
      descuento:[''],
      subtotal:[''],
      total:[''],
    });

  }

  ngOnInit(): void 
  {
    
  }




  //evento de tipeo agregar cliente
  onKeypressEvent(event: any)
  {
    
      this.cedulaprint = this.form.get('rnc')?.value;
       console.log(this.cedulaprint)

      if(event.target.value == this.cedulaprint)
      {
      
         this.http.GetClientRnc(this.cedulaprint).subscribe(data => 
          {
             console.log(data);
             this.listclientcedula = data;
            
            }, error =>{
              console.log(error);
            })

       }  
  }




  AddInvoice()
  {
      const invoice: any = 
      {
        rnc:this.form.get('rnc')?.value,
        fecha:this.form.get('fecha')?.value,
        pago:this.form.get('pago')?.value,
        comprobante:this.form.get('comprobante')?.value,
        nota:this.form.get('nota')?.value,
        ncf:this.form.get('ncf')?.value,
        descuento:this.form.get('descuento')?.value,
        subtotal:this.form.get('subtotal')?.value,
        total:this.form.get('total')?.value
    }


    
      this.http.SaveInvoice(invoice).subscribe(data => {
      this.form.reset();
      })
  
  }


  ShowClientInfo(invoice: any)
  {

     this.form.patchValue({
      name: invoice.name, 
      Ncf: invoice.ncf
     })

     console.log(invoice);
    
  }
  
  
  



}
