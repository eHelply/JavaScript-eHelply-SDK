/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.107
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.107
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
 * @interface ResponseGeneratetoken
 */
export interface ResponseGeneratetoken {
    /**
     * 
     * @type {string}
     * @memberof ResponseGeneratetoken
     */
    message?: string;
}

export function ResponseGeneratetokenFromJSON(json: any): ResponseGeneratetoken {
    return ResponseGeneratetokenFromJSONTyped(json, false);
}

export function ResponseGeneratetokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseGeneratetoken {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function ResponseGeneratetokenToJSON(value?: ResponseGeneratetoken | null): any {
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

