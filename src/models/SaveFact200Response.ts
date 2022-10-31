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
 * @interface SaveFact200Response
 */
export interface SaveFact200Response {
    /**
     * 
     * @type {string}
     * @memberof SaveFact200Response
     */
    message?: string;
}

export function SaveFact200ResponseFromJSON(json: any): SaveFact200Response {
    return SaveFact200ResponseFromJSONTyped(json, false);
}

export function SaveFact200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SaveFact200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function SaveFact200ResponseToJSON(value?: SaveFact200Response | null): any {
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

