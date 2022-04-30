/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.72
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.72
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * Tokens (refresh, access, identity, ect)
 * @export
 * @interface UserLoginReturn
 */
export interface UserLoginReturn {
    /**
     * 
     * @type {string}
     * @memberof UserLoginReturn
     */
    'AccessToken': string;
    /**
     * 
     * @type {number}
     * @memberof UserLoginReturn
     */
    'ExpiresIn': number;
    /**
     * 
     * @type {string}
     * @memberof UserLoginReturn
     */
    'TokenType': string;
    /**
     * 
     * @type {string}
     * @memberof UserLoginReturn
     */
    'IdToken': string;
    /**
     * 
     * @type {string}
     * @memberof UserLoginReturn
     */
    'RefreshToken': string;
}

