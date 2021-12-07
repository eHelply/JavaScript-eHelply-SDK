export interface CreateProjectRequest {
 name: string
}

export interface UpdateProjectRequest {
 max_spend?: number
 status?: string
}

export interface ProjectKey {
 name: string,
 summary: string,
}

export interface CreateProjectKeyRequest extends  ProjectKey {}
