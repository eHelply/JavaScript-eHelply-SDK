import UserSdk from "./services/users/users";
import ReviewSdk from "./services/products/reviews/reviews";
export declare class eHelplySDK {
    userSdk: UserSdk;
    reviewSdk: ReviewSdk;
    apiKey: string;
    projectUuid: string;
    secretToken: string;
    accessToken: string;
    axiosClient: any;
    constructor();
    setApiKey(apiKey: string): void;
    setProjectUuid(projectUuid: string): void;
    setSecretToken(secretToken: string): void;
    setAccessToken(accessToken: string): void;
}
