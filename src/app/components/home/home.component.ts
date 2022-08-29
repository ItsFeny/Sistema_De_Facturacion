import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  token: any = sessionStorage.getItem('token');
  decoded:any = jwtDecode(this.token)! ; 
  


  constructor() { }

  
  ngOnInit(): void 
  {
    console.log(this.token)
  }


 

}

