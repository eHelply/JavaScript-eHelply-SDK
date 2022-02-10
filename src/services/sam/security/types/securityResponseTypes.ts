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
export interface PostCreateEncryptionKeyResponse {
  uuid: string,
  key: string, // in the db this stored as large binary
  category: string,
  created_at: string,
  retrieved_at: string,
  deleted_at: string
}

export interface GetEncryptionKeyResponse {
  key: string,
  category: string,
  created_at: string,
  retrieved_at: string
}