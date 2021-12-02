import {Logger} from "../../utils/logger";
import {AxiosInstance} from "axios";
import {makeAxiosClientHeaderless} from "../../utils/axiosClient";
import querystring from "querystring";
import {authCodeRequest, createUserRequest} from "./userTypes";

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
        }).catch(error => {
            throw error
        });
    }
    signup(payload: createUserRequest)
    {
        return this.axiosClientHeaderless.post(`/users/auth/signup`, payload).then((res: any) => {
            this.logger.debug(res);
        });
    }
    login_callback(payload: authCodeRequest) {
        const headers = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }
        let my_axios = axios.create({
            transformRequest: [(data, headers) => {
                delete headers.common.Authorization;
                delete headers.common['EHELPLY-Active-Participant'];
                return data;
            }]
        });
        my_axios.post(`/users/auth/oauth2/token`, querystring.stringify(payload), headers).then((res:any ) => {
            this.complete_login(res.refresh_token, res.access_token, res.identity_token, payload.redirect_uri);
        })
    }
    complete_login (refresh_token: string, access_token: string, identity_token: string, redirect: string, ){
        let self = this;

        let users_endpoint = this.facts.get_service_endpoint("users");

        this.axiosClientHeaderless.post(`/users/auth/users`, {}, {headers: {Authorization: identity_token}}).then(async function (response_users) {
            response_users = response_users.data;

            let active_participant = response_users.participants[0].uuid;

            self.$store.commit("auth/setRefreshToken", {refresh_token: refresh_token});
            self.$store.commit("auth/setActiveParticipant", {active_participant: active_participant});

            if (response_users.first_login) {

                let auth_refresh_token_payload = {
                    token: refresh_token
                };

                let response_refresh_tokens = await axios.post(`${users_endpoint}/auth/${self.$store.getters["auth/getAppClient"]}/refresh-token`, auth_refresh_token_payload);
                response_refresh_tokens = response_refresh_tokens.data;

                access_token = response_refresh_tokens.AccessToken;
                identity_token = response_refresh_tokens.IdToken;
            }

            try {
                response_users.user.picture = self.make_picture(response_users.user);
            } catch (err) {

            }
            if (response_users.user.picture === null) {
                response_users.user.picture = "https://feedback.seekingalpha.com/s/cache/ab/df/abdf970807f944e64536a1add6b5c365.png";
            }

            self.$store.commit("auth/setAccessToken", {access_token: access_token});
            self.$store.commit("auth/setIdentityToken", {identity_token: identity_token});
            self.$store.commit("user/setMe", response_users.user);

            self.$axios.defaults.headers.common["Authorization"] = identity_token;
            self.$axios.defaults.headers.common["EHELPLY-Active-Participant"] = active_participant;

            if (self.$store.getters["auth/getProject"] !== null) {
                self.$axios.defaults.headers.common["Ehelply-Project"] = self.$store.getters["auth/getProject"];
            }
            self.$axios.defaults.headers.common["Ehelply-Project"] = "ehelply";

            if (self.$store.getters["auth/getData"] !== null) {
                let data_json = JSON.stringify(self.$store.getters["auth/getData"]);
                let data_str = unescape(encodeURIComponent(btoa(data_json)));
                self.$axios.defaults.headers.common["Ehelply-Data"] = data_str;
            }

            let sentry_user = {
                id: active_participant,
                email: response_users.user.email.address
            }

            if(response_users.user.first_name) {
                sentry_user['first_name'] = response_users.user.first_name;
            }

            if(response_users.user.last_name) {
                sentry_user['last_name'] = response_users.user.last_name;
            }

            Sentry.setUser(sentry_user);
        });
    }
}
