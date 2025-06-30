# Day 1: Angular Setup + Components 🚀

## 🎯 Learning Objectives

- Set up a new Angular project
- Understand Angular project structure
- Create and use components
- Learn component decorators and metadata
- Build a Personal Profile Card App

## 📋 Project: Personal Profile Card App

We'll build a beautiful personal profile card that displays user information in a card format.

### Features:
- Profile card component with user information
- Avatar display
- Social media links
- Responsive design
- Clean, modern UI

## 🛠️ Setup Instructions

1. **Navigate to the project directory:**
   ```bash
   cd day01-intro-components
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   ng serve
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:4200
   ```

## 📚 Key Concepts Covered

### 1. Angular Project Structure
```
src/
├── app/
│   ├── app.component.ts      # Root component
│   ├── app.component.html    # Root template
│   ├── app.component.css     # Root styles
│   └── app.module.ts         # Root module
├── assets/                   # Static assets
├── index.html               # Main HTML file
├── main.ts                  # Application entry point
└── styles.css               # Global styles
```

### 2. Components
- **What are Components?** Building blocks of Angular applications
- **Component Structure:**
  - TypeScript class (logic)
  - HTML template (view)
  - CSS styles (presentation)
  - Component decorator (metadata)

### 3. Component Decorator
```typescript
@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
```

### 4. Component Lifecycle
- Constructor → ngOnInit → Template rendering → User interaction

## 🎨 Project Implementation

### Step 1: Create Profile Card Component
```bash
ng generate component profile-card
```

### Step 2: Update the Profile Card Component
- Add user data properties
- Create the HTML template
- Style the component

### Step 3: Use the Component in App Component
- Import and declare the component
- Use the component selector in template

## 📝 Code Examples

### Profile Card Component Class
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
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
```

### Profile Card Template
```html
<div class="profile-card">
  <div class="avatar">
    <img [src]="user.avatar" [alt]="user.name">
  </div>
  <div class="info">
    <h2>{{ user.name }}</h2>
    <p class="title">{{ user.title }}</p>
    <p class="bio">{{ user.bio }}</p>
    <p class="location">📍 {{ user.location }}</p>
    <p class="email">📧 {{ user.email }}</p>
  </div>
  <div class="social-links">
    <a [href]="user.social.github" target="_blank">GitHub</a>
    <a [href]="user.social.linkedin" target="_blank">LinkedIn</a>
    <a [href]="user.social.twitter" target="_blank">Twitter</a>
  </div>
</div>
```

## 🎯 Exercises

1. **Basic Profile Card:**
   - Create a simple profile card with name, title, and bio

2. **Enhanced Profile Card:**
   - Add avatar image
   - Include social media links
   - Add contact information

3. **Styling Challenge:**
   - Make the card responsive
   - Add hover effects
   - Implement a modern design

4. **Component Communication:**
   - Create a parent component that passes data to the profile card
   - Use @Input() decorator to receive data

## 🔍 Key Takeaways

- **Components** are the fundamental building blocks of Angular apps
- **Decorators** provide metadata to classes
- **Templates** define the view using HTML and Angular template syntax
- **Data binding** connects component data to the template
- **Component structure** follows separation of concerns

## 🚀 Next Steps

- Practice creating more components
- Experiment with different component selectors
- Try creating nested components
- Explore component lifecycle hooks

## 📚 Additional Resources

- [Angular Components Guide](https://angular.io/guide/component-overview)
- [Component Interaction](https://angular.io/guide/component-interaction)
- [Lifecycle Hooks](https://angular.io/guide/lifecycle-hooks)

---

**Happy Coding! 🎉**

Remember: Components are the heart of Angular applications. Master them well! 