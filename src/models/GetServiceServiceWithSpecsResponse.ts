/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.109
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.109
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
 * @interface GetServiceServiceWithSpecsResponse
 */
export interface GetServiceServiceWithSpecsResponse {
    /**
     * 
     * @type {Array<string>}
     * @memberof GetServiceServiceWithSpecsResponse
     */
    services: Array<string>;
}

/**
 * Check if a given object implements the GetServiceServiceWithSpecsResponse interface.
 */
export function instanceOfGetServiceServiceWithSpecsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "services" in value;

    return isInstance;
}

export function GetServiceServiceWithSpecsResponseFromJSON(json: any): GetServiceServiceWithSpecsResponse {
    return GetServiceServiceWithSpecsResponseFromJSONTyped(json, false);
}

export function GetServiceServiceWithSpecsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetServiceServiceWithSpecsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'services': json['services'],
    };
}

export function GetServiceServiceWithSpecsResponseToJSON(value?: GetServiceServiceWithSpecsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'services': value.services,
    };
}

