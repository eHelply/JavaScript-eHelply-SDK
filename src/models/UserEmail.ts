/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.87
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.87
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * User email information
 * @export
 * @interface UserEmail
 */
export interface UserEmail {
    /**
     * 
     * @type {string}
     * @memberof UserEmail
     */
    address?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserEmail
     */
    verified?: boolean;
}

export function UserEmailFromJSON(json: any): UserEmail {
    return UserEmailFromJSONTyped(json, false);
}

export function UserEmailFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserEmail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': !exists(json, 'address') ? undefined : json['address'],
        'verified': !exists(json, 'verified') ? undefined : json['verified'],
    };
}

export function UserEmailToJSON(value?: UserEmail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'verified': value.verified,
    };
}

