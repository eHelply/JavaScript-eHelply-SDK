/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.114
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.114
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
 * @interface UpdateField200Response
 */
export interface UpdateField200Response {
    /**
     * 
     * @type {string}
     * @memberof UpdateField200Response
     */
    message?: string;
}

export function UpdateField200ResponseFromJSON(json: any): UpdateField200Response {
    return UpdateField200ResponseFromJSONTyped(json, false);
}

export function UpdateField200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateField200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function UpdateField200ResponseToJSON(value?: UpdateField200Response | null): any {
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

