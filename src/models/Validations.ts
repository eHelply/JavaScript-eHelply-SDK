/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.116
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.116
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Validations
 * @export
 * @interface Validations
 */
export interface Validations {
    /**
     * 
     * @type {Array<string>}
     * @memberof Validations
     */
    value?: Array<string>;
}

export function ValidationsFromJSON(json: any): Validations {
    return ValidationsFromJSONTyped(json, false);
}

export function ValidationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Validations {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function ValidationsToJSON(value?: Validations | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
    };
}

