/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.97
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.97
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
 * @interface GetServiceSpecResponse
 */
export interface GetServiceSpecResponse {
    /**
     * 
     * @type {string}
     * @memberof GetServiceSpecResponse
     */
    contents: string;
}

/**
 * Check if a given object implements the GetServiceSpecResponse interface.
 */
export function instanceOfGetServiceSpecResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "contents" in value;

    return isInstance;
}

export function GetServiceSpecResponseFromJSON(json: any): GetServiceSpecResponse {
    return GetServiceSpecResponseFromJSONTyped(json, false);
}

export function GetServiceSpecResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetServiceSpecResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contents': json['contents'],
    };
}

export function GetServiceSpecResponseToJSON(value?: GetServiceSpecResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contents': value.contents,
    };
}

