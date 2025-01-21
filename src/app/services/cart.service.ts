import { Injectable } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];

  constructor() {}

  // Get all cart items
  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  // Add a product to the cart
  addToCart(product: CartItem): void {
    const existingProduct = this.cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      this.cartItems.push({ ...product });
    }
  }

  // Remove a product from the cart
  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);
  }

  // Calculate the total price of the cart
  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Clear the cart
  clearCart(): void {
    this.cartItems = [];
  }
}