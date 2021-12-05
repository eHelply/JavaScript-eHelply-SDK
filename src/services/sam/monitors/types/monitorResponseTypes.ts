export interface GetMonitorServicesResponse {
  name: string,
  key: string,
  version: string,
  summary: string,
  authors: Array<string>,
  author_emails: Array<string>,
  uuid: string,
  hidden_stages: Array<string>,
  created_at: string,
  updated_at: string
}
