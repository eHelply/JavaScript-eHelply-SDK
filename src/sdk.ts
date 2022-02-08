import UserSdk from "./services/users/users";
import ReviewSdk from "./services/products/reviews/reviews";
import SupportSdk from "./services/sam/supports/tickets";
import AccessSdk from "./services/sam/access/access";
import MonitorSdk from "./services/sam/monitors/monitor";
import ProjectSdk from "./services/sam/projects/projects";
import BillingSdk from "./services/products/billing/billing";
import axios from "axios";
import {Logger, LogLevel} from "./utils/logger";
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
  GetProjectKeysResponse
} from "./services/sam/projects/types/projectResponseTypes";

import {
  GetMonitorServicesResponse,
  GetServiceSpecsResponse,
  GetServicesWithSpecsResponse,
  GetKpisResponse
} from "./services/sam/monitors/types/monitorResponseTypes";
import {CreateProjectKeyRequest, CreateProjectRequest, UpdateProjectRequest} from "./services/sam/projects/types/projectRequestTypes";

export {LogLevel};

export interface Configuration {
  logLevel: LogLevel
  baseUrl?: string,
  timeout: Number
}

export interface Services {
  users: UserSdk,
  reviews: ReviewSdk,
  support: SupportSdk,
  access: AccessSdk,
  monitor: MonitorSdk,
  billing: BillingSdk,
  projects: ProjectSdk
}

export interface Authentication {
  authorizationToken?: String
  secretToken?: String
  accessToken?: String
}

export class eHelplySDK {
  services: Services

  private _configuration: Configuration
  private _logger: Logger
  private _authentication: Authentication
  private _projectUuid: string;
  private _axiosClient: any;

  constructor(configuration: Configuration) {
    this._authentication = {};
    this.setupSdk(configuration)
  }

  set configuration(configuration: Configuration) {
    this.setupSdk(configuration)
  }

  setProjectUuid(projectUuid: string): void {
    this._projectUuid = projectUuid;
    this.setupSdk(this._configuration);
  }

  setAuthorizationToken(apiKey: string): void {
    this._authentication.authorizationToken = apiKey;
    this.setupSdk(this._configuration);
  }

  setSecretToken(secretToken: string): void {
    this._authentication.secretToken = secretToken;
    this.setupSdk(this._configuration);
  }

  setAccessToken(accessToken: string): void {
    this._authentication.accessToken = accessToken;
    this.setupSdk(this._configuration);
  }

  private setupSdk(configuration: Configuration): void {
    this._configuration = configuration;
    if (this._configuration.baseUrl === undefined) {
      this._configuration.baseUrl = "https://api.prod.ehelply.com";
    }

    this._logger = new Logger(this._configuration.logLevel);

    this.createAxiosClient();

    this.setAxiosClientHeaders();

    this.createServices();
  }

  private createAxiosClient(): void {
    this._axiosClient = axios.create({
      baseURL: this._configuration.baseUrl.valueOf(),
      timeout: this._configuration.timeout.valueOf()
    });
  }

  private setAxiosClientHeaders(): void {
    this._axiosClient.defaults.headers.common["ehelply-project"] = this._projectUuid;

    if (this._authentication.accessToken !== undefined && this._authentication.secretToken !== undefined) {
      this._axiosClient.defaults.headers.common["X-Access-Token"] = this._authentication.accessToken;
      this._axiosClient.defaults.headers.common["X-Secret-Token"] = this._authentication.secretToken;
    } else if (this._authentication.authorizationToken !== undefined) {
      this._axiosClient.defaults.headers.common["Authorization"] = this._authentication.authorizationToken;
    } else {
      this._logger.debug("No valid authentication provided");
    }
  }

  private createServices(): void {
    this.services = {
      users: new UserSdk(this._axiosClient, this._logger),
      reviews: new ReviewSdk(this._axiosClient, this._logger),
      support: new SupportSdk(this._axiosClient, this._logger),
      access: new AccessSdk(this._axiosClient, this._logger),
      monitor: new MonitorSdk(this._axiosClient, this._logger),
      billing: new BillingSdk(this._axiosClient, this._logger),
      projects: new ProjectSdk(this._axiosClient, this._logger)

    };
  }
}

// export project response and request type
export {
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
  CreateProjectKeyRequest,
  CreateProjectRequest,
  UpdateProjectRequest,
  GetProjectKeysResponse
}

export {
  GetMonitorServicesResponse,
  GetServiceSpecsResponse,
  GetServicesWithSpecsResponse,
  GetKpisResponse
}
