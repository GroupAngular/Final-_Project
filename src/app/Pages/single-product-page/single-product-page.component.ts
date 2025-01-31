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







  InfoOfSectionBGSingleProductDetails=[{
    image:'images/Shop_bg.jpg',
    title:'SHOP',
    subTitle1:'Home',
    subTitle2:'Shop',
    subTitle3:'Product Details'

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
    // يمكنك تنفيذ أي منطق إضافي هنا
  }

  // to get id from url
  constructor(private Activate: ActivatedRoute,private global:ProductsService){}
  productData:any 
  latestProd:any []=[]
  ngOnInit() {

    let produtId=this.Activate.snapshot.paramMap.get("id")

    this.Activate.paramMap.subscribe(param=>{this.global.getDetailsProduct(param.get('id')).subscribe(res=>{


      this.productData=res
      
    })})
    this.global.getProducts().subscribe(result=>{
      console.log(result)
      this.latestProd=result.products
    
      console.log("products=",this.latestProd)
    })
    
  }

  
  
}
