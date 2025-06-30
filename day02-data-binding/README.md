# Day 2: Data Binding (One/Two Way) 🔄

## 🎯 Learning Objectives

- Understand different types of data binding in Angular
- Master interpolation ({{ }})
- Learn property binding ([property])
- Implement event binding ((event))
- Explore two-way data binding [(ngModel)]
- Build a Live Profile Editor

## 📋 Project: Live Profile Editor

We'll create an interactive profile editor where users can edit their information in real-time and see the changes reflected immediately.

### Features:
- Real-time profile editing
- Live preview of changes
- Form validation
- Responsive design
- Auto-save functionality

## 🛠️ Setup Instructions

1. **Navigate to the project directory:**
   ```bash
   cd day02-data-binding
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

### 1. Types of Data Binding

#### Interpolation (One-way: Component → Template)
```html
<h1>{{ title }}</h1>
<p>{{ user.name }}</p>
```

#### Property Binding (One-way: Component → Template)
```html
<img [src]="user.avatar" [alt]="user.name">
<button [disabled]="isLoading">Save</button>
```

#### Event Binding (One-way: Template → Component)
```html
<button (click)="saveProfile()">Save</button>
<input (input)="onNameChange($event)">
```

#### Two-way Data Binding (Component ↔ Template)
```html
<input [(ngModel)]="user.name">
<textarea [(ngModel)]="user.bio"></textarea>
```

### 2. Data Binding Syntax

| Type | Syntax | Direction | Example |
|------|--------|-----------|---------|
| Interpolation | `{{ expression }}` | Component → Template | `{{ user.name }}` |
| Property Binding | `[property]="expression"` | Component → Template | `[src]="imageUrl"` |
| Event Binding | `(event)="handler()"` | Template → Component | `(click)="save()"` |
| Two-way Binding | `[(ngModel)]="property"` | Component ↔ Template | `[(ngModel)]="user.name"` |

## 🎨 Project Implementation

### Step 1: Create Profile Editor Component
```bash
ng generate component profile-editor
```

### Step 2: Import FormsModule
```typescript
// app.module.ts
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule  // Required for [(ngModel)]
  ]
})
```

### Step 3: Create the Profile Editor
- Add form inputs with two-way binding
- Implement live preview
- Add validation

## 📝 Code Examples

### Profile Editor Component
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
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
    // Simulate API call
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
```

### Profile Editor Template
```html
<div class="profile-editor">
  <div class="editor-section">
    <h2>Edit Profile</h2>
    
    <div class="form-group">
      <label>Name:</label>
      <input 
        type="text" 
        [(ngModel)]="user.name" 
        (input)="onNameChange($event)"
        placeholder="Enter your name">
    </div>

    <div class="form-group">
      <label>Title:</label>
      <input 
        type="text" 
        [(ngModel)]="user.title"
        placeholder="Enter your job title">
    </div>

    <div class="form-group">
      <label>Bio:</label>
      <textarea 
        [(ngModel)]="user.bio"
        rows="4"
        placeholder="Tell us about yourself"></textarea>
    </div>

    <div class="form-group">
      <label>Email:</label>
      <input 
        type="email" 
        [(ngModel)]="user.email"
        placeholder="Enter your email">
    </div>

    <div class="form-group">
      <label>Location:</label>
      <input 
        type="text" 
        [(ngModel)]="user.location"
        placeholder="Enter your location">
    </div>

    <button 
      (click)="saveProfile()" 
      [disabled]="isLoading">
      {{ isLoading ? 'Saving...' : 'Save Profile' }}
    </button>
  </div>

  <div class="preview-section">
    <h2>Live Preview</h2>
    <div class="profile-card">
      <h3>{{ user.name || 'Your Name' }}</h3>
      <p class="title">{{ user.title || 'Your Title' }}</p>
      <p class="bio">{{ user.bio || 'Your bio will appear here' }}</p>
      <p class="email">📧 {{ user.email || 'your.email@example.com' }}</p>
      <p class="location">📍 {{ user.location || 'Your Location' }}</p>
    </div>
  </div>
</div>
```

## 🎯 Exercises

1. **Basic Data Binding:**
   - Create a simple form with interpolation and property binding
   - Add event binding to a button

2. **Two-way Binding:**
   - Implement form inputs with [(ngModel)]
   - Create a live preview that updates as you type

3. **Advanced Binding:**
   - Add conditional property binding
   - Implement dynamic class binding
   - Create custom event emitters

4. **Form Validation:**
   - Add required field validation
   - Implement email format validation
   - Show validation messages

## 🔍 Key Takeaways

- **Interpolation** displays component data in templates
- **Property binding** sets element properties from component data
- **Event binding** responds to user actions
- **Two-way binding** keeps component and template in sync
- **FormsModule** is required for [(ngModel)] to work

## 🚀 Next Steps

- Practice with different binding scenarios
- Experiment with conditional binding
- Try binding to custom properties
- Explore template reference variables

## 📚 Additional Resources

- [Angular Data Binding](https://angular.io/guide/binding-syntax)
- [Template Syntax](https://angular.io/guide/template-syntax)
- [Forms in Angular](https://angular.io/guide/forms-overview)

---

**Happy Coding! 🎉**

Remember: Data binding is what makes Angular reactive and interactive! 