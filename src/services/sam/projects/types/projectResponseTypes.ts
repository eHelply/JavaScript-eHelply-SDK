export interface GetMemberProjectsResponse {
  uuid: string,
  name: string,
  created_at: string,
  current_spend: number,
  max_spend: number,
  is_spend_maxed: boolean,
  status: string,
  archived_at?: string
}
