export interface SignUpRequest {
  user_signup_data: {
    username: string,
    password: string,
    email: string,
    first_name: string,
    last_name: string,
    phone_number: string,
    country: string,
    verified_legal_terms: boolean,
  }
}

export interface AuthCodeRequest {
  grant_type: string,
  client_id: string,
  code: string,
  redirect_uri: string
}
export interface LoginRequest {
  user_login_data: {
    username: string,
    password: string
  }
}
