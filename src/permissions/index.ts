import { UserRole, USER_ROLES } from "../user/index.ts";

export enum Permission {
  // Claims permissions
  CLAIMS_READ = 'claims:read',
  CLAIMS_CREATE = 'claims:create',
  CLAIMS_WRITE = 'claims:write',
  CLAIMS_UPDATE = 'claims:update',
  CLAIMS_DELETE = 'claims:delete',
  CLAIMS_APPROVE = 'claims:approve',
  CLAIMS_REJECT = 'claims:reject',
  CLAIMS_COMPLETE = 'claims:complete',

  // Documents permissions
  DOCUMENTS_READ = 'documents:read',
  DOCUMENTS_UPLOAD = 'documents:upload',
  DOCUMENTS_REVIEW = 'documents:review',
  DOCUMENTS_WRITE = 'documents:write',     

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
  ADMIN_VIEW_ANALYTICS = 'admin:view_analytics',
  ADMIN_BAN_USERS = 'admin:ban_users',
  ADMIN_ALL = 'admin:all',

  // Additional permissions
  MARKETPLACE_ACCESS = 'marketplace:access',
  PRACTICE_MANAGE = 'practice:manage',   
}

export const PERMISSIONS = [
  Permission.CLAIMS_READ,
  Permission.CLAIMS_CREATE,
  Permission.CLAIMS_WRITE,             
  Permission.CLAIMS_UPDATE,
  Permission.CLAIMS_DELETE,
  Permission.CLAIMS_APPROVE,
  Permission.CLAIMS_REJECT,
  Permission.CLAIMS_COMPLETE,
  Permission.DOCUMENTS_READ,
  Permission.DOCUMENTS_UPLOAD,
  Permission.DOCUMENTS_REVIEW,
  Permission.DOCUMENTS_WRITE,         
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
  Permission.ADMIN_VIEW_ANALYTICS,
  Permission.ADMIN_BAN_USERS,
  Permission.ADMIN_ALL,                
  Permission.MARKETPLACE_ACCESS,       
  Permission.PRACTICE_MANAGE,          
];

// ROLES constant for compatibility
export const ROLES = {
  CLAIMANT: UserRole.CLAIMANT,
  RESPONDENT: UserRole.RESPONDENT,
  SERVICE_PROVIDER: UserRole.SERVICE_PROVIDER,
  ADMIN: UserRole.ADMIN,
} as const;

// Use PERMISSIONS array instead of hardcoded list
export const getAllPermissions = (): string[] => PERMISSIONS;

// Use Object.values for consistency
export const getAllRoles = (): string[] => USER_ROLES;

export const ROLE_PERMISSIONS_MAP: Record<UserRole, Permission[]> = {
  [UserRole.CLAIMANT]: [
    Permission.CLAIMS_READ,
    Permission.CLAIMS_CREATE,
    Permission.CLAIMS_WRITE,            
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
    Permission.MARKETPLACE_ACCESS,       
    Permission.PRACTICE_MANAGE,    
    Permission.SERVICES_READ,
    Permission.SERVICES_UPDATE,
    Permission.PAYMENTS_READ,
    Permission.PAYMENTS_REQUEST,
    Permission.PROFILE_READ,
    Permission.PROFILE_UPDATE
  ],
  [UserRole.ADMIN]: [
    ...PERMISSIONS,
  ]
};

export function getPermissionsForRole(role: UserRole): Permission[] {
  return ROLE_PERMISSIONS_MAP[role] || ROLE_PERMISSIONS_MAP[UserRole.CLAIMANT];
}

//Additional utility functions for compatibility
export const getRolesList = (): Array<{ key: string; value: string; label: string }> => [
  { key: 'CLAIMANT', value: UserRole.CLAIMANT, label: 'Claimant' },
  { key: 'RESPONDENT', value: UserRole.RESPONDENT, label: 'Respondent' },
  { key: 'SERVICE_PROVIDER', value: UserRole.SERVICE_PROVIDER, label: 'Service Provider' },
  { key: 'ADMIN', value: UserRole.ADMIN, label: 'Administrator' },
];

export const getPermissionsList = (): Array<{ key: string; value: string; label: string; category: string }> => [
  // Claims
  { key: 'CLAIMS_READ', value: Permission.CLAIMS_READ, label: 'Read Claims', category: 'Claims' },
  { key: 'CLAIMS_CREATE', value: Permission.CLAIMS_CREATE, label: 'Create Claims', category: 'Claims' },
  { key: 'CLAIMS_WRITE', value: Permission.CLAIMS_WRITE, label: 'Write Claims', category: 'Claims' },
  { key: 'CLAIMS_UPDATE', value: Permission.CLAIMS_UPDATE, label: 'Update Claims', category: 'Claims' },
  { key: 'CLAIMS_DELETE', value: Permission.CLAIMS_DELETE, label: 'Delete Claims', category: 'Claims' },
  { key: 'CLAIMS_APPROVE', value: Permission.CLAIMS_APPROVE, label: 'Approve Claims', category: 'Claims' },
  { key: 'CLAIMS_REJECT', value: Permission.CLAIMS_REJECT, label: 'Reject Claims', category: 'Claims' },
  { key: 'CLAIMS_COMPLETE', value: Permission.CLAIMS_COMPLETE, label: 'Complete Claims', category: 'Claims' },

  // Documents
  { key: 'DOCUMENTS_READ', value: Permission.DOCUMENTS_READ, label: 'Read Documents', category: 'Documents' },
  { key: 'DOCUMENTS_UPLOAD', value: Permission.DOCUMENTS_UPLOAD, label: 'Upload Documents', category: 'Documents' },
  { key: 'DOCUMENTS_REVIEW', value: Permission.DOCUMENTS_REVIEW, label: 'Review Documents', category: 'Documents' },
  { key: 'DOCUMENTS_WRITE', value: Permission.DOCUMENTS_WRITE, label: 'Write Documents', category: 'Documents' },

  // Payments
  { key: 'PAYMENTS_READ', value: Permission.PAYMENTS_READ, label: 'Read Payments', category: 'Payments' },
  { key: 'PAYMENTS_PROCESS', value: Permission.PAYMENTS_PROCESS, label: 'Process Payments', category: 'Payments' },
  { key: 'PAYMENTS_REQUEST', value: Permission.PAYMENTS_REQUEST, label: 'Request Payments', category: 'Payments' },

  // Services
  { key: 'SERVICES_READ', value: Permission.SERVICES_READ, label: 'Read Services', category: 'Services' },
  { key: 'SERVICES_UPDATE', value: Permission.SERVICES_UPDATE, label: 'Update Services', category: 'Services' },

  // Reports
  { key: 'REPORTS_READ', value: Permission.REPORTS_READ, label: 'Read Reports', category: 'Reports' },

  // Profile
  { key: 'PROFILE_READ', value: Permission.PROFILE_READ, label: 'Read Profile', category: 'Profile' },
  { key: 'PROFILE_UPDATE', value: Permission.PROFILE_UPDATE, label: 'Update Profile', category: 'Profile' },

  // Admin
  { key: 'ADMIN_MANAGE_USERS', value: Permission.ADMIN_MANAGE_USERS, label: 'Manage Users', category: 'Admin' },
  { key: 'ADMIN_MANAGE_ROLES', value: Permission.ADMIN_MANAGE_ROLES, label: 'Manage Roles', category: 'Admin' },
  { key: 'ADMIN_VIEW_ANALYTICS', value: Permission.ADMIN_VIEW_ANALYTICS, label: 'View Analytics', category: 'Admin' },
  { key: 'ADMIN_BAN_USERS', value: Permission.ADMIN_BAN_USERS, label: 'Ban Users', category: 'Admin' },
  { key: 'ADMIN_ALL', value: Permission.ADMIN_ALL, label: 'All Admin Access', category: 'Admin' },

  // Additional
  { key: 'MARKETPLACE_ACCESS', value: Permission.MARKETPLACE_ACCESS, label: 'Access Marketplace', category: 'Marketplace' },
  { key: 'PRACTICE_MANAGE', value: Permission.PRACTICE_MANAGE, label: 'Manage Practice', category: 'Practice' },
];