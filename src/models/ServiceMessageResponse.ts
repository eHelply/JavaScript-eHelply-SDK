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
 * @interface ServiceMessageResponse
 */
export interface ServiceMessageResponse {
    /**
     * 
     * @type {string}
     * @memberof ServiceMessageResponse
     */
    message: string;
}

/**
 * Check if a given object implements the ServiceMessageResponse interface.
 */
export function instanceOfServiceMessageResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "message" in value;

    return isInstance;
}

export function ServiceMessageResponseFromJSON(json: any): ServiceMessageResponse {
    return ServiceMessageResponseFromJSONTyped(json, false);
}

export function ServiceMessageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceMessageResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': json['message'],
    };
}

export function ServiceMessageResponseToJSON(value?: ServiceMessageResponse | null): any {
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

