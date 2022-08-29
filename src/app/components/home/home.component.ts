import { Component, OnInit } from '@angular/core';


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
    
  }


 

}

function jwtDecode(token: any): any {
  throw new Error('Function not implemented.');
}
