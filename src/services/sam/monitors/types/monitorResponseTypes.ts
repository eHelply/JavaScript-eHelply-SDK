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


export interface Kpi {
  uuid: string,
  service_uuid: string,
  kpis: {
    name: string,
    metrics: {
      count: number
    },
    date_end: string,
    date_start: string,
    disclaimers: Array<string>
  }
  created_at: string,
  fetched_at: string
}

export interface GetKpisResponse {
  uuid: string,
  service_uuid: string,
  kpis: Array<Kpi>,
  created_at: string,
  fetched_at: string
}
