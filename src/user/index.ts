export enum UserRole {
  CLAIMANT = 'claimant',
  RESPONDENT = 'respondent',
  SERVICE_PROVIDER = 'service_provider',
  ADMIN = 'admin'
}

export const USER_ROLES = [
  UserRole.CLAIMANT,
  UserRole.RESPONDENT,
  UserRole.SERVICE_PROVIDER,
  UserRole.ADMIN
];

export interface User {
  id: string;
  name: string;
  email: string;
  role?: UserRole;
  accessToken?: string;
  user_metadata?: Record<string, unknown>;
  email_confirmed_at?: string;
}

