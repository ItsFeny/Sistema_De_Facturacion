import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  token: any = sessionStorage.getItem('token');
  decoded:any = jwtDecode(this.token)! ; 
  


  constructor(private titulo: Title) 
  {
     titulo.setTitle('Inicio');
  }

  
  ngOnInit(): void 
  {
    console.log(this.token)
  }


 

}

