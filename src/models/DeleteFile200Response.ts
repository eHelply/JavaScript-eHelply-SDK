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
 * @interface DeleteFile200Response
 */
export interface DeleteFile200Response {
    /**
     * 
     * @type {string}
     * @memberof DeleteFile200Response
     */
    message?: string;
}

export function DeleteFile200ResponseFromJSON(json: any): DeleteFile200Response {
    return DeleteFile200ResponseFromJSONTyped(json, false);
}

export function DeleteFile200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteFile200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function DeleteFile200ResponseToJSON(value?: DeleteFile200Response | null): any {
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

