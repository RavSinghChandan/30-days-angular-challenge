# Day 3: Structural Directives 🎯

## 🎯 Learning Objectives

- Understand structural directives in Angular
- Master *ngIf directive for conditional rendering
- Learn *ngFor directive for list rendering
- Explore *ngSwitch directive for multiple conditions
- Build a Task List with *ngIf, *ngFor

## 📋 Project: Task List with *ngIf, *ngFor

We'll build an interactive task list application that demonstrates the power of structural directives.

### Features:
- Add, edit, and delete tasks
- Mark tasks as complete/incomplete
- Filter tasks by status
- Show/hide completed tasks
- Task counter display

## 🛠️ Setup Instructions

1. **Navigate to the project directory:**
   ```bash
   cd day03-directives
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

### 1. Structural Directives
- **What are Structural Directives?** Directives that change the DOM structure
- **Common Structural Directives:**
  - *ngIf - Conditional rendering
  - *ngFor - List rendering
  - *ngSwitch - Multiple condition rendering

### 2. *ngIf Directive
- Shows/hides elements based on conditions
- Can use with else templates
- Supports complex expressions

### 3. *ngFor Directive
- Iterates over arrays and objects
- Provides index and other useful variables
- Can track items for performance

### 4. *ngSwitch Directive
- Alternative to multiple *ngIf statements
- More efficient for multiple conditions
- Uses *ngSwitchCase and *ngSwitchDefault

## 🎨 Project Implementation Steps

### Step 1: Create Task List Component
- Generate the component using Angular CLI
- Set up the component structure

### Step 2: Define Task Interface
- Create a Task interface with properties
- Define task status types

### Step 3: Implement Task Management
- Add tasks array to component
- Create methods for CRUD operations
- Implement task status toggling

### Step 4: Use *ngFor for Task List
- Display tasks using *ngFor
- Add task item template
- Include task actions (edit, delete, toggle)

### Step 5: Implement *ngIf for Conditional Rendering
- Show/hide completed tasks
- Display different content based on task status
- Add empty state when no tasks exist

### Step 6: Add Task Filtering
- Implement filter functionality
- Use *ngIf with filter conditions
- Show task counters

### Step 7: Style the Application
- Add CSS for task list layout
- Style task items and buttons
- Make it responsive

## 🎯 Exercises

1. **Basic Task List:**
   - Create a simple task list with *ngFor
   - Add basic task management

2. **Conditional Rendering:**
   - Use *ngIf to show/hide elements
   - Implement task status indicators

3. **Advanced Filtering:**
   - Add multiple filter options
   - Use *ngSwitch for filter display

4. **Performance Optimization:**
   - Implement trackBy function for *ngFor
   - Add loading states with *ngIf

## 🔍 Key Takeaways

- **Structural directives** change DOM structure, not just appearance
- ***ngIf** is perfect for conditional rendering
- **ngFor** is essential for list rendering
- **ngSwitch** is efficient for multiple conditions
- **TrackBy** improves performance with large lists

## 🚀 Next Steps

- Practice with different structural directive combinations
- Experiment with template reference variables
- Try creating custom structural directives
- Explore performance optimization techniques

## 📚 Additional Resources

- [Angular Structural Directives](https://angular.io/guide/structural-directives)
- [ngIf Documentation](https://angular.io/api/common/NgIf)
- [ngFor Documentation](https://angular.io/api/common/NgFor)

---

**Happy Coding! 🎉**

Remember: Structural directives are the backbone of dynamic Angular templates! 