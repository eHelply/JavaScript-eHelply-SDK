import {Logger} from "../../utils/logger";
import axios from "axios";

export default class UserSdk {
    axiosClient: any
    logger: Logger

    constructor(axiosClient: any, logger: Logger) {
        this.axiosClient = axiosClient;
        this.logger = logger;
    }

    login(email: string, password: string) {
        let data = {
            "user_login_data": {
                "username": email,
                "password": password
            }
        }
        // Uses a new axios client as endpoint doesnt support the eHelply headers yet
        // TODO: After the users refactor, this can likely be switched back to using this.axiosClient
        return axios.post(`/users/auth/login`, data).then((res: any) => {
            this.logger.debug(res);
        });
    }
}
