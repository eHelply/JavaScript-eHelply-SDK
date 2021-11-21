import {Logger} from "../../utils/logger";
import {AxiosInstance} from "axios";
import {makeAxiosClientHeaderless} from "../../utils/axiosClient";

export default class UserSdk {
    axiosClient: AxiosInstance
    axiosClientHeaderless: AxiosInstance
    logger: Logger

    constructor(axiosClient: any, logger: Logger) {
        this.axiosClient = axiosClient;
        this.axiosClientHeaderless = makeAxiosClientHeaderless(axiosClient);
        this.logger = logger;
    }

    login(email: string, password: string) {
        let data = {
            "user_login_data": {
                "username": email,
                "password": password
            }
        }
        return this.axiosClientHeaderless.post(`/users/auth/login`, data).then((res: any) => {
            this.logger.debug(res);
        });
    }
}
