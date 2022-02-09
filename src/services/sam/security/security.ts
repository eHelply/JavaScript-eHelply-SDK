import {Logger} from "../../../utils/logger";
import {AxiosInstance, AxiosResponse} from "axios";
import { SearchSecurityKeysResponse } from "./types/securityResponseTypes";

export default class SecuritySdk {
  axiosClient: AxiosInstance
  logger: Logger

  constructor(axiosClient: AxiosInstance, logger: Logger) {
    this.axiosClient = axiosClient;
    this.logger = logger;
  }
  searchSecurityKeys (): Promise<Array<SearchSecurityKeysResponse>> {
    return this.axiosClient.get<Array<SearchSecurityKeysResponse>>(
      `/sam/security/keys`,
      payload
    ).then((res: AxiosResponse<Array<SearchSecurityKeysResponse>>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  getSecurityKey () {

  }

  postSecurityKeyVerify () {

  }

  postCreateSecurityKey () {

  }

  deleteSecurityKey  () {

  }

  getEncryptionKey () {

  }

}
