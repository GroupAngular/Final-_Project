import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-comment',
  standalone: false,
  
  templateUrl: './card-comment.component.html',
  styleUrl: './card-comment.component.css'
})
export class CardCommentComponent {
  constructor(public global:ProductsService,private http:HttpClient){}
  @Input() comment:any[] = []; 
 
}


