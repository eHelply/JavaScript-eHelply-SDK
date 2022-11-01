/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.121
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.121
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
 * @interface UpdateMeta200Response
 */
export interface UpdateMeta200Response {
    /**
     * 
     * @type {string}
     * @memberof UpdateMeta200Response
     */
    message?: string;
}

export function UpdateMeta200ResponseFromJSON(json: any): UpdateMeta200Response {
    return UpdateMeta200ResponseFromJSONTyped(json, false);
}

export function UpdateMeta200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateMeta200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function UpdateMeta200ResponseToJSON(value?: UpdateMeta200Response | null): any {
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

