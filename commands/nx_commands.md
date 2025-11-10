# NX Commands Guide

This comprehensive guide covers essential commands for working with NX, a powerful build system for monorepos, including workspace management, code generation, and task execution.

## Installation and Setup

### 1. Create a New NX Workspace
Initialize a new NX workspace:
```bash
npx create-nx-workspace@latest <workspace-name>
npx create-nx-workspace@latest <workspace-name> --preset=empty  # Empty workspace
npx create-nx-workspace@latest <workspace-name> --preset=angular  # Angular preset
npx create-nx-workspace@latest <workspace-name> --preset=react  # React preset
```

### 2. Install NX CLI Globally
Install NX CLI for global access:
```bash
npm install -g nx
```

### 3. Check NX Version
Display the installed NX version:
```bash
nx --version
nx report
```

## Project Generation

### 4. Generate an Application
Create a new application in the workspace:
```bash
nx generate @nx/angular:app <app-name>  # Angular app
nx generate @nx/react:app <app-name>  # React app
nx generate @nx/nest:app <app-name>  # NestJS app
nx generate @nx/express:app <app-name>  # Express app
nx g @nx/angular:app <app-name>  # Short form
```

### 5. Generate a Library
Create a new library in the workspace:
```bash
nx generate @nx/angular:lib <lib-name>  # Angular lib
nx generate @nx/react:lib <lib-name>  # React lib
nx generate @nx/nest:lib <lib-name>  # NestJS lib
nx generate @nx/js:lib <lib-name>  # JavaScript lib
nx g @nx/js:lib <lib-name>  # Short form
```

### 6. Generate Components and Features
Create components, services, and other constructs:
```bash
nx generate @nx/angular:component <component-name> --project=<app-name>
nx generate @nx/react:component <component-name> --project=<app-name>
nx generate @nx/nest:service <service-name> --project=<app-name>
nx generate @nx/js:lib <lib-name> --directory=<dir>
```

## Running Applications

### 7. Serve an Application
Start the development server for an app:
```bash
nx serve <app-name>
nx s <app-name>  # Short form
nx serve <app-name> --port=4201  # Custom port
nx serve <app-name> --open  # Open browser
```

### 8. Build an Application
Build an application for production:
```bash
nx build <app-name>
nx b <app-name>  # Short form
nx build <app-name> --prod  # Production build
nx build <app-name> --watch  # Watch mode
```

### 9. Run Multiple Tasks
Execute tasks across multiple projects:
```bash
nx run-many --target=build --all  # Build all projects
nx run-many --target=test --projects=app1,lib1  # Specific projects
nx run-many --target=lint --parallel  # Run in parallel
```

## Testing and Linting

### 10. Run Tests
Execute unit tests for a project:
```bash
nx test <project-name>
nx t <project-name>  # Short form
nx test <project-name> --watch  # Watch mode
nx test <project-name> --coverage  # With coverage
```

### 11. Run Linting
Check code quality with linting:
```bash
nx lint <project-name>
nx lint <project-name> --fix  # Auto-fix issues
```

### 12. Run E2E Tests
Execute end-to-end tests:
```bash
nx e2e <app-name>
nx e2e <app-name> --watch  # Watch mode
```

## Affected Commands

### 13. Build Affected Projects
Build only projects affected by changes:
```bash
nx affected --target=build
nx affected:build  # Short form
nx affected --target=test --parallel  # Test affected
```

### 14. View Affected Projects
Show which projects are affected by changes:
```bash
nx show projects --affected
nx affected:libs  # Show affected libs
```

## Graph and Visualization

### 15. View Project Graph
Visualize project dependencies:
```bash
nx graph
nx dep-graph  # Dependency graph
nx graph --focus=<project-name>  # Focus on specific project
```

### 16. View Task Graph
Show the task execution graph:
```bash
nx graph --target=build
nx show project <project-name>  # Project details
```

## Migration and Updates

### 17. Run Migrations
Update NX and migrate configurations:
```bash
nx migrate latest  # Migrate to latest NX version
nx migrate @nx/workspace@latest  # Specific package
nx migrate --run-migrations  # Apply migrations
```

### 18. Update Dependencies
Update workspace dependencies:
```bash
nx migrate --update-lock-file  # Update lock file
```

## Cache and Performance

### 19. Reset Cache
Clear NX cache:
```bash
nx reset
```

### 20. View Cache
Check cache status:
```bash
nx show projects --with-cache
```

## Plugins and Generators

### 21. Add Plugin
Add an NX plugin to the workspace:
```bash
nx add @nx/angular  # Add Angular plugin
nx add @nx/react  # Add React plugin
nx add @nx/nest  # Add NestJS plugin
```

### 22. List Generators
Show available code generators:
```bash
nx list  # List all plugins
nx list @nx/angular  # List Angular generators
```

### 23. Generate with Specific Plugin
Use generators from specific plugins:
```bash
nx generate @nx/angular:component <name> --project=<app>
nx generate @nx/nest:service <name> --project=<app>
```

## Configuration and Help

### 24. View Help
Get help on NX commands:
```bash
nx --help
nx help <command>
```

### 25. View Workspace Configuration
Check workspace configuration:
```bash
nx show projects  # List all projects
nx show project <project-name>  # Project config
```

### 26. Format Code
Format code using Prettier (if configured):
```bash
nx format:check  # Check formatting
nx format:write  # Fix formatting
```

## Advanced Commands

### 27. Run Custom Scripts
Execute custom scripts defined in project.json:
```bash
nx run <project>:<script>
nx run my-app:custom-script
```

### 28. Daemon Management
Manage NX daemon for faster builds:
```bash
nx daemon  # Start daemon
nx daemon --stop  # Stop daemon
```

### 29. Print Affected
Print affected projects and files:
```bash
nx print-affected --target=build
nx print-affected --select=projects  # Only project names
```

### 30. Workspace Lint
Lint the entire workspace:
```bash
nx workspace-lint
```

### 31. Clean Workspace
Clean build artifacts:
```bash
nx clean  # Remove dist folders
```

### 32. Convert to Latest Format
Convert older NX configurations:
```bash
nx convert-to-nx-workspace  # Convert to latest format
```

---

*Note: NX uses a powerful caching system to speed up builds. Use `nx affected` commands to optimize CI/CD pipelines. Replace placeholders with actual project names. NX supports many frameworks; adjust commands based on your workspace setup.*
