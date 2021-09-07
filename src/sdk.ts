import UserService from "./services/users/users";
import ReviewSdk from "./services/products/reviews/reviews";
import axios from "axios";
import * as config from "./secret.json";
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
let ehelplyClient: eHelplySDK = new eHelplySDK();
ehelplyClient.setAccessToken("86_s5ExYx9GsIXuUd18857d6d16811eb97cb0a58a9feac02xYx9GsIXuU2im-hB");
ehelplyClient.setSecretToken("yckQy9fzAh6oNFi-3f40ea9dc5294f2a92484e95e2179fb7GFHyckQy9fzAh6oN");
ehelplyClient.setProjectUuid("8278b088-d167-11eb-a712-0a58a9feac02");
ehelplyClient.reviewSdk.create(5,10,"pls work")

// export default ehelplyClient;
