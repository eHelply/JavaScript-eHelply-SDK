/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.107
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.107
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
 * @interface GetAppointment403Response
 */
export interface GetAppointment403Response {
    /**
     * 
     * @type {string}
     * @memberof GetAppointment403Response
     */
    message?: string;
}

export function GetAppointment403ResponseFromJSON(json: any): GetAppointment403Response {
    return GetAppointment403ResponseFromJSONTyped(json, false);
}

export function GetAppointment403ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetAppointment403Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function GetAppointment403ResponseToJSON(value?: GetAppointment403Response | null): any {
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

