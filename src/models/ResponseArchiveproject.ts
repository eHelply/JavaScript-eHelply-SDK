/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.112
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.112
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
 * @interface ResponseArchiveproject
 */
export interface ResponseArchiveproject {
    /**
     * 
     * @type {string}
     * @memberof ResponseArchiveproject
     */
    message?: string;
}

export function ResponseArchiveprojectFromJSON(json: any): ResponseArchiveproject {
    return ResponseArchiveprojectFromJSONTyped(json, false);
}

export function ResponseArchiveprojectFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseArchiveproject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function ResponseArchiveprojectToJSON(value?: ResponseArchiveproject | null): any {
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

