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
 * 
 * @export
 * @interface ResponseGetservicespec
 */
export interface ResponseGetservicespec {
    /**
     * 
     * @type {string}
     * @memberof ResponseGetservicespec
     */
    message?: string;
}

export function ResponseGetservicespecFromJSON(json: any): ResponseGetservicespec {
    return ResponseGetservicespecFromJSONTyped(json, false);
}

export function ResponseGetservicespecFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseGetservicespec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function ResponseGetservicespecToJSON(value?: ResponseGetservicespec | null): any {
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

