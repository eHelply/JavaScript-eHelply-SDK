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
 * @interface CreateMeta200Response
 */
export interface CreateMeta200Response {
    /**
     * 
     * @type {string}
     * @memberof CreateMeta200Response
     */
    message?: string;
}

export function CreateMeta200ResponseFromJSON(json: any): CreateMeta200Response {
    return CreateMeta200ResponseFromJSONTyped(json, false);
}

export function CreateMeta200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateMeta200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function CreateMeta200ResponseToJSON(value?: CreateMeta200Response | null): any {
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

