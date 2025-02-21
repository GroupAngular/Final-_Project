import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bg-section',
  standalone: false,
  
  templateUrl: './bg-section.component.html',
  styleUrl: './bg-section.component.css'
})
export class BGSectionComponent {
@Input()bgSectionInfo:any
}
