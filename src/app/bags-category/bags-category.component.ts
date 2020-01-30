import { Component, OnInit } from '@angular/core';
import { AllProductService } from 'src/services/all-product.service';
import { Router } from '@angular/router';
import { WishlistService } from 'src/services/wishlist.service';


@Component({
  selector: 'app-bags-category',
  templateUrl: './bags-category.component.html',
  styleUrls: ['./bags-category.component.css']
})
export class BagsCategoryComponent implements OnInit {
public bags=[];
  bagID: Object;

  constructor(private getproduct:AllProductService,
    private router :Router,
    private wishlistService:WishlistService) { }

  ngOnInit() {
    this.getproduct.getproduct().subscribe(data =>
      this.bags=data
    );
  }
  showdetails(bag){
  
  this.router.navigate(["/bag",bag._id])
   
  }
  addWishlist(id,name,price){
  this.wishlistService.bagWishlist(id,name,price).subscribe(data =>{
    this.bagID=data
  
   
  }
  )}
}
