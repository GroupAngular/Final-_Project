import { Component, Input } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

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


  products:any[]=[]
  
  constructor(public global:ProductsService,private Activate: ActivatedRoute){}
  
  
  ngOnInit(){
  let ProductId=this.Activate.snapshot.paramMap.get("idProduct")
  this.global.getProduct(ProductId).subscribe(result=>{console.log(result)
    this.products=result
    console.log("productspage",this.products)
     })
  }
  
 
  
  
  
  latestProduct=[
    {image:"images/Beds.jpg",title:'title 1',price:'$2000',offer:'5%'},
    {image:"images/Bedroom.jpg",title:'title 2',price:'$2000',offer:'5%'},
    {image:"images/Desks.jpg",title:'title 3',price:'$2000',offer:'5%'},
    {image:"images/Dressers.jpg",title:'title 4',price:'$2000',offer:'5%'},
    {image:"images/Outdoor.jpg",title:'title 5',price:'$2000',offer:'5%'},


  
  ]

  tags=[
    
    {title:'tag1'},  
      {title:'tag2'}
,    {title:'tag3'}
,    {title:'tag4'}
,    {title:'tag5'},
{title:'tag6'},
{title:'tag7'}

  
  ]

  categories=[  
    {title:'cat',num:12},  
    {title:'cat',num:32},  
    {title:'cat',num:42},  
    {title:'cat',num:32},  
    {title:'cat',num:22},  
    {title:'cat',num:52},  
    {title:'cat',num:62},  

  
  ]


}
