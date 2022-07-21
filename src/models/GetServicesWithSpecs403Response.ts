/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.96
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.96
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
 * @interface GetServicesWithSpecs403Response
 */
export interface GetServicesWithSpecs403Response {
    /**
     * 
     * @type {string}
     * @memberof GetServicesWithSpecs403Response
     */
    message?: string;
}

export function GetServicesWithSpecs403ResponseFromJSON(json: any): GetServicesWithSpecs403Response {
    return GetServicesWithSpecs403ResponseFromJSONTyped(json, false);
}

export function GetServicesWithSpecs403ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetServicesWithSpecs403Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function GetServicesWithSpecs403ResponseToJSON(value?: GetServicesWithSpecs403Response | null): any {
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

