import { Component, OnInit, ViewChild } from '@angular/core';
import { InvoiceComponent } from '../invoice/invoice.component';

@Component({
  selector: 'app-invoice-details',
  templateUrl: './invoice-details.component.html',
  styleUrls: ['./invoice-details.component.css']
})
export class InvoiceDetailsComponent implements OnInit {

  @ViewChild(InvoiceComponent) invoicechield!:any;

  constructor() { }

  ngOnInit(): void {
  }

}
