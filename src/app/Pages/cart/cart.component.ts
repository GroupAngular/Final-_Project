import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  
  InfoOfSectionBGSingleProductDeta=[{
    image:'images/cartt.jpg',
    title:'Cart',
    subTitle1:'Shop',
    subTitle2:'cart',

  }]

constructor(private global: ProductsService) {}
wishlist: any[] = [];

cart:any[]=[]
promoCode: string = '';
subtotal: number = 0;
total: number = 0;
discount: number = 0;
delivery: number = 10; // Flat delivery fee









ngOnInit() {
this.cart=this.global.getCart()

this.updateTotals();

    // Subscribe to CartChanged event to update cart data
    this.global.CartChanged.subscribe(() => {
      this.cart = this.global.getCart();
      this.updateTotals();
    });

}
 // Update the totals (Subtotal, Discount, and Total)
  updateTotals(): void {
    this.subtotal = this.global.calculateSubtotal();
    this.discount = this.global.getDiscount();
    this.total = this.global.calculateTotal();
  }

  // Update the quantity of a product
  updateQuantity(productId: number, quantity: number): void {
    this.global.updateQuantity(productId, quantity);
    this.updateTotals();
  }

  // Apply coupon to the cart
  applyCoupon(): void {
    this.global.applyPromoCode(this.promoCode);
    this.discount = this.global.getDiscount();
    this.updateTotals();
  }

removeCart(product:any){
  this.global.removeFromCart(product)
  this.cart=this.global.getCart()
  this.updateTotals();

}






AddToWishList(product:any){
  this.global.addToWishlist(product)
  this.wishlist=this.global.getWishlist()
}

  // Handle Increase Quantity
  increaseQuantity(product: any): void {
    product.quantity++;
    this.global.updateQuantity(product.id, product.quantity);
    this.updateTotals();
  }

  // Handle Decrease Quantity
  decreaseQuantity(product: any): void {
    if (product.quantity > 1) {
      product.quantity--;
      this.global.updateQuantity(product.id, product.quantity);
      this.updateTotals();
    }
  }
}
