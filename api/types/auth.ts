export interface ISignupRequest {
  username: string;
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
  designation: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
}
