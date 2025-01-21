import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: false,
  
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

  contactForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.pattern(/^[0-9]{10}$/)]],
      subject: [''],
      message: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  scrollToForm(event: Event): void {
    event.preventDefault();
    const formSection = document.querySelector('#formSection');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Submitted', this.contactForm.value);
  
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
