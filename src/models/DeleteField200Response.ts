/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.120
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.120
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
 * @interface DeleteField200Response
 */
export interface DeleteField200Response {
    /**
     * 
     * @type {string}
     * @memberof DeleteField200Response
     */
    message?: string;
}

export function DeleteField200ResponseFromJSON(json: any): DeleteField200Response {
    return DeleteField200ResponseFromJSONTyped(json, false);
}

export function DeleteField200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteField200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function DeleteField200ResponseToJSON(value?: DeleteField200Response | null): any {
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

