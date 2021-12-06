import {Logger} from "../../../utils/logger";
import {AxiosInstance, AxiosResponse} from "axios";
import {GetMemberProjectsResponse} from "./types/projectResponseTypes";

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
  createProject() {

  }
  updateProject() {

  }
  archiveProject() {

  }

}
