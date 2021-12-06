import {Logger} from "../../../utils/logger";
import {AxiosInstance, AxiosResponse} from "axios";
import {GetKeyResponse, GetAccessibilityResponse} from "./types/accessResponseTypes";

export default class AccessSdk {
  axiosClient: AxiosInstance
  logger: Logger

  constructor(axiosClient: AxiosInstance, logger: Logger) {
    this.axiosClient = axiosClient;
    this.logger = logger;
  }

  getKey(keyUuid: string): Promise<GetKeyResponse> {
    return this.axiosClient.post<GetKeyResponse>(
      `/sam/security/keys/${keyUuid}`
    ).then((res: AxiosResponse<GetKeyResponse>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  checkAccessibility(partition: string, target: string, node: string, entity: string): Promise<GetAccessibilityResponse> {
    return this.axiosClient.post<GetAccessibilityResponse>(
      `/sam/access/partitions/${partition}/auth/targets/${target}/nodes/${node}/entities/${entity}`
    ).then((res: AxiosResponse<GetAccessibilityResponse>) => {
      this.logger.debug(res);
      return res.data;
    });
  }
}
