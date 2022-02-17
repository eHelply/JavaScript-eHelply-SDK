// import utils
import axios from "axios";
import {Logger, LogLevel} from "./utils/logger";

// import services sdks
import UserSdk from "./services/users/users";
import ReviewSdk from "./services/products/reviews/reviews";
import SupportSdk from "./services/sam/supports/tickets";
import AccessSdk from "./services/sam/access/access";
import MonitorSdk from "./services/sam/monitors/monitor";
import ProjectSdk from "./services/sam/projects/projects";
import BillingSdk from "./services/products/billing/billing";
import SecuritySdk from "./services/sam/security/security";

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
  projects: ProjectSdk,
  security: SecuritySdk
}

export interface Authentication {
  authorizationToken?: String
  secretToken?: String
  accessToken?: String
  ehelplyActiveParticipant? : String
}

export class eHelplySDK {
  services: Services

  private _configuration: Configuration
  private _logger: Logger
  private _authentication: Authentication
  private _projectUuid: string;
  private _axiosClient: any;
  private _activeParticipant: string;

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

  setActiveParticipant(activeParticipant: string): void {
    this._activeParticipant = activeParticipant;
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
    this._axiosClient.defaults.headers.common["ehelply-active-participant"] = this._activeParticipant;
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
      projects: new ProjectSdk(this._axiosClient, this._logger),
      security: new SecuritySdk(this._axiosClient, this._logger)
    };
  }
}


// import and export access response types
export {GetAccessKeyResponse} from "./services/sam/access/types/accessResponseTypes";

// import and export monitor response types
export {
  GetKpisResponse,
  GetMonitorServicesResponse,
  GetServiceSpecsResponse,
  GetServicesWithSpecsResponse
} from "./services/sam/monitors/types/monitorResponseTypes";

//import and export project response types
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
  GetProjectKeysResponse,
  GetProjectUsageResponse
} from "./services/sam/projects/types/projectResponseTypes";

// import and export project request payload types
export {
  CreateProjectKeyRequest,
  CreateProjectRequest,
  UpdateProjectRequest
} from "./services/sam/projects/types/projectRequestTypes";

// import and export security response types
export {
  PostCreateEncryptionKeyResponse,
  DeleteSecurityKeyResponse,
  GetSecurityKeyResponse,
  PostCreateSecurityKeyResponse,
  GetEncryptionKeyResponse
} from "./services/sam/security/types/securityResponseTypes";

// import and export security request payload types
export {
  PostSecurityKeyVerifyRequest,
  PostCreateSecurityKeyRequest
} from "./services/sam/security/types/securityRequestTypes";

// import and export support response types
export {
  CreateContactResponse,
  GetTicketResponse,
  CreateTicketResponse,
  UpdateTicketResponse
} from "./services/sam/supports/types/ticketReponseTypes";


// import and export support request payload types
export {
  CreateTicketRequest,
  CreateContactRequest
} from "./services/sam/supports/types/ticketRequestTypes";
