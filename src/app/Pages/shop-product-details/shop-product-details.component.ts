import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-product-details',
  standalone: false,
  
  templateUrl: './shop-product-details.component.html',
  styleUrl: './shop-product-details.component.css'
})
export class ShopProductDetailsComponent {
  InfoOfSectionBGProductDetails=[{
    image:'images/Shop_bg.jpg',
    title:'SHOP',
    subTitle1:'Home',
    subTitle2:'Shop',
    subTitle3:'Product Details'

  }]
}
