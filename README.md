# Student Report Card System

A simple Node.js application using Express and EJS template engine to display student information in card format.

## Project Structure
```
TemplateEngines/
├── views/
│   ├── partials/
│   │   └── header.ejs
│   └── report.ejs
├── routes/
│   └── app.routes.js
├── app.js
└── README.md
```

## Technologies Used
- Node.js
- Express.js
- EJS (Embedded JavaScript templating)
- Bootstrap 5.3.3

## Setup Instructions
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   node app.js
   ```
4. Open browser and navigate to:
   ```
   http://localhost:3000/app/report
   ```

## Features
- Display student information in Bootstrap cards
- Responsive design
- Dynamic data rendering using EJS templates
- Reusable EJS partials for consistent layout

## API Endpoints
- GET `/app/report` - Displays student report cards

## Project Components

### 1. app.js (Main Server File)
- Sets up Express server
- Configures EJS as view engine
- Handles routing and middleware

### 2. app.routes.js (Routes)
- Defines route for student report
- Contains student data array
- Renders EJS template with data

### 3. report.ejs (View Template)
- Bootstrap-based responsive layout
- Dynamic rendering of student cards
- Custom CSS styling
- Includes reusable header partial

### 4. header.ejs (Partial Template)
- Contains navigation bar
- Reusable across multiple pages

## Student Data Structure
```javascript
{
    Firstname: String,
    Lastname: String,
    RollNo: String
}
```

## EJS Partials in Student Report System

### What are EJS Partials?

Partials are reusable EJS templates that can be included in other templates. They help in:
- Maintaining consistent layouts
- Reducing code duplication
- Easier maintenance of common elements

### Using Partials

#### Including a Partial
To include a partial in your EJS template, use:
```ejs
<%- include('partials/header') %>
```

#### Current Implementation

1. **Header Partial (`header.ejs`)**
```ejs
<nav class="navbar">
    <ul class="navbar-link">
        <li><a href="#section1">Home</a></li>
        <li><a href="#section1">About</a></li>
        <li><a href="#section1">Contact</a></li>
        <li><a href="#section1">Services</a></li>
    </ul>
</nav>
```

2. **Main Template (`report.ejs`)**
```ejs
<!DOCTYPE html>
<html>
<head>
    <!-- ...head content... -->
</head>
<body>
    <%- include('header') %>
    <!-- ...rest of content... -->
</body>
</html>
```

### Styling Partials

#### Current Header Styles
```css
.navbar {
    display: flex;
    max-width: 140rem;
    padding: 4.2rem 2.4rem;
    flex-direction: row;
    justify-content: flex-end;
    background-color: darkturquoise;
}

.navbar-link {
    gap: 3.2rem;
    list-style: none;
    display: flex;
}
```

### Best Practices

1. **File Organization**
   - Keep partials in a dedicated `/partials` directory
   - Use meaningful names for partial files

2. **Include Syntax**
   - Use `<%-` instead of `<%=` for including partials
   - Always close the include tag properly

3. **Path Resolution**
   - Use relative paths from the views directory
   - Avoid using absolute paths

### Common Issues and Solutions

1. **Partial Not Found Error**
   ```
   Could not find the include file "header"
   ```
   Solution: Ensure the partial file exists and the path is correct

2. **Duplicate HTML Structure**
   - Remove redundant HTML tags from partials
   - Keep only the necessary component-specific code

### Future Improvements

1. Add more partials for:
   - Footer
   - Sidebar
   - Card components

2. Implement dynamic navigation
3. Add proper routing for navigation links

### Related Documentation
- [EJS Partials Documentation](https://ejs.co/#docs)
- [Express.js View Engine](https://expressjs.com/en/guide/using-template-engines.html)

## Dependencies
- express
- ejs
- bootstrap (via CDN)

