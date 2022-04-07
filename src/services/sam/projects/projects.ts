import {Logger} from "../../../utils/logger";
import {AxiosInstance, AxiosResponse} from "axios";
import {
  GetProjectMembersResponse,
  CreateProjectKeyResponse,
  RemoveProjectKeyResponse,
  GetProjectKeysResponse,
  GetProjectUsageResponse,
  GetPaginatedSearchUsageTypesResponse, ProjectResponse, UpdateProjectResponse,
} from "./types/projectResponseTypes";
import {ProjectKey, ProjectSchema, UpdateProjectRequest} from "./types/projectRequestTypes";

export default class ProjectSdk {
  axiosClient: AxiosInstance
  logger: Logger

  constructor(axiosClient: AxiosInstance, logger: Logger) {
    this.axiosClient = axiosClient;
    this.logger = logger;
  }

  getMemberProjects(memberUuid: string, role: string): Promise<Array<ProjectResponse>> {
    const params = {
      role: role
    }
    return this.axiosClient.get<Array<ProjectResponse>>(
      `/sam/projects/members/${memberUuid}/projects`,
      {params}
    ).then((res: AxiosResponse<Array<ProjectResponse>>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  createProject(payload: ProjectSchema): Promise<ProjectResponse> {
    return this.axiosClient.post<ProjectResponse>(
      `/sam/projects/projects`,
      payload
    ).then((res: AxiosResponse<ProjectResponse>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  updateProject(projectUuid: string, payload: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    return this.axiosClient.put<UpdateProjectResponse>(
      `/sam/projects/projects/${projectUuid}`,
      payload
    ).then((res: AxiosResponse<UpdateProjectResponse>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  getProject(projectUuid: string): Promise<ProjectResponse> {
    return this.axiosClient.get<ProjectResponse>(
      `/sam/projects/projects/${projectUuid}`,
    ).then((res: AxiosResponse<ProjectResponse>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  archiveProject(projectUuid: string): Promise<string> {
    return this.axiosClient.delete<string>(
      `/sam/projects/projects/${projectUuid}`,
    ).then((res: AxiosResponse<string>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  getProjectMembers(projectUuid: string): Promise<Array<GetProjectMembersResponse>> {
    return this.axiosClient.get<Array<GetProjectMembersResponse>>(
      `/sam/projects/projects/${projectUuid}/members`,
    ).then((res: AxiosResponse<Array<GetProjectMembersResponse>>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  addMemberToProject(projectUuid: string, memberUuid: string): Promise<boolean> {
    return this.axiosClient.post<boolean>(
      `/sam/projects/projects/${projectUuid}/members/${memberUuid}`,
    ).then((res: AxiosResponse<boolean>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  removeMemberFromProject(projectUuid: string, memberUuid: string): Promise<boolean> {
    return this.axiosClient.delete<boolean>(
      `/sam/projects/projects/${projectUuid}/members/${memberUuid}`,
    ).then((res: AxiosResponse<boolean>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  createProjectKey(projectUuid: string, payload: ProjectKey): Promise<CreateProjectKeyResponse> {
    return this.axiosClient.post<CreateProjectKeyResponse>(
      `/sam/projects/projects/${projectUuid}/keys`,
      payload
    ).then((res: AxiosResponse<CreateProjectKeyResponse>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  removeProjectKey(projectUuid: string, keyUuid: string): Promise<RemoveProjectKeyResponse> {
    return this.axiosClient.delete<RemoveProjectKeyResponse>(
      `/sam/projects/projects/${projectUuid}/keys?access_token=${keyUuid}`,
    ).then((res: AxiosResponse<RemoveProjectKeyResponse>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  getProjectKeys(projectUuid: string): Promise<Array<GetProjectMembersResponse>> {
    return this.axiosClient.get<Array<GetProjectMembersResponse>>(
      `/sam/projects/projects/${projectUuid}/keys`,
    ).then((res: AxiosResponse<Array<GetProjectMembersResponse>>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  getProjectsUsage(projectUuid: string, year: number, month: number): Promise<Array<GetProjectUsageResponse>> {
    const params = {
      month: month,
      year: year
    }
    return this.axiosClient.get<Array<GetProjectUsageResponse>>(
      `/sam/projects/projects/${projectUuid}/usage`,
      {params}
    ).then((res: AxiosResponse<Array<GetProjectUsageResponse>>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  getSpecificProjectUsage(projectUuid: string, usageKey: string): Promise<GetProjectUsageResponse> {
    return this.axiosClient.get<GetProjectUsageResponse>(
      `/sam/projects/projects/${projectUuid}/usage/${usageKey}`,
    ).then((res: AxiosResponse<GetProjectUsageResponse>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  getSearchUsageType(search?: string, searchOn?: string): Promise<GetPaginatedSearchUsageTypesResponse> {
    const params = {
      search: search,
      search_on: searchOn
    }
    return this.axiosClient.get<GetPaginatedSearchUsageTypesResponse>(
      `/sam/projects/usage/types`,
      {params}
    ).then((res: AxiosResponse<GetPaginatedSearchUsageTypesResponse>) => {
      this.logger.debug(res);
      return res.data;
    });
  }
}
