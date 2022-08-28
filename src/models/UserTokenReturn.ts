/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.106
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.106
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Tokens, naming scheme based off of cognito return fields
 * @export
 * @interface UserTokenReturn
 */
export interface UserTokenReturn {
    /**
     * 
     * @type {string}
     * @memberof UserTokenReturn
     */
    accessToken: string;
    /**
     * 
     * @type {number}
     * @memberof UserTokenReturn
     */
    expiresIn: number;
    /**
     * 
     * @type {string}
     * @memberof UserTokenReturn
     */
    tokenType: string;
    /**
     * 
     * @type {string}
     * @memberof UserTokenReturn
     */
    idToken: string;
}

export function UserTokenReturnFromJSON(json: any): UserTokenReturn {
    return UserTokenReturnFromJSONTyped(json, false);
}

export function UserTokenReturnFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserTokenReturn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessToken': json['AccessToken'],
        'expiresIn': json['ExpiresIn'],
        'tokenType': json['TokenType'],
        'idToken': json['IdToken'],
    };
}

export function UserTokenReturnToJSON(value?: UserTokenReturn | null): any {
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
    };
}

