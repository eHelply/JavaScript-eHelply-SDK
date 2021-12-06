export interface GetKeyResponse {
  uuid: string,
  access: string,
  name: string,
  summary: string,
  created_at: string,
  last_used_at: string
}

export interface GetAccessibilityResponse{
  status_code: string,
  content: {
    message: string
  }
}
