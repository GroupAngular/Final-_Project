import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent {
  // Array for product cards in the first section
  productsComponents = [
    {
      imageSrc: 'https://dkq2tfmdsh9ss.cloudfront.net/filters:background_color(fff)/fit-in/426x302/filters:format(jpeg)/shop_landing_sections/wuwFuIkFVG3uYQkllQ19pzWVVsU9J5PsWJ6EIRaD.webp',
      productName: 'Luxury Sofa',
    },
    {
      imageSrc: 'https://dkq2tfmdsh9ss.cloudfront.net/filters:background_color(fff)/fit-in/426x302/filters:format(jpeg)/shop_landing_sections/qYDNrTxFoaT2BzFOOsUQRqxmOYrML8bPNkvCF9vq.webp',
      productName: 'Modern Chair',
    },
    {
      imageSrc: 'https://dkq2tfmdsh9ss.cloudfront.net/filters:background_color(fff)/fit-in/426x302/filters:format(jpeg)/shop_landing_sections/INeRv8NXQItOa5i4CHzODrKOY3NKsE8XsqWCMUel.webp',
      productName: 'Dining Table',
    },
  ];

  // Updated array for products in the "Shop Our Products" section
  products = [
    {
      name: 'Velvet Armchair',
      price: 650,
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'A plush velvet armchair for ultimate comfort and style.',
    },
    {
      name: 'Scandinavian Sofa',
      price: 1800,
      image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Minimalist sofa with clean lines and cozy fabric.',
    },
    {
      name: 'Marble Coffee Table',
      price: 900,
      image: 'https://images.pexels.com/photos/3753436/pexels-photo-3753436.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Elegant marble table to elevate your living space.',
    },
    {
      name: 'Ergonomic Office Chair',
      price: 450,
      image: 'https://images.pexels.com/photos/5696287/pexels-photo-5696287.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Supportive chair for long hours of work.',
    },
    {
      name: 'Rustic Dining Table',
      price: 2200,
      image: 'https://images.pexels.com/photos/2995012/pexels-photo-2995012.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Solid wood table for warm, inviting meals.',
    },
    {
      name: 'Modern Bed Frame',
      price: 2700,
      image: 'https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Sleek bed frame for a contemporary bedroom.',
    },
  ];

  // State for cart
  cart: { name: string; price: number; image: string; description: string }[] = [];

  // State for price filter
  minPrice: number = 0;
  maxPrice: number = 5000;

  // State for sorting
  sortOrder: 'asc' | 'desc' | 'none' = 'none';

  // Method to filter products by price range
  getFilteredProducts() {
    return this.products.filter(
      (product) => product.price >= this.minPrice && product.price <= this.maxPrice
    );
  }

  // Method to sort products by price
  sortProducts() {
    if (this.sortOrder === 'asc') {
      return [...this.getFilteredProducts()].sort((a, b) => a.price - b.price);
    } else if (this.sortOrder === 'desc') {
      return [...this.getFilteredProducts()].sort((a, b) => b.price - a.price);
    }
    return this.getFilteredProducts();
  }

  // Method to add product to cart
  addToCart(product: { name: string; price: number; image: string; description: string }) {
    this.cart.push(product);
    alert(`${product.name} has been added to your cart!`);
    // Optionally, save cart to localStorage
    // localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  // Method to update price filter
  updatePriceFilter(min: number, max: number) {
    this.minPrice = min;
    this.maxPrice = max;
  }

  // Method to update sort order
  updateSortOrder(order: 'asc' | 'desc' | 'none') {
    this.sortOrder = order;
  }
}