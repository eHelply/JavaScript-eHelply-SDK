export interface Flag {

}

export interface Participant {
  uuid: string
}

export interface LoginResponse {
  AccessToken: string,
  ExpiresIn: number,
  TokenType: string
  IdToken: string,
  RefreshToken: string
}

export interface SignUpResponse {
  participant_uuid: string
}

export interface CreateUserResponse {
  first_name: string,
  last_name: string,
  email: {
    address: string,
    verified: boolean,
  }
  picture: string,
  data_created: string,
  data_updated: string,
  date_deleted: string,
  last_login: string,
  uuid: string,
  participants: [Participant],
  flags: [Flag]
}

export interface RefreshTokensResponse {
  AccessToken: string,
  ExpiresIn: number,
  TokenType: string,
  IdToken: string,
}

export interface ResetPasswordResponse {

}

export interface ResetPasswordConfirmationResponse {
  ClientId: string,
  UserName: string,
  ConfirmationCode: string,
  password: string
}

export interface ValidateEmailResponse{
  ClientId: string,
  Username: string,
  ConfirmationCode: string
}
