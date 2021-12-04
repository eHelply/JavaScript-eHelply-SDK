export interface RefreshTokensResponse {
  AccessToken: string,
  ExpiresIn: number,
  TokenType: string,
  IdToken: string,
}

export interface LoginResponse {
  AccessToken: string,
  ExpiresIn: number,
  TokenType: string
  IdToken: string,
  RefreshToken: string
}
