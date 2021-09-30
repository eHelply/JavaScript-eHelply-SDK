export default class UserSdk {
    axiosClient: any;
    constructor(axiosClient: any);
    logIn(email: string, password: string): void;
}
