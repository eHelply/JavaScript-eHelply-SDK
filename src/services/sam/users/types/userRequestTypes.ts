export interface SignupRequest {
  username: string,
  password: string,
  email: string,
  first_name: string,
  last_name: string,
  phone_number: string,
  country: string,
  verified_legal_terms: boolean,
}

export interface AuthCodeRequest {
  grant_type: string,
  client_id: string,
  code: string,
  redirect_uri: string
}

export interface LoginRequest {
  username: string,
  password: string
}

export interface ValidateEmailRequest {
  value: string,
  type: string
}

export interface ResetPasswordRequest {
  email: string
}

export interface ResetPasswordConfirmationRequest {
  email: string,
  confirmation_code: string,
  password: string
}
