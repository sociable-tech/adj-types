
export enum UserRole {
  ADMIN = 'ADMIN',
  REVIEWER = 'REVIEWER',
  APPLICANT = 'APPLICANT'
}

export interface User {
  id: string
  email: string
  role: UserRole
}