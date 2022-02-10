export interface PostSecurityKeyVerifyRequest {
  access: string,
  secret: string
}

export interface PostCreateSecurityKeyRequest {
  name: string,
  summary: string
}
