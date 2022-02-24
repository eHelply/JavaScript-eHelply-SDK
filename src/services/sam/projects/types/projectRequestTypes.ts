
export interface ProjectSchema {
 name: string
}

export interface CreateProjectRequest {
 project : ProjectSchema
}

export interface UpdateProjectRequest {
 max_spend?: number
 status?: string
}

export interface ProjectKey {
 name: string,
 summary: string,
}

export interface CreateProjectKeyRequest {
 key: ProjectKey
}
