Development Guidelines

Code Style and Structure

- Write concise, best practises code with accurate examples. Follow Code Craftmanship patterns
- Follow the NextJS framework as this is a NextJS project.
- Favor object-oriented programming (OOP) and declarative programming patterns.
- Prefer iteration and modularization over code duplication.
- Use descriptive variable names with auxiliary verbs (e.g., isLoading, hasError).
- Prefer one export per file.
- Ensure a clear separation between UI, state management, and business logic to maintain a clean architecture.
- Follow NextJS official documentation for setting up and configuring your projects: https://nextjs.org/.
- Use lowercase with dashes for directories (e.g., components/auth-wizard).
- Always use named exports for consistency and maintainability.
- Use npm as the package manager and lock versions using package-lock.json for consistency.
- Use ?? instead of || for nullish coalescing.
- Use conventional commit messages (feat:, fix:, chore:, etc.).
- Ensure all code changes include relevant test cases.
- Use declarative JSX.
- Use BiomeJS with project-specific settings enforced via Lefthook.

TypeScript Usage

- Use TypeScript for all code.
- Prefer interfaces over types, except for utility types or mapped types.
- Avoid enums due to runtime overhead; prefer object maps or union types instead.
- Use strict mode in TypeScript for better type safety.

UI and Styling

- Use Tailwind 4 for styling.
- Favor Tailwind utility classes over inline styles or unnecessary CSS files.
- Ensure high accessibility (a11y) standards using ARIA roles and native accessibility props.
- Avoid hardcoding padding or margins. Use Tailwind theme configuration for spacing.
- Implement proper keyboard handling.
- Use CSS variables for theming when necessary.

Performance Optimization

- Minimize the use of useState and useEffect.
- Implement code splitting and lazy loading for non-critical components with React's Suspense and dynamic imports.
- Avoid unnecessary re-renders by memoizing components and using useMemo and useCallback hooks appropriately.
- Minimize unnecessary API requests by leveraging caching and revalidation strategies.

Navigation

- Use Next router for routing and navigation.
- Use nested routing for better component structure and progressive enhancement.
- Use custom Link instead of importing from next/link.

State Management

- Minimize use of client-side state and favor server-side state where possible.
- Use React Context sparingly to avoid unnecessary re-renders.

Error Handling and Validation

- Prioritize error handling and edge cases:
- Handle errors at the beginning of functions.
- Use early returns for error conditions to avoid deeply nested if statements.
- Avoid unnecessary else statements; use the if-return pattern instead.
- Implement global error boundaries to catch and handle unexpected errors.
- Use domain errors to handle errors in the domain layer.
- Use NextJS's ErrorBoundary components for error handling at the route level.

Testing

- Write unit tests using Vitest.
- Implement integration tests for critical user flows using Playwright.
- Write test cases for both success and failure scenarios.

Security

- Sanitize user inputs to prevent XSS attacks.
- Ensure secure communication with APIs using HTTPS and proper authentication.
- Implement Content Security Policy (CSP) headers to prevent cross-site scripting (XSS) attacks.
- Use secure, HttpOnly, and same-site cookies for session management.

Internationalization (i18n)

- Use NextIntl's internationalization and localization.
- Support multiple languages.
- Ensure text scaling and font adjustments for accessibility.
- Use URL-based language detection for better SEO and user experience.
- Ensure dynamic content is translatable, including error messages and placeholders.
- Update translation files when new strings are added.

React Components

- Use a variable (const) for the components.
- Use FC to type the variable.
- If a component has children, use PropsWithChildren to type the component.
- Props should be typed within the component's type definition.

API Documentation

- Use TypeScript doc comments for complex functions and APIs.
- Keep API documentation up-to-date when modifying code.
