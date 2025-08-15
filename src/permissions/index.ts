import { UserRole } from "../user";

export enum Permission {
  // Claims permissions
  CLAIMS_READ = 'claims:read',
  CLAIMS_CREATE = 'claims:create',
  CLAIMS_UPDATE = 'claims:update',
  CLAIMS_DELETE = 'claims:delete',
  CLAIMS_APPROVE = 'claims:approve',
  CLAIMS_REJECT = 'claims:reject',
  CLAIMS_COMPLETE = 'claims:complete',

  // Documents permissions
  DOCUMENTS_READ = 'documents:read',
  DOCUMENTS_UPLOAD = 'documents:upload',
  DOCUMENTS_REVIEW = 'documents:review',

  // Payments permissions
  PAYMENTS_READ = 'payments:read',
  PAYMENTS_PROCESS = 'payments:process',
  PAYMENTS_REQUEST = 'payments:request',

  // Services permissions
  SERVICES_READ = 'services:read',
  SERVICES_UPDATE = 'services:update',

  // Reports permissions
  REPORTS_READ = 'reports:read',

  // Profile permissions
  PROFILE_READ = 'profile:read',
  PROFILE_UPDATE = 'profile:update',

  // Admin permissions
  ADMIN_MANAGE_USERS = 'admin:manage_users',
  ADMIN_MANAGE_ROLES = 'admin:manage_roles',
  ADMIN_VIEW_ANALYTICS = 'admin:view_analytics'
}

export const PERMISSIONS = [
  Permission.CLAIMS_READ,
  Permission.CLAIMS_CREATE,
  Permission.CLAIMS_UPDATE,
  Permission.CLAIMS_DELETE,
  Permission.CLAIMS_APPROVE,
  Permission.CLAIMS_REJECT,
  Permission.CLAIMS_COMPLETE,
  Permission.DOCUMENTS_READ,
  Permission.DOCUMENTS_UPLOAD,
  Permission.DOCUMENTS_REVIEW,
  Permission.PAYMENTS_READ,
  Permission.PAYMENTS_PROCESS,
  Permission.PAYMENTS_REQUEST,
  Permission.SERVICES_READ,
  Permission.SERVICES_UPDATE,
  Permission.REPORTS_READ,
  Permission.PROFILE_READ,
  Permission.PROFILE_UPDATE,
  Permission.ADMIN_MANAGE_USERS,
  Permission.ADMIN_MANAGE_ROLES,
  Permission.ADMIN_VIEW_ANALYTICS
];

export const ROLE_PERMISSIONS_MAP: Record<UserRole, Permission[]> = {
  [UserRole.CLAIMANT]: [
    Permission.CLAIMS_READ,
    Permission.CLAIMS_CREATE,
    Permission.CLAIMS_UPDATE,
    Permission.CLAIMS_DELETE,
    Permission.DOCUMENTS_READ,
    Permission.DOCUMENTS_UPLOAD,
    Permission.PAYMENTS_READ,
    Permission.PROFILE_READ,
    Permission.PROFILE_UPDATE
  ],
  [UserRole.RESPONDENT]: [
    Permission.CLAIMS_READ,
    Permission.CLAIMS_UPDATE,
    Permission.CLAIMS_APPROVE,
    Permission.CLAIMS_REJECT,
    Permission.DOCUMENTS_READ,
    Permission.DOCUMENTS_REVIEW,
    Permission.PAYMENTS_READ,
    Permission.PAYMENTS_PROCESS,
    Permission.REPORTS_READ,
    Permission.PROFILE_READ,
    Permission.PROFILE_UPDATE
  ],
  [UserRole.SERVICE_PROVIDER]: [
    Permission.CLAIMS_READ,
    Permission.CLAIMS_UPDATE,
    Permission.CLAIMS_COMPLETE,
    Permission.DOCUMENTS_READ,
    Permission.DOCUMENTS_UPLOAD,
    Permission.SERVICES_READ,
    Permission.SERVICES_UPDATE,
    Permission.PAYMENTS_READ,
    Permission.PAYMENTS_REQUEST,
    Permission.PROFILE_READ,
    Permission.PROFILE_UPDATE
  ],
  [UserRole.ADMIN]: [
    Permission.CLAIMS_READ,
    Permission.CLAIMS_CREATE,
    Permission.CLAIMS_UPDATE,
    Permission.CLAIMS_DELETE,
    Permission.CLAIMS_APPROVE,
    Permission.CLAIMS_REJECT,
    Permission.DOCUMENTS_READ,
    Permission.DOCUMENTS_UPLOAD,
    Permission.DOCUMENTS_REVIEW,
    Permission.PAYMENTS_READ,
    Permission.PAYMENTS_PROCESS,
    Permission.PAYMENTS_REQUEST,
    Permission.SERVICES_READ,
    Permission.SERVICES_UPDATE,
    Permission.REPORTS_READ,
    Permission.PROFILE_READ,
    Permission.PROFILE_UPDATE,
    Permission.ADMIN_MANAGE_USERS,
    Permission.ADMIN_MANAGE_ROLES,
    Permission.ADMIN_VIEW_ANALYTICS
  ]
};

export function getPermissionsForRole(role: UserRole): Permission[] {
  return ROLE_PERMISSIONS_MAP[role] || ROLE_PERMISSIONS_MAP[UserRole.CLAIMANT];
}