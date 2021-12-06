export interface ProjectResponse {
  uuid: string,
  name: string,
  created_at: string,
  current_spend: number,
  max_spend: number,
  is_spend_maxed: boolean,
  status: string,
  archived_at?: string
}

export interface GetMemberProjectsResponse extends ProjectResponse{}

export interface CreateProjectResponse extends  ProjectResponse {}

export interface GetProjectResponse extends ProjectResponse {}

export interface UpdateProjectResponse extends ProjectResponse {
  group_m_p: string,
  group_p_c: string
}

export interface GetProjectMembersResponse {
  uuid: string,
  project_uuid: string,
  entity_uuid: string,
  role: string,
  created_at: string
}

export interface ProjectKey {
  name: string,
  summary: string,
}

export interface CreateProjectKeyResponse extends ProjectKey {}

export interface RemoveProjectKeyResponse {
  entity_identifier: string,
  key_uuid: string
}

export interface  PermissionForKey {
  key: string,
  node: {
    uuid: string,
    name: string,
    node: string,
    type_uuid: string,
    summary: string,
    created_at: string
  }
}

export interface AddPermissionToKeyResponse extends PermissionForKey {}

export interface RemovePermissionFromKeyResponse extends PermissionForKey {}

export interface GetPermissionFromKeyResponse {
  uuid: string,
  name: string,
  node: string,
  type_uuid: string,
  summary: string,
  created_at: string
}
