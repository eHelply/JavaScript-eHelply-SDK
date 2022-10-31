/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.116
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.116
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
 * @interface CreateSlug200Response
 */
export interface CreateSlug200Response {
    /**
     * 
     * @type {string}
     * @memberof CreateSlug200Response
     */
    message?: string;
}

export function CreateSlug200ResponseFromJSON(json: any): CreateSlug200Response {
    return CreateSlug200ResponseFromJSONTyped(json, false);
}

export function CreateSlug200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSlug200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function CreateSlug200ResponseToJSON(value?: CreateSlug200Response | null): any {
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

