import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    { name: 'Modern Chair', price: '$150', image: 'assets/chair.jpg' },
    { name: 'Wooden Table', price: '$300', image: 'assets/table.jpg' },
    { name: 'Comfy Sofa', price: '$500', image: 'assets/sofa.jpg' },
  ];
  searchText = '';

  get filteredProducts() {
    return this.products.filter((product) =>
      product.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
