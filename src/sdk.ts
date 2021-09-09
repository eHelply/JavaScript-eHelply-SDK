import UserService from "./services/users/users";
import ReviewSdk from "./services/products/reviews/reviews";
import axios from "axios";
import * as config from "./secret.json";
import {createReviewRequest, updateReviewRequest} from "./services/products/reviews/reviewTypes";

export class eHelplySDK {
    userService: UserService;
    reviewSdk: ReviewSdk;
    apiKey: string;
    projectUuid: string;
    secretToken: string;
    accessToken: string;
    axiosClient: any;
    constructor() {
        this.axiosClient =  axios.create({
            baseURL: config.baseURL
        })
        this.userService = new UserService();
        this.reviewSdk = new ReviewSdk(this.axiosClient);
    }
    setApiKey(apiKey: string): void {
        this.apiKey = apiKey;
    }
    setProjectUuid(projectUuid: string): void {
        this.projectUuid = projectUuid;
        this.axiosClient.defaults.headers.common["ehelply-project"] = projectUuid;
    }
    setSecretToken(secretToken: string): void{
        this.secretToken = secretToken;
        this.axiosClient.defaults.headers.common["x-secret-token"] = secretToken;
    }
    setAccessToken(accessToken: string): void{
        this.accessToken = accessToken;
        this.axiosClient.defaults.headers.common["x-access-token"] = accessToken;

    }
}
declare const ehelplyClient: eHelplySDK;
export default ehelplyClient;