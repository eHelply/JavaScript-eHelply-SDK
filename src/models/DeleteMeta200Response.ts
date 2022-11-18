/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.118
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.118
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
 * @interface DeleteMeta200Response
 */
export interface DeleteMeta200Response {
    /**
     * 
     * @type {string}
     * @memberof DeleteMeta200Response
     */
    message?: string;
}

export function DeleteMeta200ResponseFromJSON(json: any): DeleteMeta200Response {
    return DeleteMeta200ResponseFromJSONTyped(json, false);
}

export function DeleteMeta200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteMeta200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function DeleteMeta200ResponseToJSON(value?: DeleteMeta200Response | null): any {
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

