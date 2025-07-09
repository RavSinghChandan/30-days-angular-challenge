# Day 5: Services & Dependency Injection 🔧

## 🎯 Learning Objectives

- Understand Angular services and their purpose
- Master dependency injection in Angular
- Learn how to create and use services
- Explore service lifecycle and providers
- Build a Quote Service App

## 📋 Project: Quote Service App

We'll build an application that fetches and displays inspirational quotes using a service.

### Features:
- Fetch quotes from external API
- Display random quotes
- Quote categories and filtering
- Favorite quotes functionality
- Share quotes functionality

## 🛠️ Setup Instructions

1. **Navigate to the project directory:**
   ```bash
   cd day05-services-di
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

### 1. Angular Services
- **What are Services?** Classes that encapsulate non-view logic
- **Service Characteristics:**
  - Singleton by default
  - Injectable across components
  - Handle business logic and data

### 2. Dependency Injection
- Angular's DI system provides services to components
- Services are injected via constructor
- Angular manages service instances automatically

### 3. Service Providers
- **Root level** - Single instance for entire app
- **Module level** - Instance per module
- **Component level** - Instance per component

### 4. HTTP Services
- HttpClient for API calls
- Observable handling
- Error management

## 🎨 Project Implementation Steps

### Step 1: Create Quote Service
- Generate the service using Angular CLI
- Set up service structure and methods

### Step 2: Define Quote Interface
- Create Quote interface with properties
- Define quote categories and types

### Step 3: Implement HTTP Service
- Inject HttpClient in the service
- Create methods for API calls
- Handle API responses and errors

### Step 4: Create Quote Component
- Generate the quote display component
- Inject the quote service
- Set up component structure

### Step 5: Implement Quote Fetching
- Call service methods from component
- Handle loading states
- Display quotes in template

### Step 6: Add Quote Management
- Implement favorite quotes functionality
- Add quote sharing features
- Create quote filtering

### Step 7: Handle Service Lifecycle
- Manage service subscriptions
- Implement proper cleanup
- Handle component destruction

### Step 8: Style the Application
- Add CSS for quote display
- Style buttons and controls
- Make it responsive

## 🎯 Exercises

1. **Basic Service Implementation:**
   - Create a simple service
   - Inject it into a component

2. **HTTP Service Integration:**
   - Fetch data from external API
   - Handle API responses

3. **Service State Management:**
   - Store and manage application state
   - Share data between components

4. **Advanced Service Features:**
   - Implement service caching
   - Add error handling and retry logic

## 🔍 Key Takeaways

- **Services** encapsulate business logic and data
- **Dependency injection** provides services to components
- **HTTP services** handle external API communication
- **Service lifecycle** affects performance and memory
- **Proper service design** improves code organization

## 🚀 Next Steps

- Practice creating different types of services
- Experiment with service providers
- Try implementing service caching
- Explore advanced DI patterns

## 📚 Additional Resources

- [Angular Services](https://angular.io/guide/services)
- [Dependency Injection](https://angular.io/guide/dependency-injection)
- [HttpClient](https://angular.io/guide/http)

---

**Happy Coding! 🎉**

Remember: Services are the backbone of Angular applications for data and business logic! 