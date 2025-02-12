import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-carousel',
  standalone: false,
  
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
// <!-- carousel components.ts -->
constructor(private global:ProductsService){}

  @Input() carouselSection: any[] = [];
  @Output() productSelected = new EventEmitter<any>();
  selectedProductId: string | null = null;
  // To track the currently selected product's id
  onImageClick(product: any) {
    // If the clicked product is already selected, deselect it; otherwise, select it
    if (this.selectedProductId === product.id) {
      this.selectedProductId = null; // Deselect the product
      this.productSelected.emit(null); // Emit null to the parent
    } else {
      this.selectedProductId = product.id; // Select the new product
      this.productSelected.emit(product); // Emit the selected product to the parent
    }
  }


}
