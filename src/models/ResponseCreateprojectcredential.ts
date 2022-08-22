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
 * @interface ResponseCreateprojectcredential
 */
export interface ResponseCreateprojectcredential {
    /**
     * 
     * @type {string}
     * @memberof ResponseCreateprojectcredential
     */
    message?: string;
}

/**
 * Check if a given object implements the ResponseCreateprojectcredential interface.
 */
export function instanceOfResponseCreateprojectcredential(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResponseCreateprojectcredentialFromJSON(json: any): ResponseCreateprojectcredential {
    return ResponseCreateprojectcredentialFromJSONTyped(json, false);
}

export function ResponseCreateprojectcredentialFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseCreateprojectcredential {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function ResponseCreateprojectcredentialToJSON(value?: ResponseCreateprojectcredential | null): any {
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

