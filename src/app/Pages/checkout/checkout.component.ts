import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: false,
  
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  checkoutForm: FormGroup;
  paymentMethod: string = 'creditCard';
  cartItems: any[] = [];
  totalPrice: number = 0;
  deliveryCharge: number = 10;
  discount: number = 0;

  constructor(
    private fb: FormBuilder,
    private cartService: CartService,
    private router: Router
  ) {
    this.checkoutForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern(/^\d{5}$/)]]
    });

    this.cartItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }

  onSubmit(): void {
    if (this.checkoutForm.valid) {
      const order = {
        id: Math.random().toString(36).substr(2, 9),
        ...this.checkoutForm.value,
        paymentMethod: this.paymentMethod,
        cartItems: this.cartItems,
        deliveryCharge: this.deliveryCharge,
        discount: this.discount,
        total: this.totalPrice + this.deliveryCharge - this.discount
      };

      console.log('Order Details:', order);

      this.cartService.clearCart();
      this.router.navigate(['/confirmation'], { state: { orderDetails: order } });
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
