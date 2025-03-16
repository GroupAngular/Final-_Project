import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-wishlist',
  standalone: false,
  
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {


  quantity: number = 0; // Default quantity


  InfoOfSectionBGSingleProductDetails=[{
    image:'images/wishlist.jpg',
    title:'My Wishlist',
    subTitle1:'cart',
    subTitle2:'Wishlist',

  }]


  constructor(public global: ProductsService) {}

  wishlist: any[] = [];
cart:any[]=[];
  ngOnInit() {
    this.wishlist = this.global.getWishlist();
  }
    // Remove product from wishlist
    removeFromWishlist(product: any): void {
      this.global.removeFromWishlist(product);
      this.wishlist = this.global.getWishlist();  // Update wishlist
    }

    addto(product:any){
      this.global.addToCart(product)
      this.cart=this.global.getCart()
    }

    
    

  

    // Method to toggle cart status
    toggleCart(product:any){
      if (this.global.isInCart(product)) {
        this.global.removeFromCart(product);
      } else {
        this.global.addToCart(product);
      }
      this.cart = this.global.getCart();
    }
    

}
