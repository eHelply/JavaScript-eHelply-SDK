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

export interface Participant {
  uuid: string,
  user_uuid: string | null | undefined,
  participant_meta: Object,
  first_name: string | null | undefined,
  last_name: string | null | undefined,
  email: {
    address: string | null | undefined,
    verified: boolean
  }
  phone_number: string | null | undefined,
  country: string | null | undefined,
  gps_location: {
    lat: string,
    long: string
  }
  picture: string | null | undefined,
  date_created: string,
  date_updated: string
}

export interface GetParticipantResponse extends Participant {}
