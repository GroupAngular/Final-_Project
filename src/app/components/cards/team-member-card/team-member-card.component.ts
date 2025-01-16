import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-team-member-card',
  standalone: false,
  
  templateUrl: './team-member-card.component.html',
  styleUrl: './team-member-card.component.css'
})
export class TeamMemberCardComponent {

  @Input() imageSrc: string = '';
  @Input() playerName: string = 'Player Name';
  @Input() description: string = 'Player description goes here.';
  @Input() socialLinks: { platform: string, url: string, iconClass: string }[] = [];

  

}
