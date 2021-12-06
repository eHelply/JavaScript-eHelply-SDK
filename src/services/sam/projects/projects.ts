import {Logger} from "../../../utils/logger";
import {AxiosInstance, AxiosResponse} from "axios";
import {
  GetMemberProjectsResponse,
  CreateProjectResponse,
  GetProjectResponse,
  UpdateProjectResponse
} from "./types/projectResponseTypes";
import {CreateProjectRequest, UpdateProjectRequest} from "./types/projectRequestTypes";

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
      `/sam/projects/member/${memberUuid}/`,
      {params}
    ).then((res: AxiosResponse<Array<GetMemberProjectsResponse>>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  createProject(payload: CreateProjectRequest): Promise<CreateProjectResponse> {
    return this.axiosClient.post<CreateProjectResponse>(
      `/sam/projects`,
      payload
    ).then((res: AxiosResponse<CreateProjectResponse>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  updateProject(projectUuid: string, payload: UpdateProjectRequest): Promise<UpdateProjectResponse> {
    return this.axiosClient.put<UpdateProjectResponse>(
      `/sam/projects/${projectUuid}`,
      payload
    ).then((res: AxiosResponse<UpdateProjectResponse>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  getProject(projectUuid: string): Promise<GetProjectResponse> {
    return this.axiosClient.get<GetProjectResponse>(
      `/sam/projects/${projectUuid}`,
    ).then((res: AxiosResponse<GetProjectResponse>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  archiveProject(projectUuid: string): Promise<string> {
    return this.axiosClient.delete<string>(
      `/sam/projects/${projectUuid}`,
    ).then((res: AxiosResponse<string>) => {
      this.logger.debug(res);
      return res.data;
    });
  }
}
