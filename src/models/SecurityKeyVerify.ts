/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.76
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.76
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Used for verify key endpoint
 * @export
 * @interface SecurityKeyVerify
 */
export interface SecurityKeyVerify {
    /**
     * 
     * @type {string}
     * @memberof SecurityKeyVerify
     */
    access: string;
    /**
     * 
     * @type {string}
     * @memberof SecurityKeyVerify
     */
    secret: string;
}

export function SecurityKeyVerifyFromJSON(json: any): SecurityKeyVerify {
    return SecurityKeyVerifyFromJSONTyped(json, false);
}

export function SecurityKeyVerifyFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecurityKeyVerify {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'access': json['access'],
        'secret': json['secret'],
    };
}

export function SecurityKeyVerifyToJSON(value?: SecurityKeyVerify | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'access': value.access,
        'secret': value.secret,
    };
}

