/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.108
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.108
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
 * @interface GetServiceSpecsResponse
 */
export interface GetServiceSpecsResponse {
    /**
     * 
     * @type {Array<string>}
     * @memberof GetServiceSpecsResponse
     */
    specs: Array<string>;
}

export function GetServiceSpecsResponseFromJSON(json: any): GetServiceSpecsResponse {
    return GetServiceSpecsResponseFromJSONTyped(json, false);
}

export function GetServiceSpecsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetServiceSpecsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'specs': json['specs'],
    };
}

export function GetServiceSpecsResponseToJSON(value?: GetServiceSpecsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'specs': value.specs,
    };
}

