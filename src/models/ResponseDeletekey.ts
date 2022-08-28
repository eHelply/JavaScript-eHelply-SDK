/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.111
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.111
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
 * @interface ResponseDeletekey
 */
export interface ResponseDeletekey {
    /**
     * 
     * @type {string}
     * @memberof ResponseDeletekey
     */
    message?: string;
}

export function ResponseDeletekeyFromJSON(json: any): ResponseDeletekey {
    return ResponseDeletekeyFromJSONTyped(json, false);
}

export function ResponseDeletekeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseDeletekey {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function ResponseDeletekeyToJSON(value?: ResponseDeletekey | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
    };
}

