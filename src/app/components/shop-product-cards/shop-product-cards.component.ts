import { Component, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-shop-product-cards',
  standalone: false,
  
  templateUrl: './shop-product-cards.component.html',
  styleUrl: './shop-product-cards.component.css'
})
export class ShopProductCardsComponent {
@Input() getProducts:any
  products:any=[]
  constructor(public global:ProductsService){}
  ngOnInit(){
    console.log(this.global.getProducts().subscribe(result=>{console.log(result)


      this.products=result.products
    }))}

  userRating: number = 3; // Initial rating

  defaultImage:string='images/chair.jpg'
  hoverImage:string='images/bg.jpg'
  currentImage :string=this.defaultImage
  isHovered: boolean = false; // Track hover state


  // onMouseEnter(){this.currentImage=this.hoverImage;
  
  // }
  //   onMouseLeave(){
  //     this.currentImage=this.defaultImage;
    
  
  //   }
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
