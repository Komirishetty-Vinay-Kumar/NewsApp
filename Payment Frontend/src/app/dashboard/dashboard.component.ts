import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  customer:any={}
  bank:any={}

  
  id:any
  
  constructor(private router:Router,private http:HttpClient
    ,private service:DataService) {
   
    

   }
  ngOnInit(): void {
    if(this.service.loggedin()){
    this.http.get('http://localhost:8080/customer/'+this.service.userid)
    .subscribe((result: any) => {
      this.customer = result;
      this.bank=result.bic;
      this.service.setBank(this.bank);
      this.service.customertype=result.customertype;
      //console.log(result);
    },err=>{
      console.log(err);
    })}
    else{
      this.router.navigate(["/login"]);
    }
    
} 
      

  
  onRecent()
  {

  }
  
  handleRegister()
  {

  }

}
