import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tags',
  standalone: false,
  
  templateUrl: './tags.component.html',
  styleUrl: './tags.component.css'
})
export class TagsComponent {
@Input() TAGS:any
}
