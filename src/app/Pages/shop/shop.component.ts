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

  InfoOfSectionBG = [{
    image: 'images/Shop_bg.jpg',
    title: 'SHOP',
    subTitle1: 'Home',
    subTitle2: 'Shop'
  }]



  constructor(public global: ProductsService,private router: Router) { global.user = 'Products TYPES' }



  furnitureTypes: any[] = [];
  parts: any[] = [];

  selectedProduct: any = null;  // Declare selectedProduct here
  ngOnInit(): void {
    this.getFurnitureTypes();
  }

  getFurnitureTypes(): void {
    this.global.getFurnitureTypes().subscribe(data => {
      this.furnitureTypes = data;
    });
  }

onProductSelect(furnitureType: any) {
    this.selectedProduct = furnitureType;

    console.log('Selected Product:', this.selectedProduct);
    this.fetchFurnitureParts(furnitureType.id);
    console.log("fetchFurnitureParts=", this.fetchFurnitureParts(furnitureType.id))
  }


  fetchFurnitureParts(furnitureTypeId: number) {
    this.global.getParts(furnitureTypeId).subscribe(data => {
      this.parts = data;
      console.log(this.parts = data)
    });
  }


  
goTopartsProsuct(partid:any){this.router.navigate(['/shopProduct',partid])}


}
