import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-single-product-page',
  standalone: false,
  
  templateUrl: './single-product-page.component.html',
  styleUrl: './single-product-page.component.css'
})
export class SingleProductPageComponent {
InfoOfSectionBGSingleProductDeta=[{
    image:'images/Shop_bg.jpg',
    title:'SHOP',
    subTitle1:'Home',
    subTitle2:'Shop',
    subTitle3:'Shop Product',
    subTitle4:'Shop Product Details',

  }]

  quantity: number = 0; // Default quantity

 // Increase quantity
 increaseQuantity(): void {
  this.quantity++;
}

// Decrease quantity
decreaseQuantity(): void {
    this.quantity--;
  
}
  @Input() comment:any[] = []; 


  onCommentAdded(newComment: any) {
    console.log('New comment added:', newComment);
  }

  // to get id from url
  constructor(private Activate: ActivatedRoute,private global:ProductsService){}
  productData:any =[]
  relatedProducts: any[] = [];

  ngOnInit() {

    let produtID=this.Activate.snapshot.paramMap.get("id")

    // this.Activate.paramMap.subscribe(param=>{this.global.getProduct(param.get('id')).subscribe(res=>{


    //   this.productData=res
      
    // })})

    this.global.getProductDetails(produtID).subscribe(result=>{
      console.log("result",result)
      this.productData=result


    })

    this.global.getAllProducts().subscribe(res=>{this.relatedProducts=res})
    }
    
  


  handleImageError(event: any): void {
    // Access the image element and set the fallback image
    event.target.src = "images/AccentArm Chairs.jpg"; // Provide the path to your fallback image here
  }
  
  
}
