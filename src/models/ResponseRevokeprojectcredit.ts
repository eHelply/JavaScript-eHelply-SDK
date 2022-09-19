/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.114
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.114
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
 * @interface ResponseRevokeprojectcredit
 */
export interface ResponseRevokeprojectcredit {
    /**
     * 
     * @type {string}
     * @memberof ResponseRevokeprojectcredit
     */
    message?: string;
}

export function ResponseRevokeprojectcreditFromJSON(json: any): ResponseRevokeprojectcredit {
    return ResponseRevokeprojectcreditFromJSONTyped(json, false);
}

export function ResponseRevokeprojectcreditFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseRevokeprojectcredit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function ResponseRevokeprojectcreditToJSON(value?: ResponseRevokeprojectcredit | null): any {
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

