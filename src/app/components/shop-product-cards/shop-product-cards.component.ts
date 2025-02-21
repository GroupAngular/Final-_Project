import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shop-product-cards',
  standalone: false,
  
  templateUrl: './shop-product-cards.component.html',
  styleUrl: './shop-product-cards.component.css'
})
export class ShopProductCardsComponent {
@Input() getProducts:any
@Input() isInCart: boolean = false;  
@Input() isInWishlist: boolean = false;  
@Output() toggleWishlist = new EventEmitter<any>();  
@Output() toggleCart = new EventEmitter<any>();  

products:any=[]
// Method to toggle wishlist status
toggleWishlistStatus() {
  this.toggleWishlist.emit(this.getProducts);  // Emit event with product data
}
toggleCartStatus(){
  this.toggleCart.emit(this.getProducts)
}

  constructor(public global:ProductsService,private Activate: ActivatedRoute){}
  ngOnInit(){

    // let ProductId=this.Activate.snapshot.paramMap.get("idProduct")
    // this.global.getProductDetails(ProductId).subscribe(result=>{console.log(result)
    //   this.products=result
    //    })
   }


  defaultImage:string='images/chair.jpg'
  hoverImage:string='images/bg.jpg'
  currentImage :string=this.defaultImage



  



}
