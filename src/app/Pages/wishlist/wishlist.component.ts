import { Component } from '@angular/core';
<<<<<<< HEAD
=======
import { ProductsService } from '../../services/products.service';
>>>>>>> mo2

@Component({
  selector: 'app-wishlist',
  standalone: false,
  
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
<<<<<<< HEAD

=======
  quantity: number = 0; // Default quantity

  // Increase quantity
  increaseQuantity(): void {
    this.quantity++;
  }

  // Decrease quantity
  decreaseQuantity(): void {
      this.quantity--;
    
  }
  InfoOfSectionBGSingleProductDetails=[{
    image:'images/Shop_bg.jpg',
    title:'My Wishlist',
    subTitle1:'cart',
    subTitle2:'Wishlist',

  }]

  wishlist: any[] = [];

  constructor(private global: ProductsService) {}

  
>>>>>>> mo2
}
