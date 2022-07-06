/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.85
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.85
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Information for resetting the new password with a confirmation code
 * @export
 * @interface UserPasswordResetConfirmation
 */
export interface UserPasswordResetConfirmation {
    /**
     * 
     * @type {string}
     * @memberof UserPasswordResetConfirmation
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof UserPasswordResetConfirmation
     */
    confirmationCode: string;
    /**
     * 
     * @type {string}
     * @memberof UserPasswordResetConfirmation
     */
    password: string;
}

export function UserPasswordResetConfirmationFromJSON(json: any): UserPasswordResetConfirmation {
    return UserPasswordResetConfirmationFromJSONTyped(json, false);
}

export function UserPasswordResetConfirmationFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserPasswordResetConfirmation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': json['email'],
        'confirmationCode': json['confirmation_code'],
        'password': json['password'],
    };
}

export function UserPasswordResetConfirmationToJSON(value?: UserPasswordResetConfirmation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
        'confirmation_code': value.confirmationCode,
        'password': value.password,
    };
}

