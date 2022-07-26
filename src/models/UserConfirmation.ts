/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.96
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.96
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Information to confirm user
 * @export
 * @interface UserConfirmation
 */
export interface UserConfirmation {
    /**
     * 
     * @type {string}
     * @memberof UserConfirmation
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof UserConfirmation
     */
    verificationCode: string;
}

/**
 * Check if a given object implements the UserConfirmation interface.
 */
export function instanceOfUserConfirmation(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "verificationCode" in value;

    return isInstance;
}

export function UserConfirmationFromJSON(json: any): UserConfirmation {
    return UserConfirmationFromJSONTyped(json, false);
}

export function UserConfirmationFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserConfirmation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
        'verificationCode': json['verification_code'],
    };
}

export function UserConfirmationToJSON(value?: UserConfirmation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'verification_code': value.verificationCode,
    };
}

