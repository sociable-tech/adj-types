# Adjudication Types NPM Package

This package provides TypeScript types for the Adjudication project, published to NPM and shared between backend and frontend for reusability and consistency.

## Available Types

Types are organized by domain. Below is an overview of each module and its main types.

---

### **User Types**
Located in: `src/user/index.ts`

- **`User`**: Represents a system user.
  - `id: string` — Unique user identifier.
  - `name: string` — Full name of the user.
  - `email?: string` — Optional email address.
  - `role: UserRole` — User's role in the system.
- **`UserRole`**: Enum/type for user roles (e.g., `'admin'`, `'reviewer'`, `'submitter'`).
- **Potential Uses**: Authentication, authorization, user management.

**Example:**
```ts
import { User, UserRole } from '@adjudication/types';

const reviewer: User = {
  id: 'u123',
  name: 'Alice',
  email: 'alice@example.com',
  role: 'reviewer',
};
```

---

### **Permissions Types**
Located in: `src/permissions/index.ts`

- **`Permission`**: Enum/type for permissions (e.g., `'view_case'`, `'edit_case'`, `'delete_case'`).
- **`PermissionSet`**: Array or object representing a set of permissions assigned to a user or role.
- **Potential Uses**: Access control, feature gating, role-based UI rendering.

**Example:**
```ts
import { Permission, PermissionSet } from '@adjudication/types';

const userPermissions: PermissionSet = ['view_case', 'edit_case'];
```

---

### **Form Validation Types**
Located in: `src/form-validation/index.ts`

- **`ValidationRule`**: Defines a rule for validating a form field.
  - `field: string` — Field name.
  - `required?: boolean` — Whether the field is required.
  - `pattern?: RegExp` — Optional regex pattern.
  - `minLength?: number` — Minimum length for the field.
  - `maxLength?: number` — Maximum length for the field.
- **`ValidationResult`**: Result of validating a form.
  - `valid: boolean` — Indicates if the form is valid.
  - `errors: { [field: string]: string }` — Error messages per field.
- **Potential Uses**: Frontend form validation, backend input checks, error reporting.

**Example:**
```ts
import { ValidationRule, ValidationResult } from '@adjudication/types';

const rules: ValidationRule[] = [
  { field: 'email', required: true, pattern: /^[^@]+@[^@]+\.[^@]+$/ },
];

const result: ValidationResult = {
  valid: false,
  errors: { email: 'Invalid email address' },
};
```

---

### **Questionnaire & Question Types**
Located in: `src/questionnaire/types.ts`, `src/questionnaire/data.ts`, `src/questionnaire/messages.ts`

- **`Questionnaire`**: Represents a questionnaire form.
  - `id: string` — Unique questionnaire identifier.
  - `title: string` — Title of the questionnaire.
  - `questions: Question[]` — Array of questions.
- **`Question`**: Individual question definition.
  - `id: string` — Unique question identifier.
  - `type: 'text' | 'select' | 'radio' | 'checkbox'` — Question type.
  - `label: string` — Question label.
  - `options?: string[]` — Options for select/radio/checkbox types.
  - `required?: boolean` — Whether the question is mandatory.
- **`Answer`**: User’s answer to a question.
  - `questionId: string` — ID of the question answered.
  - `value: string | string[]` — Answer value(s).
- **`QuestionnaireMessage`**: Messaging for questionnaires (e.g., instructions, error messages).
- **Potential Uses**: Surveys, case forms, dynamic question flows, user input collection.

**Example:**
```ts
import { Questionnaire, Question, Answer } from '@adjudication/types';

const question: Question = {
  id: 'q1',
  type: 'text',
  label: 'Describe the issue',
  required: true,
};

const questionnaire: Questionnaire = {
  id: 'form1',
  title: 'Case Intake',
  questions: [question],
};

const answer: Answer = {
  questionId: 'q1',
  value: 'There was a delay in processing.',
};
```

---

## Sample Usage

```bash
npm i @adjudication/types
```

```ts
import {
  User,
  UserRole,
  Permission,
  PermissionSet,
  ValidationRule,
  ValidationResult,
  Questionnaire,
  Question,
  Answer,
} from '@adjudication/types';
```

## How to Add Documentation for New Types

1. Add your new type to the appropriate module in `src/`.
2. Update this README with a description, fields, and usage example.

---

## Contributing

- Keep types atomic and reusable.
- Document new types in this README for clarity.

---
