
import { Component ,AfterViewInit,Input} from '@angular/core';

import { ProductsService } from '../../services/products.service';



@Component({
  selector: 'app-nav-bar',
  standalone: false,

  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  @Input() isUserPage: boolean = false;  

  wishlistCount: number = 0;
  cartCount: number = 0;

  constructor(private global: ProductsService) { }

  ngOnInit(): void {
    this.updateWishlistCount(); // Initialize the count

    this.global.wishlistChanged.subscribe(() => {
      this.updateWishlistCount(); // Update the count when the wishlist changes
    });

    this.updateCartCount();

    this.global.CartChanged.subscribe(() => { this.updateCartCount() })
  }

  // Update the wishlist count
  updateWishlistCount(): void {
    const wishlist = this.global.getWishlist();
    this.wishlistCount = wishlist.length;


  }


  // Update the cart count
  updateCartCount(): void {
    const cart = this.global.getCart();
    this.cartCount = cart.length;
  }

}
