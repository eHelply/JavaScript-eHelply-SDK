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
 * @interface UpdateNote200Response
 */
export interface UpdateNote200Response {
    /**
     * 
     * @type {string}
     * @memberof UpdateNote200Response
     */
    message?: string;
}

export function UpdateNote200ResponseFromJSON(json: any): UpdateNote200Response {
    return UpdateNote200ResponseFromJSONTyped(json, false);
}

export function UpdateNote200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateNote200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function UpdateNote200ResponseToJSON(value?: UpdateNote200Response | null): any {
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

