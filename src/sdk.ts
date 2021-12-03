import UserSdk from "./services/users/users";
import ReviewSdk from "./services/products/reviews/reviews";
import SupportSdk from "./services/sam/supports/tickets";
import axios from "axios";
import {Logger, LogLevel} from "./utils/logger";

export {LogLevel};

export interface Configuration {
    logLevel: LogLevel
    baseUrl?: String,
    timeout: Number
}

export interface Services {
    users: UserSdk,
    reviews: ReviewSdk,
    support: SupportSdk,
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
        if(this._configuration.baseUrl === undefined) {
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

        if(this._authentication.accessToken !== undefined && this._authentication.secretToken !== undefined) {
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
            support: new SupportSdk(this._axiosClient, this._logger)
    };
    }
}
