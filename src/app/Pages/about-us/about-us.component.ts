import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  standalone: false,
  
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  // Scroll to the mission section
  scrollToNextSection() {
    document.querySelector('.mission-section')?.scrollIntoView({ behavior: 'smooth' });
  }

  // Scroll back to the top
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  // About section card start logic
// ========================================================

cards = [
  {
    imageSrc: "images/cat.jpg",
    playerName: 'John Doe',
    description: 'An excellent team player and leader.',
    socialLinks: [
      { platform: 'Facebook', url: 'https://facebook.com', iconClass: 'fab fa-facebook' },
      { platform: 'Twitter', url: 'https://twitter.com', iconClass: 'fab fa-twitter' }
    ]
  },
  {
    imageSrc: "images/cat.jpg",
    playerName: 'Jane Smith',
    description: 'A creative thinker and problem solver.',
    socialLinks: [
      { platform: 'LinkedIn', url: 'https://linkedin.com', iconClass: 'fab fa-linkedin' },
      { platform: 'Instagram', url: 'https://instagram.com', iconClass: 'fab fa-instagram' }
    ]
  },
  {
    imageSrc: "images/cat.jpg",
    playerName: 'Sarah Connor',
    description: 'Passionate about technology and teamwork.',
    socialLinks: [
      { platform: 'GitHub', url: 'https://github.com', iconClass: 'fab fa-github' },
      { platform: 'YouTube', url: 'https://youtube.com', iconClass: 'fab fa-youtube' }
    ]
  },

  {
    imageSrc: "images/cat.jpg",
    playerName: 'Sarah Connor',
    description: 'Passionate about technology and teamwork.',
    socialLinks: [
      { platform: 'GitHub', url: 'https://github.com', iconClass: 'fab fa-github' },
      { platform: 'YouTube', url: 'https://youtube.com', iconClass: 'fab fa-youtube' }
    ]
  }
];

// ========================================================
  // About section card end logic
}