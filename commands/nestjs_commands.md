# NestJS Commands Guide

This comprehensive guide covers essential commands for working with NestJS applications, including installation, project creation, running, and code generation.

## Installation

### 1. Install NestJS CLI Globally

Install the NestJS CLI to create and manage projects:

```bash
npm install -g @nestjs/cli
```

### 2. Check NestJS Version

Verify the installed version of NestJS CLI:

```bash
nest --version
```

## Project Creation

### 3. Create a New Project

Generate a new NestJS project:

```bash
nest new <project-name>
```

### 4. Create a New App in Monorepo

Add a new application to an existing monorepo:

```bash
nest generate app <app-name>
```

### 5. Create a New Library

Generate a new library within the workspace:

```bash
nest generate library <lib-name>
```

## Running the Application

### 6. Start in Production Mode

Run the application in production mode:

```bash
npm run start
nest start
```

### 7. Start in Development Mode

Run with hot-reload for development:

```bash
npm run start:dev
nest start --watch
```

### 8. Start Specific App in Monorepo

Run a specific application in a monorepo setup:

```bash
nest start <app-name> --watch
```

## Code Generation

### 9. Generate a Module

Create a new module:

```bash
nest generate module <module-name>
nest g mo <module-name>
```

### 10. Generate a Controller

Create a new controller:

```bash
nest generate controller <controller-name>
nest g co <controller-name>
```

### 11. Generate a Service

Create a new service:

```bash
nest generate service <service-name>
nest g s <service-name>
```

### 12. Generate a Provider

Create a custom provider:

```bash
nest generate provider <provider-name>
nest g pr <provider-name>
```

### 13. Generate a Guard

Create an authentication guard:

```bash
nest generate guard <guard-name>
nest g gu <guard-name>
```

### 14. Generate an Interceptor

Create a request/response interceptor:

```bash
nest generate interceptor <interceptor-name>
nest g in <interceptor-name>
```

### 15. Generate a Pipe

Create a validation pipe:

```bash
nest generate pipe <pipe-name>
nest g pi <pipe-name>
```

### 16. Generate a Filter

Create an exception filter:

```bash
nest generate filter <filter-name>
nest g fi <filter-name>
```

### 17. Generate a Decorator

Create a custom decorator:

```bash
nest generate decorator <decorator-name>
nest g d <decorator-name>
```

### 18. Generate a Gateway (WebSocket)

Create a WebSocket gateway:

```bash
nest generate gateway <gateway-name>
nest g ga <gateway-name>
```

### 19. Generate Middleware

Create custom middleware:

```bash
nest generate middleware <middleware-name>
nest g mi <middleware-name>
```

### 20. Generate Class

Create a generic class:

```bash
nest generate class <class-name>
nest g cl <class-name>
```

## Building

### 21. Build the Application

Compile the application for production:

```bash
npm run build
nest build
```

### 22. Build Specific App

Build a specific application in monorepo:

```bash
nest build <app-name>
```

## Testing

### 23. Run Unit Tests

Execute unit tests:

```bash
npm run test
```

### 24. Run E2E Tests

Run end-to-end tests:

```bash
npm run test:e2e
```

### 25. Run Tests in Watch Mode

Run tests with auto-reload:

```bash
npm run test:watch
```

### 26. Run Tests with Coverage

Generate test coverage report:

```bash
npm run test:cov
```

## Other Commands

### 27. Show Help

Display available commands and options:

```bash
nest --help
nest generate --help
```

### 28. Update CLI

Update the NestJS CLI to the latest version:

```bash
npm update -g @nestjs/cli
```

### 29. Info

Show project information:

```bash
nest info
```

### 30. Add Package

Add a package to the project:

```bash
nest add <package-name>
```

---

*Note: Replace placeholders like `<project-name>` with actual names. Use short aliases like `nest g` for `nest generate`. For monorepo setups, ensure you're in the correct directory or specify the project path.*
