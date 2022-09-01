import { Component, OnInit } from '@angular/core';
import { HttpConfigServiceService } from 'src/app/Services/http-config-service.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  listInvoice:any [] = [];

  constructor(private HttpConfigServiceService: HttpConfigServiceService)
   { }

  ngOnInit(): void 
  {
     this.GetInvoice();
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
  

}
