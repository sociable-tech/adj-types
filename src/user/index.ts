export enum UserRole {
  CLIENT = 'client',
  SERVICE_PROVIDER = 'service_provider',
  ADMIN = 'admin',
  ORGANIZATION_MANAGER = 'organization_manager'
}

export const USER_ROLES = [
  UserRole.CLIENT,
  UserRole.SERVICE_PROVIDER,
  UserRole.ADMIN,
  UserRole.ORGANIZATION_MANAGER
];

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role?: UserRole;
  accessToken?: string;
  user_metadata?: Record<string, unknown>;
  email_confirmed_at?: string;
}
