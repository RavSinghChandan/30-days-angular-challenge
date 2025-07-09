# Day 6: Routing Basics 🛣️

## 🎯 Learning Objectives

- Understand Angular routing and navigation
- Master RouterModule and route configuration
- Learn router-outlet and routerLink
- Explore route parameters and navigation
- Build a Multi-page Portfolio Site

## 📋 Project: Multi-page Portfolio Site

We'll create a professional portfolio website with multiple pages using Angular routing.

### Features:
- Home page with introduction
- About page with skills and experience
- Projects page with portfolio items
- Contact page with form
- Navigation menu
- Responsive design

## 🛠️ Setup Instructions

1. **Navigate to the project directory:**
   ```bash
   cd day06-routing-basics
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

### 1. Angular Routing
- **What is Routing?** Navigation between different views/pages
- **Routing Components:**
  - RouterModule - Main routing module
  - router-outlet - Where routes are displayed
  - routerLink - Navigation links

### 2. Route Configuration
- Define routes array with path and component
- Configure default and wildcard routes
- Set up route parameters

### 3. Navigation
- routerLink directive for navigation
- routerLinkActive for active link styling
- Programmatic navigation with Router service

### 4. Route Parameters
- Path parameters for dynamic routes
- Query parameters for optional data
- Accessing parameters in components

## 🎨 Project Implementation Steps

### Step 1: Set Up Routing Module
- Configure RouterModule with routes
- Set up default and wildcard routes
- Import routing module in app module

### Step 2: Create Portfolio Components
- Generate Home, About, Projects, and Contact components
- Set up basic component structure
- Add component content

### Step 3: Configure Routes
- Define routes for each page
- Set up route parameters for projects
- Configure default route

### Step 4: Create Navigation Component
- Build navigation menu component
- Use routerLink for navigation
- Add active link styling

### Step 5: Implement Page Content
- Add content to each page component
- Create portfolio data structure
- Implement dynamic content

### Step 6: Add Route Parameters
- Create dynamic project detail pages
- Handle route parameters in components
- Implement parameter-based navigation

### Step 7: Style the Portfolio
- Add CSS for navigation and pages
- Implement responsive design
- Create professional styling

### Step 8: Add Navigation Features
- Implement breadcrumb navigation
- Add page transitions
- Handle route guards

## 🎯 Exercises

1. **Basic Routing Setup:**
   - Configure routes for multiple pages
   - Set up navigation between pages

2. **Route Parameters:**
   - Create dynamic routes with parameters
   - Access and use route parameters

3. **Navigation Features:**
   - Implement active link styling
   - Add programmatic navigation

4. **Advanced Routing:**
   - Set up child routes
   - Implement route guards

## 🔍 Key Takeaways

- **Routing** enables single-page application navigation
- **RouterModule** provides routing functionality
- **router-outlet** displays routed components
- **routerLink** creates navigation links
- **Route parameters** enable dynamic routing

## 🚀 Next Steps

- Practice with different routing patterns
- Experiment with route guards
- Try implementing lazy loading
- Explore advanced routing features

## 📚 Additional Resources

- [Angular Routing](https://angular.io/guide/routing-overview)
- [RouterModule](https://angular.io/api/router/RouterModule)
- [Router](https://angular.io/api/router/Router)

---

**Happy Coding! 🎉**

Remember: Routing transforms your app into a multi-page experience! 