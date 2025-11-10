# Express.js Commands Guide

This guide provides essential commands for working with Express.js applications, including installation, project creation, and running your app.

## Installation

### 1. Install Express.js
To install Express.js as a dependency in your project:
```bash
npm install express
```

### 2. Install Express Generator (Globally)
For scaffolding new Express applications:
```bash
npm install -g express-generator
```

## Version Check

### 3. Check Express Version
Verify the installed version of Express Generator:
```bash
express --version
```

## Project Creation

### 4. Create a New Express App
Generate a new Express application with Pug templating:
```bash
express --view=pug my-app
```

**Alternative View Engines:**
- EJS: `express --view=ejs my-app`
- Handlebars: `express --view=hbs my-app`
- Jade (now Pug): `express --view=pug my-app`

**Additional Options:**
- CSS Engine: `express --css=sass my-app`
- Session Support: `express --session my-app`

## Setup and Dependencies

### 5. Install Project Dependencies
Navigate to your app directory and install dependencies:
```bash
cd my-app
npm install
```

## Running the Application

### 6. Run Express App
Start the application with debugging enabled:
```bash
export DEBUG=my-app:*
npm start
```

**Alternative Ways to Run:**
- Development Mode: `npm run dev` (if configured with nodemon)
- Production Mode: `NODE_ENV=production npm start`
- With Nodemon: `npx nodemon bin/www`

## Additional Commands

### 7. View Express Generator Help
Get help on available options:
```bash
express --help
```

### 8. Create App with No View Engine
For API-only applications:
```bash
express --no-view my-api
```

### 9. Install Development Dependencies
For development tools like nodemon:
```bash
npm install --save-dev nodemon
```

### 10. Start with Auto-Reload
Configure and run with nodemon for development:
```bash
npx nodemon
```

---

*Note: Replace `my-app` with your actual application name. Commands are tailored for macOS/Linux; adjust for Windows if necessary.*
