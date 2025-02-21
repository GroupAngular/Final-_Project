import { Component ,AfterViewInit,Input} from '@angular/core';


@Component({
  selector: 'app-nav-bar',
  standalone: false,
  
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  @Input() isUserPage: boolean = false;  
}
