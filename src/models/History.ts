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
 * @interface History
 */
export interface History {
    /**
     * 
     * @type {number}
     * @memberof History
     */
    year: number;
    /**
     * 
     * @type {number}
     * @memberof History
     */
    month: number;
}

/**
 * Check if a given object implements the History interface.
 */
export function instanceOfHistory(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "year" in value;
    isInstance = isInstance && "month" in value;

    return isInstance;
}

export function HistoryFromJSON(json: any): History {
    return HistoryFromJSONTyped(json, false);
}

export function HistoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): History {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'year': json['year'],
        'month': json['month'],
    };
}

export function HistoryToJSON(value?: History | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'year': value.year,
        'month': value.month,
    };
}
