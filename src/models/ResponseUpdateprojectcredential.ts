/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.105
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.105
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
 * @interface ResponseUpdateprojectcredential
 */
export interface ResponseUpdateprojectcredential {
    /**
     * 
     * @type {string}
     * @memberof ResponseUpdateprojectcredential
     */
    message?: string;
}

export function ResponseUpdateprojectcredentialFromJSON(json: any): ResponseUpdateprojectcredential {
    return ResponseUpdateprojectcredentialFromJSONTyped(json, false);
}

export function ResponseUpdateprojectcredentialFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseUpdateprojectcredential {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function ResponseUpdateprojectcredentialToJSON(value?: ResponseUpdateprojectcredential | null): any {
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

