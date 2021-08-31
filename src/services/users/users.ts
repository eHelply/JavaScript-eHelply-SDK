import config from "../../secret.json";

import axios from "axios";

export class Users {
    logIn(email: string, password: string) {
         let data = {
            "user_login_data": {
                "username": email,
                "password": password
            }
        }
        axios.post(`${config.baseURL}/users/auth/login`, data).then((res: any) => {
            console.log(res)
        })
    }
}
