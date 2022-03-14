import {Logger} from "../../../utils/logger";
import {AxiosInstance, AxiosResponse} from "axios";
import {
  GetMemberProjectsResponse,
  CreateProjectResponse,
  GetProjectResponse,
  UpdateProjectResponse,
  GetProjectMembersResponse,
  CreateProjectKeyResponse,
  RemoveProjectKeyResponse,
  AddPermissionToKeyResponse,
  RemovePermissionFromKeyResponse,
  GetPermissionFromKeyResponse,
  GetProjectKeysResponse,
  GetProjectUsageResponse,
  GetPaginatedSearchUsageTypesResponse
} from "./types/projectResponseTypes";
import {CreateProjectKeyRequest, CreateProjectRequest, UpdateProjectRequest} from "./types/projectRequestTypes";

export default class ProjectSdk {
  axiosClient: AxiosInstance
  logger: Logger

  constructor(axiosClient: AxiosInstance, logger: Logger) {
    this.axiosClient = axiosClient;
    this.logger = logger;
  }

  getMemberProjects(memberUuid: string, role: string): Promise<Array<GetMemberProjectsResponse>> {
    const params = {
      role: role
    }
    return this.axiosClient.get<Array<GetMemberProjectsResponse>>(
      `/sam/projects/members/${memberUuid}/projects`,
      {params}
    ).then((res: AxiosResponse<Array<GetMemberProjectsResponse>>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  createProject(payload: CreateProjectRequest): Promise<CreateProjectResponse> {
    return this.axiosClient.post<CreateProjectResponse>(
      `/sam/projects/projects`,
      payload
    ).then((res: AxiosResponse<CreateProjectResponse>) => {
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

  getProject(projectUuid: string): Promise<GetProjectResponse> {
    return this.axiosClient.get<GetProjectResponse>(
      `/sam/projects/projects/${projectUuid}`,
    ).then((res: AxiosResponse<GetProjectResponse>) => {
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

  createProjectKey(projectUuid: string, memberUuid: string, payload: CreateProjectKeyRequest): Promise<CreateProjectKeyResponse> {
    return this.axiosClient.post<CreateProjectKeyResponse>(
      `/sam/projects/projects/${projectUuid}/members/${memberUuid}/keys`,
      payload
    ).then((res: AxiosResponse<CreateProjectKeyResponse>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  removeProjectKey(projectUuid: string, memberUuid: string, keyUuid: string): Promise<RemoveProjectKeyResponse> {
    return this.axiosClient.delete<RemoveProjectKeyResponse>(
      `/sam/projects/projects/${projectUuid}/members/${memberUuid}/keys/${keyUuid}`,
    ).then((res: AxiosResponse<RemoveProjectKeyResponse>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  addPermissionToKey(projectUuid: string, memberUuid: string, keyUuid: string, nodeUuid: string): Promise<AddPermissionToKeyResponse> {
    return this.axiosClient.post<AddPermissionToKeyResponse>(
      `/sam/projects/projects/${projectUuid}/members/${memberUuid}/keys/${keyUuid}/permissions/${nodeUuid}`,
    ).then((res: AxiosResponse<AddPermissionToKeyResponse>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  removePermissionFromKey(projectUuid: string, memberUuid: string, keyUuid: string, nodeUuid: string): Promise<RemovePermissionFromKeyResponse> {
    return this.axiosClient.delete<RemovePermissionFromKeyResponse>(
      `/sam/projects/projects/${projectUuid}/members/${memberUuid}/keys/${keyUuid}/permissions/${nodeUuid}`,
    ).then((res: AxiosResponse<RemovePermissionFromKeyResponse>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  getPermissionFromKey(projectUuid: string, memberUuid: string, keyUuid: string): Promise<Array<GetPermissionFromKeyResponse>> {
    return this.axiosClient.get<Array<GetPermissionFromKeyResponse>>(
      `/sam/projects/projects/${projectUuid}/members/${memberUuid}/keys/${keyUuid}/permissions`,
    ).then((res: AxiosResponse<Array<GetPermissionFromKeyResponse>>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  getProjectKeys(projectUuid: string, memberUuid: string): Promise<GetProjectKeysResponse> {
    return this.axiosClient.get<GetProjectKeysResponse>(
      `/sam/projects/projects/${projectUuid}/members/${memberUuid}/keys`,
    ).then((res: AxiosResponse<GetProjectKeysResponse>) => {
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
