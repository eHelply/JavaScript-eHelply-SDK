/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.110
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.110
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
 * @interface UpdateFile200Response
 */
export interface UpdateFile200Response {
    /**
     * 
     * @type {string}
     * @memberof UpdateFile200Response
     */
    message?: string;
}

export function UpdateFile200ResponseFromJSON(json: any): UpdateFile200Response {
    return UpdateFile200ResponseFromJSONTyped(json, false);
}

export function UpdateFile200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateFile200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function UpdateFile200ResponseToJSON(value?: UpdateFile200Response | null): any {
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

