import {Logger} from "../../utils/logger";
import {AxiosInstance, AxiosResponse} from "axios";
import {makeAxiosClientHeaderless} from "../../utils/axiosClient";

export default class UserSdk {
  axiosClient: AxiosInstance
  axiosClientHeaderless: AxiosInstance
  logger: Logger

  constructor(axiosClient: AxiosInstance, logger: Logger) {
    this.axiosClient = axiosClient;
    this.axiosClientHeaderless = makeAxiosClientHeaderless(axiosClient);
    this.logger = logger;
  }

  login(payload: LoginRequest): Promise<LoginResponse> {
    return this.axiosClientHeaderless.post<LoginResponse>(
      `/users/auth/login`,
      payload
    ).then((res: AxiosResponse<LoginResponse>) => {
      this.logger.debug(res);
      return res.data;
    })
  }

  signup(payload: CreateUserRequest) {
    return this.axiosClientHeaderless.post(`/users/auth/signup`, payload).then((res: any) => {
      this.logger.debug(res);
    });
  }

  createUser(identityToken: string) {
    return this.axiosClientHeaderless.post(
      `/users`,
      {},
      {
        headers: {
          Authorization: identityToken
        }
      }
    ).then((res: AxiosResponse<CreateReviewResponse>) => {
      this.logger.debug(res);
      return res.data
    });
  }
  refreshTokens(appClientId: string, payload: any) {
    return this.axiosClientHeaderless.post(
      `/auth/${appClientId}/refresh-token`,
      payload
    ).then((res: AxiosResponse<CreateReviewResponse>) => {
      this.logger.debug(res);
      return res.data
    });
  }
  validateEmail(payload: any) {
    return this.axiosClient.post(
      `/users/validations/email`,
      payload
    ).then((res: AxiosResponse<CreateReviewResponse>) => {
      this.logger.debug(res);
      return res.data
    });
  }
  resetPassword(payload: any) {
    return this.axiosClient.post(
      `/auth/password/reset`,
      payload
    ).then((res: AxiosResponse<CreateReviewResponse>) => {
      this.logger.debug(res);
      return res.data
    });
  }
  resetPasswordConfirm(payload: any) {
    return this.axiosClient.post(
      `/auth/password/reset/confirm`,
      payload
    ).then((res: AxiosResponse<CreateReviewResponse>) => {
      this.logger.debug(res);
      return res.data
    });
  }
}
