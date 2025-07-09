# Day 4: Attribute Directives 🎨

## 🎯 Learning Objectives

- Understand attribute directives in Angular
- Master ngClass directive for dynamic styling
- Learn ngStyle directive for inline styles
- Explore custom attribute directives
- Build a Dynamic Style/Theming Dashboard

## 📋 Project: Dynamic Style/Theming Dashboard

We'll create a dashboard that demonstrates dynamic styling and theming using attribute directives.

### Features:
- Dynamic theme switching (light/dark mode)
- Color palette customization
- Font size adjustment
- Layout style toggles
- Real-time style preview

## 🛠️ Setup Instructions

1. **Navigate to the project directory:**
   ```bash
   cd day04-event-binding
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

### 1. Attribute Directives
- **What are Attribute Directives?** Directives that change element behavior or appearance
- **Common Attribute Directives:**
  - ngClass - Dynamic CSS classes
  - ngStyle - Dynamic inline styles
  - Custom attribute directives

### 2. ngClass Directive
- Applies CSS classes conditionally
- Supports object syntax, array syntax, and string syntax
- Perfect for dynamic theming

### 3. ngStyle Directive
- Applies inline styles dynamically
- Supports object syntax with camelCase properties
- Useful for dynamic styling

### 4. Custom Attribute Directives
- Create your own directives
- Use @Directive decorator
- Access element properties and events

## 🎨 Project Implementation Steps

### Step 1: Create Dashboard Component
- Generate the dashboard component
- Set up basic layout structure

### Step 2: Define Theme Configuration
- Create theme interface
- Define color palettes
- Set up font configurations

### Step 3: Implement Theme Switching
- Add theme toggle functionality
- Use ngClass for theme classes
- Implement light/dark mode

### Step 4: Add Dynamic Styling Controls
- Create color picker controls
- Add font size sliders
- Implement layout toggles

### Step 5: Use ngClass for Dynamic Classes
- Apply theme classes conditionally
- Add responsive class bindings
- Implement state-based styling

### Step 6: Implement ngStyle for Dynamic Styles
- Apply dynamic colors
- Set font sizes dynamically
- Add custom style properties

### Step 7: Create Custom Attribute Directive
- Build a highlight directive
- Add hover effects
- Implement custom styling logic

### Step 8: Style the Dashboard
- Add CSS for theme variations
- Style control panels
- Make it responsive

## 🎯 Exercises

1. **Basic Theme Switching:**
   - Implement light/dark mode toggle
   - Use ngClass for theme classes

2. **Dynamic Color Palette:**
   - Create color picker controls
   - Apply colors with ngStyle

3. **Custom Attribute Directive:**
   - Build a highlight directive
   - Add hover effects

4. **Advanced Theming:**
   - Create multiple theme presets
   - Implement custom CSS properties

## 🔍 Key Takeaways

- **Attribute directives** change element behavior and appearance
- **ngClass** is perfect for conditional CSS classes
- **ngStyle** is ideal for dynamic inline styles
- **Custom directives** extend Angular's functionality
- **Dynamic theming** enhances user experience

## 🚀 Next Steps

- Practice creating custom attribute directives
- Experiment with different ngClass syntaxes
- Try combining multiple attribute directives
- Explore CSS custom properties with Angular

## 📚 Additional Resources

- [Angular Attribute Directives](https://angular.io/guide/attribute-directives)
- [ngClass Documentation](https://angular.io/api/common/NgClass)
- [ngStyle Documentation](https://angular.io/api/common/NgStyle)

---

**Happy Coding! 🎉**

Remember: Attribute directives make your Angular apps dynamic and interactive! 