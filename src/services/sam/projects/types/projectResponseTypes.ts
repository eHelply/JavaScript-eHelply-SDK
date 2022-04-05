export interface ProjectResponse {
  uuid: string,
  name: string,
  created_at: string,
  current_spend: number,
  max_spend: number,
  status: string,
  archived_at?: string
}

export interface GetProjectMembersResponse {
  uuid: string,
  project_uuid: string,
  entity_uuid: string,
  role: string,
  created_at: string
}

export interface CreateProjectKeyResponse {
  access: string,
  secret: string,
  status_code: number,
  uuid: string
}

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

export interface GetPermissionsForMember {
  uuid: string,
  name: string,
  node: string,
  type_uuid: string,
  summary: string,
  created_at: string,
  roles: []
}

export interface GetPermissionTypeResponse {
  uuid: string,
  name: string,
  slug: string,
  summary: string,
  created_at: string
}

export interface GetProjectKeysResponse {
  keys: Array<string>
}

export interface GetProjectUsageResponse {
  uuid: string,
  project_uuid: string,
  usage_key: string,
  year: number
  month: number,
  quantity: number, // Quantity formats represented by a x10000000 integer. Precision to the millonth
  estimated_cost: number,  // Dollar formats represented by a x10000000 integer. Precision to the millonth
  updated_at: string
}


interface Page<T>{
  items: Array<T>,
  pagination: {
    current_page: number,
    page_size: number,
    total_items: number,
    total_pages: number,
    has_previous_page: boolean,
    has_next_page: boolean,
    previous_page: null | string
    next_page: null | string
  }
}


interface ProjectsUsageTypeUnitPrice {
  min_quantity: number,  // Quantity formats represented by a x10000000 integer. Precision to the millonth
  max_quantity: number,  // Quantity formats represented by a x10000000 integer. Precision to the millonth
  unit_price: number,  // Dollar formats represented by a x10000000 integer. Precision to the millonth
}

interface GetSearchUsageTypesResponse {
  key: string,
  name: string,
  summary: string,
  category: string
  service: string,
  unit_prices: Array<ProjectsUsageTypeUnitPrice>
}

export interface GetPaginatedSearchUsageTypesResponse extends Page<GetSearchUsageTypesResponse> {}


