import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  encapsulation:ViewEncapsulation.None,
})
export class HomeComponent {

  productsComponents =[
    {
      imageSrc : 'https://dkq2tfmdsh9ss.cloudfront.net/filters:background_color(fff)/fit-in/426x302/filters:format(jpeg)/shop_landing_sections/wuwFuIkFVG3uYQkllQ19pzWVVsU9J5PsWJ6EIRaD.webp',
      productName : "Some Products Name"
     },
     {
      imageSrc : 'https://dkq2tfmdsh9ss.cloudfront.net/filters:background_color(fff)/fit-in/426x302/filters:format(jpeg)/shop_landing_sections/qYDNrTxFoaT2BzFOOsUQRqxmOYrML8bPNkvCF9vq.webp',
      productName : "Some Products Name"
     },
     {
      imageSrc : 'https://dkq2tfmdsh9ss.cloudfront.net/filters:background_color(fff)/fit-in/426x302/filters:format(jpeg)/shop_landing_sections/INeRv8NXQItOa5i4CHzODrKOY3NKsE8XsqWCMUel.webp',
      productName : "Some Products Name"
     }
  ];

  products = [
    {
      name: 'Modern Sofa',
      price: 1500,
      image: 'images/chair.jpg',
    },
    {
      name: 'Wooden Chair',
      price: 500,
      image: 'images/chair.jpg',
    },
    {
      name: 'Dining Table',
      price: 2500,
      image: 'images/chair.jpg',
    },
    {
      name: 'Bed Frame',
      price: 3000,
      image: 'images/chair.jpg',
    },
    {
      name: 'Office Desk',
      price: 1200,
      image: 'images/chair.jpg',
    },
    {
      name: 'Lounge Chair',
      price: 800,
      image: 'images/chair.jpg',
    },
    {
      name: 'Bookshelf',
      price: 700,
      image: 'images/chair.jpg',
    },
    {
      name: 'Coffee Table',
      price: 900,
      image: 'images/chair.jpg',
    },
  ];

}
