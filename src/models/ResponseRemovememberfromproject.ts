/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.89
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.89
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
 * @interface ResponseRemovememberfromproject
 */
export interface ResponseRemovememberfromproject {
    /**
     * 
     * @type {string}
     * @memberof ResponseRemovememberfromproject
     */
    message?: string;
}

export function ResponseRemovememberfromprojectFromJSON(json: any): ResponseRemovememberfromproject {
    return ResponseRemovememberfromprojectFromJSONTyped(json, false);
}

export function ResponseRemovememberfromprojectFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseRemovememberfromproject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function ResponseRemovememberfromprojectToJSON(value?: ResponseRemovememberfromproject | null): any {
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

