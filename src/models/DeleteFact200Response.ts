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
 * @interface DeleteFact200Response
 */
export interface DeleteFact200Response {
    /**
     * 
     * @type {string}
     * @memberof DeleteFact200Response
     */
    message?: string;
}

export function DeleteFact200ResponseFromJSON(json: any): DeleteFact200Response {
    return DeleteFact200ResponseFromJSONTyped(json, false);
}

export function DeleteFact200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteFact200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function DeleteFact200ResponseToJSON(value?: DeleteFact200Response | null): any {
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

