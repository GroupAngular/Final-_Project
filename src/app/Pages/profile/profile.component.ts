import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  profileImage: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder, private profileService: ProfileService) {
    this.profileForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadProfile();
  }

  // Load user profile data
  loadProfile(): void {
    this.profileService.getProfile().subscribe(
      (data) => {
        this.profileForm.patchValue(data);
        this.profileImage = data.profileImage || 'https://via.placeholder.com/150';
      },
      (error) => {
        console.error('Error loading profile:', error);
      }
    );
  }

  // Handle file input change
  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profileImage = reader.result;
      };
      reader.readAsDataURL(file);

      // Upload the image to the backend
      this.profileService.uploadProfileImage(file).subscribe(
        (response) => {
          console.log('Image uploaded successfully:', response);
        },
        (error) => {
          console.error('Error uploading image:', error);
        }
      );
    }
  }

  // Handle form submission
  onSubmit(): void {
    if (this.profileForm.valid) {
      this.profileService.updateProfile(this.profileForm.value).subscribe(
        (response) => {
          console.log('Profile updated successfully:', response);
          alert('Profile updated successfully!');
        },
        (error) => {
          console.error('Error updating profile:', error);
          alert('Failed to update profile.');
        }
      );
    } else {
      alert('Please fill out the form correctly.');
    }
  }

  // Handle logout
  onLogout(): void {
    // Clear user session or token
    console.log('User logged out');
    alert('You have been logged out.');
  }
}