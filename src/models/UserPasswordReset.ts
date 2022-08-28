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
 * Information used for resetting the password
 * @export
 * @interface UserPasswordReset
 */
export interface UserPasswordReset {
    /**
     * 
     * @type {string}
     * @memberof UserPasswordReset
     */
    email: string;
}

export function UserPasswordResetFromJSON(json: any): UserPasswordReset {
    return UserPasswordResetFromJSONTyped(json, false);
}

export function UserPasswordResetFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserPasswordReset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
    };
}

export function UserPasswordResetToJSON(value?: UserPasswordReset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
    };
}

