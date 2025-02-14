import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-latest-product',
  standalone: false,
  
  templateUrl: './latest-product.component.html',
  styleUrl: './latest-product.component.css'
})
export class LatestProductComponent {

@Input() latestPro :any
}
