export interface createUserRequest {
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

export interface authCodeRequest {
  grant_type: string,
  client_id: string,
  code: string,
  redirect_uri: string
}
