import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-shop-product',
  standalone: false,
  
  templateUrl: './shop-product.component.html',
  styleUrl: './shop-product.component.css'
})
export class ShopProductComponent {

  InfoOfSectionBGProduct=[{
    image:'images/Shop_bg.jpg',
    title:'SHOP',
    subTitle1:'Home',
    subTitle2:'Shop',
    subTitle3:'Shop Product',


  }]
  constructor(public global:ProductsService,private route: ActivatedRoute){}

  ProductsDependOnId: any[] = [];
  wishlist: any[] = []; 
  cart: any[] = []; 
  products: any[] = [];  // All products
  filteredProducts: any []= [];  
  // products:any[]=[]
  
    ngOnInit(){
  // let ProductId=this.Activate.snapshot.paramMap.get("idProduct")
  // this.global.getProduct(ProductId).subscribe(result=>{console.log(result)
  //   this.products=result
  //   console.log("productspage",this.products)
  //    })

  const partId = +this.route.snapshot.paramMap.get('idProduct')!;
  this.products = this.global.getAllProducts();
  // Filter the products based on partId
  this.ProductsDependOnId = this.products.filter(product => product.partId === partId);

  this.wishlist = this.global.getWishlist();
 this.cart = this.global.getCart();

 console.log(this.ProductsDependOnId)
this.filteredProducts = this.ProductsDependOnId;

  }
  filterproduct(input: any): void {
        this.ProductsDependOnId = this.filteredProducts.filter(product =>
        product.name.toLowerCase().includes(input.value.toLowerCase())  
      );
    
  }

  // Method to toggle wishlist status
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



  // Method to toggle cart status
  toggleCart(product:any){
    if (this.global.isInCart(product)) {
      this.global.removeFromCart(product);
    } else {
      this.global.addToCart(product);
    }
    this.cart = this.global.getCart();
  }
 

  getProductsByPart(partId: number): any[] {
    return this.products.filter(product => product.partId === partId);
  }


//   latestProduct=[
//     {image:"images/Beds.jpg",title:'title 1',price:'$2000',offer:'5%'},
//     {image:"images/Bedroom.jpg",title:'title 2',price:'$2000',offer:'5%'},
//     {image:"images/Desks.jpg",title:'title 3',price:'$2000',offer:'5%'},
//     {image:"images/Dressers.jpg",title:'title 4',price:'$2000',offer:'5%'},
//     {image:"images/Outdoor.jpg",title:'title 5',price:'$2000',offer:'5%'},


  
//   ]

//   tags=[
    
//     {title:'tag1'},  
//       {title:'tag2'}
// ,    {title:'tag3'}
// ,    {title:'tag4'}
// ,    {title:'tag5'},
// {title:'tag6'},
// {title:'tag7'}

  
//   ]

//   categories=[  
//     {title:'cat',num:12},  
//     {title:'cat',num:32},  
//     {title:'cat',num:42},  
//     {title:'cat',num:32},  
//     {title:'cat',num:22},  
//     {title:'cat',num:52},  
//     {title:'cat',num:62},  

  
//   ]




  
}
