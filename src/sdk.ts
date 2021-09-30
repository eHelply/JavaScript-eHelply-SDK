import UserSdk from "./services/users/users";
import ReviewSdk from "./services/products/reviews/reviews";
import axios from "axios";
import {createReviewRequest, updateReviewRequest} from "./services/products/reviews/reviewTypes";

export class eHelplySDK {
    userSdk: UserSdk;
    reviewSdk: ReviewSdk;
    apiKey: string;
    projectUuid: string;
    secretToken: string;
    accessToken: string;
    axiosClient: any;
    constructor() {
        this.axiosClient =  axios.create({
            baseURL: "https://api.test.ehelply.com"
        })
        // this.axiosClient.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
        this.userSdk = new UserSdk(this.axiosClient);
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
        this.axiosClient.defaults.headers.common["X-Secret-Token"] = secretToken;
    }
    setAccessToken(accessToken: string): void{
        this.accessToken = accessToken;
        this.axiosClient.defaults.headers.common["X-Access-Token"] = accessToken;

    }
}