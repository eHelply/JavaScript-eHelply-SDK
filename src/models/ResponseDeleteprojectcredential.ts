/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.118
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.118
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
 * @interface ResponseDeleteprojectcredential
 */
export interface ResponseDeleteprojectcredential {
    /**
     * 
     * @type {string}
     * @memberof ResponseDeleteprojectcredential
     */
    message?: string;
}

export function ResponseDeleteprojectcredentialFromJSON(json: any): ResponseDeleteprojectcredential {
    return ResponseDeleteprojectcredentialFromJSONTyped(json, false);
}

export function ResponseDeleteprojectcredentialFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResponseDeleteprojectcredential {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function ResponseDeleteprojectcredentialToJSON(value?: ResponseDeleteprojectcredential | null): any {
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

