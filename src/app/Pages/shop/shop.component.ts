import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-shop',
  standalone: false,
  
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})




export class ShopComponent {

  InfoOfSectionBG=[{
    image:'images/Shop_bg.jpg',
    title:'SHOP',
    subTitle1:'Home',
    subTitle2:'Shop'
  }]
  


  constructor(public global : ProductsService) { global.user='Products TYPES'} 


  Products = [
    {
      id: '1', 
      name: 'Living Room', 
      image: 'images/LivingRoom.jpg' ,
      cards: [
        { id: '1-1', name: 'Accent & Arm Chairs',    image: 'images/AccentArm Chairs.jpg'  },
        { id: '1-2', name: 'Sofas & Sectionals', image: 'images/SofasSectionals.png' },
        { id: '1-3', name: 'Coffee Tables',  image: 'images/CoffeeTables.jpg' },
        { id: '1-4', name: 'Side Tables', image: 'images/SideTables.jpg' }
      ]
    },
    {
      id: '2', 
      name: 'Dining Room',   
      image: 'images/DiningRoom.jpg',
      cards: [
        { id: '2-1', name: 'Dining Chairs', image: 'images/DiningChairs.jpg' },
        { id: '2-2', name: 'Benches', image: 'images/Benches.jpg' },
        { id: '2-3', name: 'Bar Stools', image: 'images/BarStools.jpg' },
        { id: '2-4', name: 'Dining Sideboards', image: 'images/DiningSideboards.jpg' }
      ]
    }
,
    {
      id: '3', 
      name: 'Bedroom', 
      image: 'images/Bedroom.jpg',
      cards: [
        { id: '2-1', name: 'Beds', description: 'Description 2.1', image: 'images/Beds.jpg' },
        { id: '2-2', name: 'Night Tables', description: 'Description 2.2', image: 'images/NightTables.jpg' },
        { id: '2-3', name: 'Dressers', description: 'Description 2.3', image: 'images/Dressers.jpg' },
        { id: '2-4', name: 'Wardrobes', description: 'Description 2.4', image: 'images/Wardrobes.jpg' }
      ]
    }
    ,

    {
      id: '4', 
      name: 'Home Office', 
      image: 'images/HomeOffice.jpg',
      cards: [
        { id: '2-1', name: 'Desks',  image: 'images/Desks.jpg' },
        { id: '2-2', name: 'Office Chairs',  image: 'images/OfficeChairs.jpg' },
        { id: '2-3', name: 'Shelving Units',  image: 'images/ShelvingUnits.jpg' },
        { id: '2-4', name: 'Meeting Tables',  image: 'images/MeetingTables.jpg' }
      ]
    }

    , {
      id: '5', 
    name: 'Outdoor', 
    image: 'images/Outdoor.jpg' ,
      cards: [
        { id: '2-1', name: 'Card 2.1', description: 'Description 2.1', image: 'images/card2-1.jpg' },
        { id: '2-2', name: 'Card 2.2', description: 'Description 2.2', image: 'images/card2-2.jpg' },
        { id: '2-3', name: 'Card 2.3', description: 'Description 2.3', image: 'images/card2-3.jpg' },
        { id: '2-4', name: 'Card 2.4', description: 'Description 2.4', image: 'images/card2-4.jpg' }
      ]
    },
    
    {
      id: '6', 
      name: 'Lighting', 
      image: 'images/chair.jpg',
      cards: [
        { id: '2-1', name: 'Card 2.1', description: 'Description 2.1', image: 'images/card2-1.jpg' },
        { id: '2-2', name: 'Card 2.2', description: 'Description 2.2', image: 'images/card2-2.jpg' },
        { id: '2-3', name: 'Card 2.3', description: 'Description 2.3', image: 'images/card2-3.jpg' },
        { id: '2-4', name: 'Card 2.4', description: 'Description 2.4', image: 'images/card2-4.jpg' }
      ]
    },
    {
      id: '7', 
name: 'Rugs', 
image: 'images/chair.jpg' ,
      cards: [
        { id: '2-1', name: 'Card 2.1', description: 'Description 2.1', image: 'images/card2-1.jpg' },
        { id: '2-2', name: 'Card 2.2', description: 'Description 2.2', image: 'images/card2-2.jpg' },
        { id: '2-3', name: 'Card 2.3', description: 'Description 2.3', image: 'images/card2-3.jpg' },
        { id: '2-4', name: 'Card 2.4', description: 'Description 2.4', image: 'images/card2-4.jpg' }
      ]
    },
    {
      id: '8', 
      name: 'Bedding & Bath', 
      image: 'images/chair.jpg' ,
      cards: [
        { id: '2-1', name: 'Card 2.1', description: 'Description 2.1', image: 'images/card2-1.jpg' },
        { id: '2-2', name: 'Card 2.2', description: 'Description 2.2', image: 'images/card2-2.jpg' },
        { id: '2-3', name: 'Card 2.3', description: 'Description 2.3', image: 'images/card2-3.jpg' },
        { id: '2-4', name: 'Card 2.4', description: 'Description 2.4', image: 'images/card2-4.jpg' }
      ]
    }, 
    {
      id: '9', 
name: 'Decor', 
image: 'images/chair.jpg' ,
      cards: [
        { id: '2-1', name: 'Card 2.1', description: 'Description 2.1', image: 'images/card2-1.jpg' },
        { id: '2-2', name: 'Card 2.2', description: 'Description 2.2', image: 'images/card2-2.jpg' },
        { id: '2-3', name: 'Card 2.3', description: 'Description 2.3', image: 'images/card2-3.jpg' },
        { id: '2-4', name: 'Card 2.4', description: 'Description 2.4', image: 'images/card2-4.jpg' }
      ]
    },
    
   
    
     {
      id: '10', 
      name: 'Tableware', 
      image: 'images/chair.jpg',
      cards: [
        { id: '2-1', name: 'Card 2.1', description: 'Description 2.1', image: 'images/card2-1.jpg' },
        { id: '2-2', name: 'Card 2.2', description: 'Description 2.2', image: 'images/card2-2.jpg' },
        { id: '2-3', name: 'Card 2.3', description: 'Description 2.3', image: 'images/card2-3.jpg' },
        { id: '2-4', name: 'Card 2.4', description: 'Description 2.4', image: 'images/card2-4.jpg' }
      ]
    }, 
    
    {
      id: '11', 
      name: 'Kitchen', 
      image: 'images/chair.jpg',
      cards: [
        { id: '2-1', name: 'Card 2.1', description: 'Description 2.1', image: 'images/card2-1.jpg' },
        { id: '2-2', name: 'Card 2.2', description: 'Description 2.2', image: 'images/card2-2.jpg' },
        { id: '2-3', name: 'Card 2.3', description: 'Description 2.3', image: 'images/card2-3.jpg' },
        { id: '2-4', name: 'Card 2.4', description: 'Description 2.4', image: 'images/card2-4.jpg' }
      ]
    }

    , 
    
    {
      id: '12', 
      name: 'Appliances', 
      image: 'images/chair.jpg' ,
      cards: [
        { id: '2-1', name: 'Card 2.1', description: 'Description 2.1', image: 'images/card2-1.jpg' },
        { id: '2-2', name: 'Card 2.2', description: 'Description 2.2', image: 'images/card2-2.jpg' },
        { id: '2-3', name: 'Card 2.3', description: 'Description 2.3', image: 'images/card2-3.jpg' },
        { id: '2-4', name: 'Card 2.4', description: 'Description 2.4', image: 'images/card2-4.jpg' }
      ]
    }

  ];
  selectedProduct: any=null;  // Declare selectedProduct here


  onProductSelect(product: any) {
    this.selectedProduct = product;
    
    console.log('Selected Product:', this.selectedProduct);
  }

    
}
