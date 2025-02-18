import { Component } from '@angular/core';

@Component({
  selector: 'app-sales-chart',
  standalone: false,
  
  templateUrl: './sales-chart.component.html',
  styleUrl: './sales-chart.component.css'
})
export class SalesChartComponent {
  salesData = [
    { name: 'Jan', value: 5000 },
    { name: 'Feb', value: 8000 },
    { name: 'Mar', value: 7000 },
    { name: 'Apr', value: 12000 },
    { name: 'May', value: 9000 },
  ];

  colorScheme = {
    domain: ['#3B5D50', '#A0B9BF', '#9DACB2', '#99A4A9', '#949BA0'],
  };
}
