import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { wishlist } from 'src/app/interfaces/wishlist';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
public urlBag ="http://localhost:5000/product/bag/wishlist/"
public allWishlist="http://localhost:5000/product/allwishlist"
  constructor(private http:HttpClient) { 

  }
  bagWishlist(ID,name,price){
    return this.http.get(this.urlBag+ID+name+price)
  };
  ALLwishlist():Observable<wishlist[]>{
    return this.http.get<wishlist[]>(this.allWishlist)
  }
}
