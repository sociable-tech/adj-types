# Adjudication Types NPM Package

The project refers to the types of Adjudication package that will be published to NPM and shared between backend and frontend for reusablity and ensuring consistency.

## Available Types

Todo: need to add a way to include docs for Types published to npm @adjudication/types

## Sample Usage

```bash
npm i @adjudication/types
```

```ts
import { User, UserRole} from '@adjudication/types';

type UserType = User;
type UserRoleType = UserRole;

```