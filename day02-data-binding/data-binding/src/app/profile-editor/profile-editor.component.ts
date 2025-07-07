import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile-editor.component.html',
  styleUrl: './profile-editor.component.css'
})
export class ProfileEditorComponent {
  user = {
    name: 'John Doe',
    title: 'Full Stack Developer',
    bio: 'Passionate developer with 5+ years of experience.',
    email: 'john.doe@example.com',
    location: 'San Francisco, CA',
    skills: ['Angular', 'TypeScript', 'Node.js']
  };

  isLoading = false;

  onNameChange(event: any) {
    console.log('Name changed to:', event.target.value);
  }

  saveProfile() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      alert('Profile saved successfully!');
    }, 1000);
  }

  addSkill(skill: string) {
    if (skill && !this.user.skills.includes(skill)) {
      this.user.skills.push(skill);
    }
  }

  removeSkill(index: number) {
    this.user.skills.splice(index, 1);
  }
}
