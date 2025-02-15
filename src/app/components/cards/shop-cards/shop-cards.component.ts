import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shop-cards',
  standalone: false,
  
  templateUrl: './shop-cards.component.html',
  styleUrl: './shop-cards.component.css'
})
export class ShopCardsComponent {
  // <!-- shop cards component.ts -->

  @Input() product: any; // To receive product data from parent component


}
