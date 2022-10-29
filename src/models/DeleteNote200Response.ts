/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.119
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.119
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
 * @interface DeleteNote200Response
 */
export interface DeleteNote200Response {
    /**
     * 
     * @type {string}
     * @memberof DeleteNote200Response
     */
    message?: string;
}

export function DeleteNote200ResponseFromJSON(json: any): DeleteNote200Response {
    return DeleteNote200ResponseFromJSONTyped(json, false);
}

export function DeleteNote200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteNote200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function DeleteNote200ResponseToJSON(value?: DeleteNote200Response | null): any {
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

