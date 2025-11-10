# NPM Commands Guide

This comprehensive guide covers essential commands for working with NPM (Node Package Manager), including package management, scripts, and publishing.

## Version and Info

### 1. Check NPM Version
Display the installed NPM version:
```bash
npm -v
npm --version
```

### 2. Update NPM
Update NPM to the latest version:
```bash
npm install -g npm@latest
```

### 3. Check NPM Config
Display NPM configuration:
```bash
npm config list
npm config get <key>
```

## Project Initialization

### 4. Initialize a New Project
Create a package.json file:
```bash
npm init
npm init -y  # Accept all defaults
```

### 5. Initialize with Specific Options
Initialize with custom settings:
```bash
npm init --scope=@myorg  # Scoped package
npm init --yes  # Same as -y
```

## Package Installation

### 6. Install Packages
Install dependencies:
```bash
npm install <package-name>
npm install <package-name>@<version>  # Specific version
npm install <package-name> --save-dev  # Dev dependency
npm install <package-name> -g  # Global install
```

### 7. Install from package.json
Install all dependencies listed in package.json:
```bash
npm install
npm ci  # Clean install (faster, for CI/CD)
```

### 8. Install Peer Dependencies
Install peer dependencies:
```bash
npm install <package-name> --save-peer
```

### 9. Install Optional Dependencies
Install optional dependencies:
```bash
npm install <package-name> --save-optional
```

## Package Management

### 10. Uninstall Packages
Remove packages:
```bash
npm uninstall <package-name>
npm uninstall <package-name> -g  # Global uninstall
```

### 11. Update Packages
Update dependencies:
```bash
npm update
npm update <package-name>
```

### 12. List Installed Packages
Show installed packages:
```bash
npm list
npm list -g  # Global packages
npm list --depth=0  # Top-level only
```

### 13. View Package Info
Display package information:
```bash
npm view <package-name>
npm info <package-name>
npm view <package-name> versions  # All versions
```

### 14. Search Packages
Search for packages in the registry:
```bash
npm search <query>
```

## Scripts and Tasks

### 15. Run NPM Scripts
Execute scripts defined in package.json:
```bash
npm run <script-name>
npm start  # Run start script
npm test   # Run test script
npm run build  # Run build script
```

### 16. List Available Scripts
Show all scripts in package.json:
```bash
npm run
```

### 17. Run Scripts with Arguments
Pass arguments to scripts:
```bash
npm run <script> -- <args>
```

## Publishing

### 18. Login to NPM
Authenticate with NPM registry:
```bash
npm login
npm login --registry <url>  # Custom registry
```

### 19. Publish Package
Publish your package:
```bash
npm publish
npm publish --tag beta  # Publish with tag
npm publish --dry-run  # Test publish
```

### 20. Unpublish Package
Remove a package from registry:
```bash
npm unpublish <package-name>@<version>
```

### 21. Deprecate Package
Mark a package as deprecated:
```bash
npm deprecate <package-name> "Message"
```

## Security and Audit

### 22. Audit Packages
Check for security vulnerabilities:
```bash
npm audit
npm audit fix  # Auto-fix issues
npm audit fix --force  # Force fixes
```

### 23. Audit with JSON Output
Get audit results in JSON format:
```bash
npm audit --json
```

## Cache Management

### 24. Clear NPM Cache
Clear the NPM cache:
```bash
npm cache clean --force
```

### 25. Verify Cache
Verify cache integrity:
```bash
npm cache verify
```

## Configuration

### 26. Set NPM Config
Configure NPM settings:
```bash
npm config set <key> <value>
npm config set registry <url>  # Set registry
npm config set proxy <url>  # Set proxy
```

### 27. Get NPM Config
Retrieve configuration values:
```bash
npm config get <key>
```

### 28. Delete NPM Config
Remove configuration:
```bash
npm config delete <key>
```

## Development Tools

### 29. Run with NPX
Execute packages without installing:
```bash
npx <package-name>
npx <package-name> --version
```

### 30. Create React App
Quickly create a React app:
```bash
npx create-react-app <app-name>
```

### 31. Create Next.js App
Create a Next.js application:
```bash
npx create-next-app <app-name>
```

## Linking and Development

### 32. Link Package
Link a local package for development:
```bash
npm link
npm link <package-name>  # Link to global
```

### 33. Unlink Package
Remove package link:
```bash
npm unlink <package-name>
```

## Outdated and Updates

### 34. Check Outdated Packages
Show outdated packages:
```bash
npm outdated
```

### 35. Update to Latest
Update packages to latest versions:
```bash
npm install <package-name>@latest
```

## Workspaces (Monorepos)

### 36. Install in Workspace
Install in specific workspace:
```bash
npm install <package-name> --workspace=<workspace-name>
```

### 37. Run Script in Workspace
Execute script in specific workspace:
```bash
npm run <script> --workspace=<workspace-name>
```

### 38. Run Script in All Workspaces
Execute script across all workspaces:
```bash
npm run <script> --workspaces
```

## Miscellaneous

### 39. Check NPM Doctor
Diagnose NPM issues:
```bash
npm doctor
```

### 40. View NPM Help
Get help on commands:
```bash
npm help
npm help <command>
```

### 41. NPM Profile
Manage your NPM profile:
```bash
npm profile get
npm profile set <key> <value>
```

### 42. NPM Team
Manage organization teams:
```bash
npm team create <org:team>
npm team add <org:team> <user>
```

### 43. NPM Org
Manage organizations:
```bash
npm org create <org>
npm org set <org> <user> <role>
```

---

*Note: Many commands have additional flags and options. Use `npm <command> --help` for detailed information. Replace placeholders with actual package names or values. NPM commands are generally cross-platform, but some may behave differently on Windows.*
