# Day 7: Nested Routes & Params 📝

## 🎯 Learning Objectives

- Understand nested routing in Angular
- Master child routes and route hierarchy
- Learn advanced route parameters
- Explore route resolvers and guards
- Build a Blog Viewer (Post List + Post Details)

## 📋 Project: Blog Viewer (Post List + Post Details)

We'll create a blog application with nested routes for post listing and detailed post views.

### Features:
- Blog post listing page
- Individual post detail pages
- Nested navigation structure
- Post categories and filtering
- Related posts functionality
- Search and pagination

## 🛠️ Setup Instructions

1. **Navigate to the project directory:**
   ```bash
   cd day07-nested-routes
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

### 1. Nested Routes
- **What are Nested Routes?** Routes that contain child routes
- **Route Hierarchy:**
  - Parent routes contain child routes
  - Child routes inherit parent context
  - Multiple levels of nesting possible

### 2. Child Routes
- Defined using children property in route configuration
- Child routes are relative to parent route
- Can have their own parameters and guards

### 3. Route Parameters
- **Path Parameters** - Required parameters in URL
- **Query Parameters** - Optional parameters
- **Matrix Parameters** - Local to route segment

### 4. Route Resolvers
- Pre-fetch data before route activation
- Ensure data is available before component loads
- Improve user experience

## 🎨 Project Implementation Steps

### Step 1: Set Up Nested Route Structure
- Configure parent blog route
- Define child routes for list and detail
- Set up route hierarchy

### Step 2: Create Blog Components
- Generate Blog, PostList, and PostDetail components
- Set up component structure
- Implement basic layouts

### Step 3: Configure Nested Routes
- Define parent route with children
- Set up route parameters for post IDs
- Configure default child route

### Step 4: Implement Post List Component
- Display list of blog posts
- Add post filtering and search
- Implement pagination

### Step 5: Create Post Detail Component
- Handle route parameters for post ID
- Fetch and display post details
- Show related posts

### Step 6: Add Navigation Features
- Implement breadcrumb navigation
- Add category filtering
- Create post navigation (prev/next)

### Step 7: Implement Route Resolvers
- Create post resolver for data pre-fetching
- Handle loading states
- Improve user experience

### Step 8: Style the Blog
- Add CSS for blog layout
- Style post cards and detail pages
- Implement responsive design

## 🎯 Exercises

1. **Basic Nested Routes:**
   - Set up parent and child routes
   - Navigate between nested views

2. **Route Parameters:**
   - Implement dynamic post detail routes
   - Handle multiple parameter types

3. **Route Resolvers:**
   - Create data resolvers
   - Pre-fetch data before route activation

4. **Advanced Routing:**
   - Implement route guards
   - Add lazy loading for routes

## 🔍 Key Takeaways

- **Nested routes** create hierarchical navigation
- **Child routes** inherit parent context
- **Route parameters** enable dynamic routing
- **Route resolvers** improve data loading
- **Proper route structure** enhances user experience

## 🚀 Next Steps

- Practice with complex nested route structures
- Experiment with route resolvers and guards
- Try implementing lazy loading
- Explore advanced routing patterns

## 📚 Additional Resources

- [Angular Nested Routes](https://angular.io/guide/router#nesting-routes)
- [Route Parameters](https://angular.io/guide/router#route-parameters)
- [Route Resolvers](https://angular.io/guide/router#resolve-guard)

---

**Happy Coding! 🎉**

Remember: Nested routes create powerful, organized navigation structures! 