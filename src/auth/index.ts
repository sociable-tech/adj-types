import { User } from "../user";
  
  export interface AuthResponse {
    data: User;
    message?: string;
  }
  
  export interface LoginRequest {
    email: string;
    password: string;
  }
  
  export interface SignupRequest {
    email: string;
    password: string;
    name: string;
    role: string;
  }
  
  export interface ResetPasswordRequest {
    email: string;
    code: string;
    newPassword: string;
  }
  
  export interface ConfirmSignupRequest {
    email: string;
    code: string;
  }