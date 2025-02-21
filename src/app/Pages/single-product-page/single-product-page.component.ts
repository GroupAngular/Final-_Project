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


  

  @Input() comment:any[] = []; 


  onCommentAdded(newComment: any) {
    console.log('New comment added:', newComment);
  }

  // to get id from url
  constructor(private Activate: ActivatedRoute,public global:ProductsService,private route: ActivatedRoute){}
  // productData:any =[]
  relatedProducts: any[] = [];
  product: any;

  // Sample product data

  ngOnInit() {

    // let produtID=this.Activate.snapshot.paramMap.get("id")

    // this.Activate.paramMap.subscribe(param=>{this.global.getProduct(param.get('id')).subscribe(res=>{


    //   this.productData=res
      
    // })})

    // this.global.getProductDetails(produtID).subscribe(result=>{
    //   console.log("result",result)
    //   this.productData=result


    // })

    // this.global.getAllProducts().subscribe(res=>{this.relatedProducts=res})
    this.route.paramMap.subscribe((params) => {
      const productId = +params.get('id')!;

      // Fetch the product by ID using getProductById method
      this.product = this.global.getProductById(productId);

      // Fetch related products by partId
      if (this.product) {
        this.relatedProducts = this.global.getRelatedProducts(this.product.partId);
      }
    });
    }
    cart:any[]=[];

     // Method to toggle cart status
     toggleCart(product:any){
      if (this.global.isInCart(product)) {
        this.global.removeFromCart(product);
      } else {
        this.global.addToCart(product);
      }
      this.cart = this.global.getCart();
    }
     
    wishlist: any[] = []; 

    toggleWishlist(product:any){
      if (this.isInWishlist(product)) {
        this.global.removeFromWishlist(product);
      } else {
        this.global.addToWishlist(product);
      }
      this.wishlist = this.global.getWishlist();
    }
    
    // Check if product is in the wishlist
    isInWishlist(product:any): boolean {
      return this.wishlist.find((item:any) => item.id === product.id);
    }
    
  handleImageError(event: any): void {
    // Access the image element and set the fallback image
    event.target.src = "images/AccentArm Chairs.jpg"; // Provide the path to your fallback image here
  }
  
  
}
