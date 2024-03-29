/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.118
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.118
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Fields used to validate a user's field
 * @export
 * @interface UserValidations
 */
export interface UserValidations {
    /**
     * 
     * @type {string}
     * @memberof UserValidations
     */
    value: string;
    /**
     * 
     * @type {string}
     * @memberof UserValidations
     */
    validationType: string;
}

export function UserValidationsFromJSON(json: any): UserValidations {
    return UserValidationsFromJSONTyped(json, false);
}

export function UserValidationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserValidations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': json['value'],
        'validationType': json['validation_type'],
    };
}

export function UserValidationsToJSON(value?: UserValidations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'validation_type': value.validationType,
    };
}

