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
 * @interface ResponseAddmembertoproject
 */
export interface ResponseAddmembertoproject {
    /**
     * 
     * @type {string}
     * @memberof ResponseAddmembertoproject
     */
    message?: string;
}

export function ResponseAddmembertoprojectFromJSON(json: any): ResponseAddmembertoproject {
    return ResponseAddmembertoprojectFromJSONTyped(json, false);
}

export function ResponseAddmembertoprojectFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseAddmembertoproject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function ResponseAddmembertoprojectToJSON(value?: ResponseAddmembertoproject | null): any {
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

