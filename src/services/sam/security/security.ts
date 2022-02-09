import {Logger} from "../../../utils/logger";
import {AxiosInstance, AxiosResponse} from "axios";
import { GetSecurityKeyResponse } from "./types/securityResponseTypes";
import { PostSecurityKeyVerifyRequest, PostCreateSecurityKeyRequest } from "./types/securityRequestTypes";

export default class SecuritySdk {
  axiosClient: AxiosInstance
  logger: Logger

  constructor(axiosClient: AxiosInstance, logger: Logger) {
    this.axiosClient = axiosClient;
    this.logger = logger;
  }
  searchSecurityKeys (): Promise<Array<GetSecurityKeyResponse>> {
    return this.axiosClient.get<Array<GetSecurityKeyResponse>>(
      `/sam/security/keys`
    ).then((res: AxiosResponse<Array<GetSecurityKeyResponse>>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  getSecurityKey (keyUuid: string): Promise<GetSecurityKeyResponse> {
    return this.axiosClient.get<GetSecurityKeyResponse>(
      `/sam/security/keys/${keyUuid}`
    ).then((res: AxiosResponse<GetSecurityKeyResponse>) => {
      this.logger.debug(res);
      return res.data;
    });
  }


  postSecurityKeyVerify (payload: PostSecurityKeyVerifyRequest): Promise<GetSecurityKeyResponse> {
    return this.axiosClient.post<GetSecurityKeyResponse>(
      `/sam/security/keys/verify`,
      payload
    ).then((res: AxiosResponse<GetSecurityKeyResponse>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  postCreateSecurityKey () {

  }

  deleteSecurityKey  () {

  }

  getEncryptionKey () {

  }

}
