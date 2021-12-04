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

export interface


export interface RefreshTokensResponse {
  AccessToken: string,
  ExpiresIn: number,
  TokenType: string,
  IdToken: string,
}
