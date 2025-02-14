import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-confirmation',
  standalone: false,
  
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {

  orderDetails: any;
  referenceNumber: string;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.orderDetails = navigation?.extras.state?.['orderDetails'];
    this.referenceNumber = 'REF-' + Math.random().toString(36).substr(2, 9).toUpperCase();
  }

  ngOnInit(): void {
    if (!this.orderDetails) {
      this.router.navigate(['/']);
    }
  }

  trackOrder(): void {
    alert('Track order functionality will be implemented soon!');
  }
}
