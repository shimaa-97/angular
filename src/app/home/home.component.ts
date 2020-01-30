import { Component, OnInit } from '@angular/core';
import { AllProductService } from 'src/services/all-product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public showdress=[];
  public showMakeup=[];
  public bags=[];
 // public allproducts=[];
  constructor(private getall:AllProductService, private router :Router,private getproduct:AllProductService) { }
public allproduct=[];
  

  ngOnInit() {
    this.getall.getdress().subscribe(data=>{
      console.log(data)
      this.showdress=data
  })
  this.getall.getmakeup().subscribe(data=>{
    console.log(data)
    this.showMakeup=data
   
   } )
   this.getproduct.getproduct().subscribe(data =>
    this.bags=data
  );

  
}

  bagdetails(bag){
  
    this.router.navigate(["/bag",bag._id])
     
    }
    dressdetails(dress){
      this.router.navigate(["/dress",dress._id])
    }
    makeupdetails(make){
      this.router.navigate(["/makeup",make._id])
    }
}