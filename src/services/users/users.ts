import {Logger} from "../../utils/logger";
import {AxiosInstance, AxiosResponse} from "axios";
import {
  LoginRequest,
  SignupRequest,
  AuthCodeRequest,
  ValidateEmailRequest,
  ResetPasswordRequest, ResetPasswordConfirmationRequest
} from "./types/userRequestTypes";
import {
  LoginResponse,
  SignUpResponse,
  RefreshTokensResponse,
  ValidateEmailResponse,
  ResetPasswordResponse, ResetPasswordConfirmationResponse, CreateUserResponse
} from "./types/userResponseTypes";
import {makeAxiosClientHeaderless} from "../../utils/axiosClient";

export default class UserSdk {
  axiosClient: AxiosInstance
  axiosClientPostUsers: AxiosInstance
  axiosClientHeaderless: AxiosInstance
  logger: Logger

  constructor(axiosClient: AxiosInstance, logger: Logger) {
    this.axiosClient = axiosClient;
    this.axiosClientHeaderless = makeAxiosClientHeaderless(axiosClient);
    this.axiosClientPostUsers = makeAxiosClientHeaderless(axiosClient);
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

  signup(payload: SignupRequest): Promise<SignUpResponse> {
    return this.axiosClientHeaderless.post<SignUpResponse>(
      `/users/auth/signup`,
      payload
    ).then((res: AxiosResponse<SignUpResponse>) => {
      this.logger.debug(res);
      return res.data;
    });
  }

  createUser(identityToken: string): Promise<CreateUserResponse> {
    this.axiosClientPostUsers.defaults.headers.common["Authorization"] = identityToken;
    return this.axiosClientPostUsers.post<CreateUserResponse>(
      `/users/users`,
      {},
      {
        headers: {
          Authorization: identityToken
        }
      }
    ).then((res: AxiosResponse<CreateUserResponse>) => {
      this.logger.debug(res);
      return res.data
    });
  }

  refreshTokens(appClientId: string, payload: string): Promise<RefreshTokensResponse> {
    return this.axiosClientHeaderless.post<RefreshTokensResponse>(
      `/users/auth/${appClientId}/refresh-token`,
      payload
    ).then((res: AxiosResponse<RefreshTokensResponse>) => {
      this.logger.debug(res);
      return res.data
    });
  }

  validateEmail(payload: ValidateEmailRequest):Promise<ValidateEmailResponse> {
    return this.axiosClient.post<ValidateEmailResponse>(
      `/users/users/validations/email`,
      payload
    ).then((res: AxiosResponse<ValidateEmailResponse>) => {
      this.logger.debug(res);
      return res.data
    });
  }

  resetPassword(payload: ResetPasswordRequest): Promise<ResetPasswordResponse> {
    return this.axiosClient.post(
      `/users/auth/password/reset`,
      payload
    ).then((res: AxiosResponse<ResetPasswordResponse>) => {
      this.logger.debug(res);
      return res.data
    });
  }

  resetPasswordConfirm(payload: ResetPasswordConfirmationRequest): Promise<ResetPasswordConfirmationResponse> {
    return this.axiosClient.post<ResetPasswordConfirmationResponse>(
      `/users/auth/password/reset/confirm`,
      payload
    ).then((res: AxiosResponse<ResetPasswordConfirmationResponse>) => {
      this.logger.debug(res);
      return res.data
    });
  }
}
