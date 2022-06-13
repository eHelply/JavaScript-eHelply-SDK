/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.90
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.90
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Used for create endpoint
 * @export
 * @interface SecurityKeyCreate
 */
export interface SecurityKeyCreate {
    /**
     * 
     * @type {string}
     * @memberof SecurityKeyCreate
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SecurityKeyCreate
     */
    summary: string;
}

export function SecurityKeyCreateFromJSON(json: any): SecurityKeyCreate {
    return SecurityKeyCreateFromJSONTyped(json, false);
}

export function SecurityKeyCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecurityKeyCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'summary': json['summary'],
    };
}

export function SecurityKeyCreateToJSON(value?: SecurityKeyCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'summary': value.summary,
    };
}

