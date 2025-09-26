# TypeScript with React - Learning Guide

## Table of Contents

1. [Getting Started with TypeScript](#getting-started-with-typescript)
2. [Component Props](#component-props)
3. [Event Handling](#event-handling)
4. [Hooks with TypeScript](#hooks-with-typescript)
5. [Common Patterns](#common-patterns)
6. [Best Practices](#best-practices)
7. [Gradual Learning Approach](#gradual-learning-approach)

---

## Getting Started with TypeScript

### What is TypeScript?

TypeScript is JavaScript with type annotations. It helps catch errors during development and makes your code more predictable and easier to refactor.

### Key Benefits in React:

- **Catch errors early** - Before runtime
- **Better IntelliSense** - Auto-completion and suggestions
- **Refactoring safety** - Rename variables/functions with confidence
- **Self-documenting code** - Types serve as documentation

---

## Component Props

### Basic Props Interface

```tsx
// Define the shape of your props
interface Props {
  name: string;
  age: number;
  isActive: boolean;
}

// Use the interface in your component
const UserCard = ({ name, age, isActive }: Props) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Status: {isActive ? "Active" : "Inactive"}</p>
    </div>
  );
};

// Usage:
<UserCard name='John' age={25} isActive={true} />;
```

### Optional Props

```tsx
interface Props {
  title: string;
  subtitle?: string; // Optional with ?
  count?: number;
}

const Header = ({ title, subtitle = "Default subtitle", count }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
      {count !== undefined && <span>Count: {count}</span>}
    </div>
  );
};
```

### Children Props

```tsx
import { ReactNode } from "react";

interface Props {
  children: ReactNode; // Can be any valid React children
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return <div className={className}>{children}</div>;
};
```

### Advanced Props Patterns

```tsx
// Union types for limited options
interface ButtonProps {
  variant: "primary" | "secondary" | "danger";
  size: "small" | "medium" | "large";
  onClick: () => void;
  children: ReactNode;
}

// Arrays and objects
interface UserListProps {
  users: Array<{
    id: number;
    name: string;
    email: string;
  }>;
  onUserSelect: (userId: number) => void;
}

// Generic components
interface ListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
}

const List = <T,>({ items, renderItem }: ListProps<T>) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{renderItem(item, index)}</li>
    ))}
  </ul>
);
```

---

## Event Handling

### Common Event Types

```tsx
import { ChangeEvent, FormEvent, MouseEvent } from "react";

const EventExample = () => {
  // Input change handler
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  // Form submission
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission
  };

  // Button click
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked");
  };

  // Generic click handler that can work with any element
  const handleGenericClick = (event: MouseEvent<HTMLElement>) => {
    console.log("Element clicked");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleInputChange} />
      <button onClick={handleClick}>Submit</button>
    </form>
  );
};
```

### Custom Event Handlers

```tsx
interface Props {
  onSave: (data: { name: string; email: string }) => void;
  onDelete: (id: number) => void;
}

const UserForm = ({ onSave, onDelete }: Props) => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSave(formData); // TypeScript ensures correct data shape
  };

  return <form onSubmit={handleSubmit}>{/* form fields */}</form>;
};
```

---

## Hooks with TypeScript

### useState

```tsx
import { useState } from "react";

const StateExamples = () => {
  // TypeScript can infer simple types
  const [count, setCount] = useState(0); // inferred as number
  const [name, setName] = useState(""); // inferred as string

  // Explicit typing for complex types
  const [user, setUser] = useState<User | null>(null);

  // Array state
  const [items, setItems] = useState<string[]>([]);

  // Object state
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    age: number;
  }>({
    name: "",
    email: "",
    age: 0,
  });

  return <div>/* Component JSX */</div>;
};
```

### useEffect

```tsx
import { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const UserProfile = ({ userId }: { userId: number }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(\`/api/users/\${userId}\`);
        if (!response.ok) {
          throw new Error('Failed to fetch user');
        }
        const userData: User = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};
```

### Custom Hooks

```tsx
import { useState, useEffect } from 'react';

// Custom hook with TypeScript
function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(\`Error loading localStorage key "\${key}":, error\`);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(\`Error setting localStorage key "\${key}":, error\`);
    }
  };

  return [storedValue, setValue] as const;
}

// Usage:
const Settings = () => {
  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>('theme', 'light');

  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Current theme: {theme}
    </button>
  );
};
```

---

## Common Patterns

### Type Definitions File

Create `/src/types/index.ts` for shared types:

```tsx
// /src/types/index.ts
export interface User {
  id: number;
  name: string;
  email: string;
  createdAt: string;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export type Theme = "light" | "dark";

export type Status = "idle" | "loading" | "success" | "error";
```

### Utility Types

```tsx
// Pick specific properties
type UserSummary = Pick<User, "id" | "name">;

// Make all properties optional
type PartialUser = Partial<User>;

// Make all properties required
type RequiredUser = Required<User>;

// Exclude certain properties
type UserWithoutId = Omit<User, "id">;

// Create new type based on existing
type CreateUserRequest = Omit<User, "id" | "createdAt">;
```

### Component with Refs

```tsx
import { useRef, useEffect } from "react";

const FocusInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // TypeScript knows this could be null
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return <input ref={inputRef} placeholder='This will be focused' />;
};
```

---

## Best Practices

### 1. Start Simple, Add Types Gradually

```tsx
// Start with basic inference
const [count, setCount] = useState(0);

// Add explicit types when needed
const [user, setUser] = useState<User | null>(null);
```

### 2. Use Interfaces for Props

```tsx
// Good: Clear interface
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

// Avoid: Inline types for complex props
const Button = ({
  label,
  onClick,
  disabled,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) => {
  // component logic
};
```

### 3. Handle Loading and Error States

```tsx
interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

const useAsyncData = <T,>(fetchFn: () => Promise<T>) => {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  // Implementation...

  return state;
};
```

### 4. Use Type Guards

```tsx
// Type guard function
const isUser = (data: unknown): data is User => {
  return (
    typeof data === "object" &&
    data !== null &&
    "id" in data &&
    "name" in data &&
    "email" in data
  );
};

// Usage in component
const processApiResponse = (response: unknown) => {
  if (isUser(response)) {
    // TypeScript now knows response is User type
    console.log(response.name);
  }
};
```

---

## Gradual Learning Approach

### Phase 1: Basic Types (Week 1-2)

- Start with simple prop interfaces
- Use type inference where possible
- Learn basic event handlers

### Phase 2: Hooks and State (Week 3-4)

- Add types to useState
- Practice with useEffect dependencies
- Create simple custom hooks

### Phase 3: Advanced Patterns (Week 5-6)

- Utility types (Pick, Omit, Partial)
- Generic components
- Complex state management

### Phase 4: Production Ready (Week 7+)

- Strict TypeScript configuration
- Comprehensive error handling
- Type-safe API calls

---

## Common Errors and Solutions

### Error: "Property does not exist on type"

```tsx
// Problem: TypeScript doesn't know the shape
const user = response.data;
console.log(user.name); // Error!

// Solution: Define the type
const user: User = response.data;
console.log(user.name); // Works!
```

### Error: "Object is possibly null"

```tsx
// Problem: TypeScript knows it could be null
const user = getUser();
user.name; // Error!

// Solution: Check before using
if (user) {
  user.name; // Works!
}

// Or use optional chaining
user?.name; // Works!
```

### Error: "Element implicitly has an 'any' type"

```tsx
// Problem: No type annotation
const [data, setData] = useState();

// Solution: Add type
const [data, setData] = useState<User[]>([]);
```

---

## Resources for Continued Learning

1. **TypeScript Handbook**: https://www.typescriptlang.org/docs/
2. **React TypeScript Cheatsheet**: https://react-typescript-cheatsheet.netlify.app/
3. **TypeScript Playground**: https://www.typescriptlang.org/play
4. **VS Code Extensions**:
   - TypeScript Importer
   - Error Lens
   - TypeScript Hero

---

## Quick Reference

### Essential Types

```tsx
// Primitives
string, number, boolean, null, undefined

// Arrays
string[], Array<string>, (string | number)[]

// Objects
{ name: string; age: number }

// Functions
() => void, (x: number) => string

// React specific
ReactNode, JSX.Element, ComponentProps<'button'>

// Utility
Partial<T>, Required<T>, Pick<T, K>, Omit<T, K>
```

Remember: TypeScript is there to help you, not hinder you. Start simple and gradually add more type safety as you become comfortable with the basics!
