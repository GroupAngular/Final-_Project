import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: false,
  
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profileForm: FormGroup;
  profileImage: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      fullName: ['John Doe', Validators.required],
      email: ['john.doe@example.com', [Validators.required, Validators.email]],
      phone: ['+1234567890', Validators.required]
    });
  }

   // Handle file input change
    onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profileImage = reader.result; // Set the image source
      };
      reader.readAsDataURL(file);
    }
  }
  onLogout() {
    console.log('User logged out');
    alert('You have been logged out.');
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Profile Updated:', this.profileForm.value);
      alert('Profile updated successfully!');
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
