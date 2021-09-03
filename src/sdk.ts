import UserService from "./services/users/users";
import ReviewServices from "./services/products/reviews/reviews";
export class eHelplySDK {
    userService: UserService;
    reviewService: ReviewServices;
    constructor() {
        this.userService = new UserService();
        this.reviewService = new ReviewServices();
    }

}
let ehelplyClient: eHelplySDK = new eHelplySDK()
// ehelplyClient.users.logIn("wilson.nie13@gmail.com", "Mdrad9qfwA46JkD9zMR0")
ehelplyClient.reviewService.createRewview()