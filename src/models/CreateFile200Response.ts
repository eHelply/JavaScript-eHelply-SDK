/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.122
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.122
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
 * @interface CreateFile200Response
 */
export interface CreateFile200Response {
    /**
     * 
     * @type {string}
     * @memberof CreateFile200Response
     */
    message?: string;
}

export function CreateFile200ResponseFromJSON(json: any): CreateFile200Response {
    return CreateFile200ResponseFromJSONTyped(json, false);
}

export function CreateFile200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateFile200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function CreateFile200ResponseToJSON(value?: CreateFile200Response | null): any {
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

