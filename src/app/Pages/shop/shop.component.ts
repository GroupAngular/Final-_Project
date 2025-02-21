import { Component } from '@angular/core';

import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  standalone: false,
  
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})





export class ShopComponent {
  constructor(public global: ProductsService,private router: Router) { global.user = 'Products TYPES' }

  InfoOfSectionBG = [{
    image: 'images/Shop_bg.jpg',
    title: 'SHOP',
    subTitle1: 'Home',
    subTitle2: 'Shop'
  }]



  furnitureTypes = [
    { id: 1, name: "Appliances", image: '/images/Appliances.jpg' , parts: [
      { id: 1,  name: "Food Processor" ,image:'/images/FoodProcessor.webp'},
      { id: 2, name: "BLENDER",image: '/images/BLENDER.webp'},
      { id: 3, name: "Microwave" ,image: '/images/Microwave.webp' }
    ] },
    { id: 2, name: "Kitchen", image: '/images/Kitchen.jpg', parts: [
      { id: 4, name: "Dinnerware",image: '/images/Dinnerware.webp' },
      { id: 5, name: "Kitchen Accessories",image: '/images/KitchenAccessories.webp'},
      { id: 6, name: "Drinkware",image: '/images/Drinkware.webp'  }
    ] }
,
    { id: 3, name: "Bedrooms", image: '/images/Bedrooms.webp', 
      parts: [
      { id: 7, name: "Bed",image: '/images/Bed.webp' },
      { id: 8, name: "Dressers",image: '/images/Dressers.jpg' }, { id: 9, name: "Wardrobes",image: '/images/Wardrobes.jpg'  },
   ] },


    { id: 4, name: "Decor", image: '/images/Decor.webp' , parts: [
      { id: 10,name: "Artwork",image: '/images/Artwork.webp'  },{ id: 11,name: "Artificial Plants" ,image: '/images/ArtificialPlants.webp' }
  
    ] }
    ,
    { id: 5, name: "Lighting", image: '/images/Lightingbg.png' , parts: [
      { id: 12, name: "Ceiling Lights" ,image: '/images/CeilingLighting.webp' },{ id: 13, name: "Side Lamps",image: '/images/SideLamps.webp'}
  
    ] }
    , { id: 6, name: "Rugs", image: '/images/rug.jpeg' , parts: [
      { id: 14,name: "Area Rugs" ,image: '/images/AreaRugs.webp' },{ id: 15,name: "Indoor-Outdoor Rugs",image: '/images/IndoorOutdoorRugs.webp' }, { id: 16, name: "Floormats Doormats",image: '/images/FloormatsDoormats.webp'}  
    ] }
  ];
  
  selectedFurnitureType: any = null;
  selectedParts: any[] = [];


  onTypeSelect(type: any) {
    this.selectedFurnitureType = type;
    this.selectedParts = type.parts; // Set parts related to the selected furniture type
  }

  // Handle part selection
  onPartSelect(partId: number) {
    this.router.navigate(['/shopProduct', partId]);

  }
 

//   furnitureTypes: any[] = [];
//   parts: any[] = [];

//   selectedProduct: any = null;  // Declare selectedProduct here
//   ngOnInit(): void {
//     this.getFurnitureTypes();
//   }

//   getFurnitureTypes(): void {
//     this.global.getFurnitureTypes().subscribe(data => {
//       this.furnitureTypes = data;
//     });
//   }

// onProductSelect(furnitureType: any) {
//     this.selectedProduct = furnitureType;

//     console.log('Selected Product:', this.selectedProduct);
//     this.fetchFurnitureParts(furnitureType.id);
//     console.log("fetchFurnitureParts=", this.fetchFurnitureParts(furnitureType.id))
//   }


//   fetchFurnitureParts(furnitureTypeId: number) {
//     this.global.getParts(furnitureTypeId).subscribe(data => {
//       this.parts = data;
//       console.log(this.parts = data)
//     });
//   }


  
// goTopartsProsuct(partid:any){this.router.navigate(['/shopProduct',partid])}



}
