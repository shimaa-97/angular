import { Component, OnInit } from '@angular/core';
import { AllProductService } from "src/services/all-product.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dress',
  templateUrl: './dress.component.html',
  styleUrls: ['./dress.component.css']
})
export class DressComponent implements OnInit {
  public showdress=[];

  constructor(private getall:AllProductService,private router :Router) { }

  ngOnInit() {
    this.getall.getdress().subscribe(data=>{
      console.log(data)
      this.showdress=data
     
     } )
     
  }
  showdetails(dress){
  
    this.router.navigate(["/dress/:_id",dress])
     
    }

}
