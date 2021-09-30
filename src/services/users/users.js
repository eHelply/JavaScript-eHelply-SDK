"use strict";
exports.__esModule = true;
var UserSdk = /** @class */ (function () {
    function UserSdk(axiosClient) {
        this.axiosClient = axiosClient;
    }
    UserSdk.prototype.logIn = function (email, password) {
        var data = {
            "user_login_data": {
                "username": email,
                "password": password
            }
        };
        this.axiosClient.post("/users/auth/login", data).then(function (res) {
            console.log(res);
        });
    };
    return UserSdk;
}());
exports["default"] = UserSdk;
