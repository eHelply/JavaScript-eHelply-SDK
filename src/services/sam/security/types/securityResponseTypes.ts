export interface SecurityKey {
  uuid: string,
  access: string,
  name: string,
  summary: string,
  created_at: string,
  last_used_at: string,
}

export interface GetSecurityKeyResponse extends SecurityKey {}
export interface PostCreateSecurityKeyResponse {
  uuid: string,
  access: string,
  secret: string
}
export interface DeleteSecurityKeyResponse {
  message: string
}
