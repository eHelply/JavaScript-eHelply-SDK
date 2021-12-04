import {Logger} from "../../utils/logger";
import {AxiosInstance, AxiosResponse} from "axios";
import {LoginRequest, SignUpRequest, AuthCodeRequest} from "./types/userRequestTypes";
import {LoginResponse, SignUpResponse, RefreshTokensResponse} from "./types/userResponseTypes";
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
    });
  }

  signup(payload: SignUpRequest): Promise<SignUpResponse> {
    return this.axiosClientHeaderless.post<SignUpResponse>(
      `/users/auth/signup`,
      payload
    ).then((res: AxiosResponse<SignUpResponse>) => {
      this.logger.debug(res);
      return res.data;
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

  refreshTokens(appClientId: string, payload: string): Promise<RefreshTokensResponse> {
    return this.axiosClientHeaderless.post<RefreshTokensResponse>(
      `/auth/${appClientId}/refresh-token`,
      payload
    ).then((res: AxiosResponse<RefreshTokensResponse>) => {
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
