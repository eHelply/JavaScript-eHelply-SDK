/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.99
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.99
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
 * @interface ResponseCreatekey
 */
export interface ResponseCreatekey {
    /**
     * 
     * @type {string}
     * @memberof ResponseCreatekey
     */
    message?: string;
}

/**
 * Check if a given object implements the ResponseCreatekey interface.
 */
export function instanceOfResponseCreatekey(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResponseCreatekeyFromJSON(json: any): ResponseCreatekey {
    return ResponseCreatekeyFromJSONTyped(json, false);
}

export function ResponseCreatekeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseCreatekey {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function ResponseCreatekeyToJSON(value?: ResponseCreatekey | null): any {
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

