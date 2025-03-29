# Student Report Card System

A simple Node.js application using Express and EJS template engine to display student information in card format.

## Project Structure
```
TemplateEngines/
├── views/
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

## Student Data Structure
```javascript
{
    Firstname: String,
    Lastname: String,
    RollNo: String
}
```

## Dependencies
- express
- ejs
- bootstrap (via CDN)

