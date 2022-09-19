/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.108
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.108
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
 * @interface ResponseDeleteusagetype
 */
export interface ResponseDeleteusagetype {
    /**
     * 
     * @type {string}
     * @memberof ResponseDeleteusagetype
     */
    message?: string;
}

export function ResponseDeleteusagetypeFromJSON(json: any): ResponseDeleteusagetype {
    return ResponseDeleteusagetypeFromJSONTyped(json, false);
}

export function ResponseDeleteusagetypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseDeleteusagetype {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function ResponseDeleteusagetypeToJSON(value?: ResponseDeleteusagetype | null): any {
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

