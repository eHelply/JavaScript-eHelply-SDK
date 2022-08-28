/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.105
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.105
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
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
    accessToken: string;
    /**
     * 
     * @type {number}
     * @memberof UserLoginReturn
     */
    expiresIn: number;
    /**
     * 
     * @type {string}
     * @memberof UserLoginReturn
     */
    tokenType: string;
    /**
     * 
     * @type {string}
     * @memberof UserLoginReturn
     */
    idToken: string;
    /**
     * 
     * @type {string}
     * @memberof UserLoginReturn
     */
    refreshToken: string;
}

export function UserLoginReturnFromJSON(json: any): UserLoginReturn {
    return UserLoginReturnFromJSONTyped(json, false);
}

export function UserLoginReturnFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserLoginReturn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessToken': json['AccessToken'],
        'expiresIn': json['ExpiresIn'],
        'tokenType': json['TokenType'],
        'idToken': json['IdToken'],
        'refreshToken': json['RefreshToken'],
    };
}

export function UserLoginReturnToJSON(value?: UserLoginReturn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'AccessToken': value.accessToken,
        'ExpiresIn': value.expiresIn,
        'TokenType': value.tokenType,
        'IdToken': value.idToken,
        'RefreshToken': value.refreshToken,
    };
}

