/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.103
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.103
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SecurityCreateToken
 */
export interface SecurityCreateToken {
    /**
     * 
     * @type {number}
     * @memberof SecurityCreateToken
     */
    length?: number;
}

/**
 * Check if a given object implements the SecurityCreateToken interface.
 */
export function instanceOfSecurityCreateToken(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SecurityCreateTokenFromJSON(json: any): SecurityCreateToken {
    return SecurityCreateTokenFromJSONTyped(json, false);
}

export function SecurityCreateTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecurityCreateToken {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'length': !exists(json, 'length') ? undefined : json['length'],
    };
}

export function SecurityCreateTokenToJSON(value?: SecurityCreateToken | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'length': value.length,
    };
}

