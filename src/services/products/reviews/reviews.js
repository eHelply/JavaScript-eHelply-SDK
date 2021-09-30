"use strict";
exports.__esModule = true;
var ReviewSdk = /** @class */ (function () {
    function ReviewSdk(axiosClient) {
        this.axiosClient = axiosClient;
    }
    ReviewSdk.prototype.create = function (payload, type, entity) {
        this.axiosClient.post("/products/reviews/types/" + type + "/entities/" + entity, payload).then(function (res) {
            console.log(res.data);
        });
    };
    ReviewSdk.prototype.update = function (payload, reviewUuid, type, entity) {
        this.axiosClient.put("/products/reviews/types/" + type + "/entities/" + entity + "/reviews/" + reviewUuid, payload).then(function (res) {
            console.log(res.data);
        });
    };
    ReviewSdk.prototype.get = function (reviewUuid, type, entity) {
        this.axiosClient.get("/products/reviews/types/" + type + "/entities/" + entity + "/reviews/" + reviewUuid).then(function (res) {
            console.log(res.data);
        });
    };
    ReviewSdk.prototype["delete"] = function (reviewUuid, type, entity) {
        this.axiosClient["delete"]("/products/reviews/types/" + type + "/entities/" + entity + "/reviews/" + reviewUuid).then(function (res) {
            console.log(res.data);
        });
    };
    return ReviewSdk;
}());
exports["default"] = ReviewSdk;
