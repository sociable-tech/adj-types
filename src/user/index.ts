
export enum UserRole {
  ADMIN = 'ADMIN',
  REVIEWER = 'REVIEWER',
  APPLICANT = 'APPLICANT'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role?: string;
  accessToken?: string;
}