"use strict";
exports.__esModule = true;
exports.eHelplySDK = void 0;
var users_1 = require("./services/users/users");
var reviews_1 = require("./services/products/reviews/reviews");
var axios_1 = require("axios");
var eHelplySDK = /** @class */ (function () {
    function eHelplySDK() {
        this.axiosClient = axios_1["default"].create({
            baseURL: "https://api.test.ehelply.com"
        });
        // this.axiosClient.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
        this.userSdk = new users_1["default"](this.axiosClient);
        this.reviewSdk = new reviews_1["default"](this.axiosClient);
    }
    eHelplySDK.prototype.setApiKey = function (apiKey) {
        this.apiKey = apiKey;
    };
    eHelplySDK.prototype.setProjectUuid = function (projectUuid) {
        this.projectUuid = projectUuid;
        this.axiosClient.defaults.headers.common["ehelply-project"] = projectUuid;
    };
    eHelplySDK.prototype.setSecretToken = function (secretToken) {
        this.secretToken = secretToken;
        this.axiosClient.defaults.headers.common["X-Secret-Token"] = secretToken;
    };
    eHelplySDK.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        this.axiosClient.defaults.headers.common["X-Access-Token"] = accessToken;
    };
    return eHelplySDK;
}());
exports.eHelplySDK = eHelplySDK;
