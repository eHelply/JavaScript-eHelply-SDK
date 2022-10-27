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
 * @interface CreateField200Response
 */
export interface CreateField200Response {
    /**
     * 
     * @type {string}
     * @memberof CreateField200Response
     */
    message?: string;
}

export function CreateField200ResponseFromJSON(json: any): CreateField200Response {
    return CreateField200ResponseFromJSONTyped(json, false);
}

export function CreateField200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateField200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function CreateField200ResponseToJSON(value?: CreateField200Response | null): any {
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

