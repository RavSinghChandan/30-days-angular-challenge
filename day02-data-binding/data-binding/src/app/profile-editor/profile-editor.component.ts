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
    name: 'John Doe', // User's name
    title: 'Full Stack Developer', // User's job title
    bio: 'Passionate developer with 5+ years of experience.', // Short bio
    email: 'john.doe@example.com', // Email address
    location: 'San Francisco, CA', // Location
    skills: ['Angular', 'TypeScript', 'Node.js'] // List of skills
  };

  // Indicates if the profile is being saved (for loading state)
  isLoading = false;

  /**
   * Handler for name input changes.
   * Logs the new name value to the console.
   * @param event Input event from the name field
   */
  onNameChange(event: any) {
    console.log('Name changed to:', event.target.value);
  }

  /**
   * Simulates saving the profile (e.g., to a server).
   * Shows a loading state and then an alert when done.
   */
  saveProfile() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      alert('Profile saved successfully!');
    }, 1000);
  }

  /**
   * Adds a new skill to the user's skills array if not already present.
   * @param skill The skill to add
   */
  addSkill(skill: string) {
    if (skill && !this.user.skills.includes(skill)) {
      this.user.skills.push(skill);
    }
  }

  /**
   * Removes a skill from the user's skills array by index.
   * @param index The index of the skill to remove
   */
  removeSkill(index: number) {
    this.user.skills.splice(index, 1);
  }
}
