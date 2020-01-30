import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/services/wishlist.service';
import { AllProductService } from 'src/services/all-product.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

public wishlist={};
 
  constructor(private WISHLIST:WishlistService,private getproduct:AllProductService,) { }

  ngOnInit() {
    // this.wishlistService.bagWishlist(this.bagID).subscribe(data =>{
    // this.bagID=data
    // console.log(this.bagID)
    // })
    // this.getproduct.getbagdetails(this.bagID).subscribe(data => this.wishlistBag=data 
     
    //   )
    //   console.log(this.wishlistBag)
    this.WISHLIST.ALLwishlist().subscribe(data => this.wishlist=data)
    console.log(this.wishlist)
     }
  }1


