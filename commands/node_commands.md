# Node.js Commands Guide

This comprehensive guide covers essential commands for working with Node.js, including version checking, running scripts, debugging, and module management.

## Version Management

### 1. Check Node.js Version
Display the installed Node.js version:
```bash
node -v
node --version
```

### 2. Check NPM Version
Display the installed NPM version:
```bash
npm -v
npm --version
```

### 3. Check Node.js Process Info
Display Node.js and V8 engine versions:
```bash
node -p "process.version"
node -p "process.versions"
```

## Running Scripts

### 4. Run a JavaScript File
Execute a Node.js script:
```bash
node <filename>
node app.js
```

### 5. Run Inline Code
Execute JavaScript code directly:
```bash
node -e "console.log('Hello, World!')"
node -p "Math.PI"
```

### 6. Run with ES Modules
Execute a script with ES module support:
```bash
node --input-type=module -e "import fs from 'fs'; console.log('ES Modules')"
```

### 7. Run TypeScript Files (with ts-node)
Execute TypeScript files if ts-node is installed:
```bash
npx ts-node <filename.ts>
```

## Debugging

### 8. Debug a Script
Start the debugger:
```bash
node --inspect <filename>
node --inspect-brk <filename>
```

### 9. Debug with Chrome DevTools
Open Chrome DevTools for debugging:
```bash
node --inspect=127.0.0.1:9229 <filename>
# Then open chrome://inspect
```

### 10. Debug with Breakpoint
Start with breakpoint on first line:
```bash
node --inspect-brk <filename>
```

## Module Management

### 11. Initialize a New Project
Create a package.json file:
```bash
npm init
npm init -y  # Accept defaults
```

### 12. Install Packages
Install dependencies:
```bash
npm install <package-name>
npm install <package-name> --save-dev  # Dev dependency
npm install <package-name> -g  # Global install
```

### 13. Uninstall Packages
Remove packages:
```bash
npm uninstall <package-name>
npm uninstall <package-name> -g  # Global uninstall
```

### 14. Update Packages
Update dependencies:
```bash
npm update
npm update <package-name>
```

## Scripts and Tasks

### 15. Run NPM Scripts
Execute scripts defined in package.json:
```bash
npm run <script-name>
npm start
npm test
npm run build
```

### 16. List Available Scripts
Show all scripts in package.json:
```bash
npm run
```

## Environment and Configuration

### 17. Set Environment Variables
Run with custom environment variables:
```bash
NODE_ENV=production node <filename>
PORT=3000 node app.js
```

### 18. Check Environment
Display current environment:
```bash
node -e "console.log(process.env)"
```

## File and Syntax Checking

### 19. Check Syntax
Validate JavaScript syntax without executing:
```bash
node -c <filename>
node --check <filename>
```

### 20. Lint Code (with ESLint)
Check code quality if ESLint is installed:
```bash
npx eslint <filename>
npx eslint .  # Entire project
```

## Performance and Profiling

### 21. Profile CPU Usage
Generate CPU profile:
```bash
node --prof <filename>
node --prof-process isolate-*.log
```

### 22. Trace Execution
Generate trace logs:
```bash
node --trace-events-enabled --trace-event-file=trace.json <filename>
```

### 23. Heap Snapshot
Take a heap snapshot:
```bash
node --heap-prof <filename>
```

## REPL and Interactive Mode

### 24. Start REPL
Enter interactive Node.js shell:
```bash
node
# Type JavaScript commands
# Press Ctrl+C twice to exit
```

### 25. Load Module in REPL
Load a module in REPL:
```bash
node -r <module-name>
```

## Version Managers (NVM)

### 26. Install Node Version
Install a specific Node.js version with NVM:
```bash
nvm install <version>
nvm install node  # Latest LTS
```

### 27. Use Specific Version
Switch to a specific version:
```bash
nvm use <version>
nvm use node
```

### 28. List Installed Versions
Show installed Node.js versions:
```bash
nvm list
```

### 29. Set Default Version
Set default Node.js version:
```bash
nvm alias default <version>
```

## Package Management

### 30. View Package Info
Display package information:
```bash
npm view <package-name>
npm info <package-name>
```

### 31. Search Packages
Search for packages in NPM registry:
```bash
npm search <query>
```

### 32. Publish Package
Publish your package to NPM:
```bash
npm publish
```

### 33. Login to NPM
Authenticate with NPM registry:
```bash
npm login
```

## Advanced Options

### 34. Run with Custom Memory Limit
Set maximum memory usage:
```bash
node --max-old-space-size=4096 <filename>  # 4GB
```

### 35. Enable Experimental Features
Use experimental Node.js features:
```bash
node --experimental-modules <filename>
node --experimental-json-modules <filename>
```

### 36. Watch Mode (Node 18+)
Auto-restart on file changes:
```bash
node --watch <filename>
```

### 37. Run with Custom Loader
Use a custom module loader:
```bash
node --loader <loader-file> <filename>
```

---

*Note: Many commands require additional tools like npx, ts-node, or eslint to be installed. Replace placeholders like `<filename>` with actual file names. For Windows, adjust commands as necessary (e.g., use `set` instead of `export` for environment variables).*"
