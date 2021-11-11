import {Logger} from "../../utils/logger";

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
        return this.axiosClient.post(`/users/auth/login`, data).then((res: any) => {
            this.logger.debug(res);
        });
    }
}
