import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  imports: [],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {
  user = {
    name: 'John Doe',
    title: 'Full Stack Developer',
    avatar: 'assets/avatar.jpg',
    bio: 'Passionate developer with 5+ years of experience in web development.',
    location: 'San Francisco, CA',
    email: 'john.doe@example.com',
    social: {
      github: 'https://github.com/johndoe',
      linkedin: 'https://linkedin.com/in/johndoe',
      twitter: 'https://twitter.com/johndoe'
    }
  };
}
