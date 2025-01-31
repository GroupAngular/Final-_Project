import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: false,
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  quantity: number = 0; // Default quantity

  // Increase quantity
  increaseQuantity(): void {
    this.quantity++;
  }

  // Decrease quantity
  decreaseQuantity(): void {
      this.quantity--;
    
  }



}
