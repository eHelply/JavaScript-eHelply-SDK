/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.120
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.120
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
 * @interface ResponseCreateprojectinvoice
 */
export interface ResponseCreateprojectinvoice {
    /**
     * 
     * @type {string}
     * @memberof ResponseCreateprojectinvoice
     */
    message?: string;
}

export function ResponseCreateprojectinvoiceFromJSON(json: any): ResponseCreateprojectinvoice {
    return ResponseCreateprojectinvoiceFromJSONTyped(json, false);
}

export function ResponseCreateprojectinvoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseCreateprojectinvoice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function ResponseCreateprojectinvoiceToJSON(value?: ResponseCreateprojectinvoice | null): any {
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

