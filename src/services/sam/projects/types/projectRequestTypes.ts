
export interface ProjectSchema {
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
