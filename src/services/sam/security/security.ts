import {Logger} from "../../../utils/logger";
import {AxiosInstance, AxiosResponse} from "axios";
import {
  PostCreateEncryptionKeyResponse,
  DeleteSecurityKeyResponse,
  GetSecurityKeyResponse,
  PostCreateSecurityKeyResponse,
  GetEncryptionKeyResponse
} from "./types/securityResponseTypes";
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

  postCreateSecurityKey (payload: PostCreateSecurityKeyRequest): Promise<PostCreateSecurityKeyResponse> {
    return this.axiosClient.post<PostCreateSecurityKeyResponse>(
      `/sam/security/keys/`,
      payload
    ).then((res: AxiosResponse<PostCreateSecurityKeyResponse>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  deleteSecurityKey (keyUuid: string): Promise<DeleteSecurityKeyResponse> {
    return this.axiosClient.delete<DeleteSecurityKeyResponse>(
      `/sam/security/keys/${keyUuid}`
    ).then((res: AxiosResponse<DeleteSecurityKeyResponse>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  createEncryptionKey (category: string): Promise<PostCreateEncryptionKeyResponse> {
    return this.axiosClient.post<PostCreateEncryptionKeyResponse>(
      `/sam/security/categories/${category}/keys`
    ).then((res: AxiosResponse<PostCreateEncryptionKeyResponse>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  getEncryptionKey (category: string): Promise<Array<GetEncryptionKeyResponse>> {
    return this.axiosClient.delete<Array<GetEncryptionKeyResponse>>(
      `/sam/security/categories/${category}/keys`
    ).then((res: AxiosResponse<Array<GetEncryptionKeyResponse>>) => {
      this.logger.debug(res);
      return res.data;
    });
  }
}
