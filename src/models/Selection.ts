/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.108
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.108
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Selection Model
 * @export
 * @interface Selection
 */
export interface Selection {
    /**
     * 
     * @type {string}
     * @memberof Selection
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof Selection
     */
    value?: number;
    /**
     * 
     * @type {string}
     * @memberof Selection
     */
    icon?: string;
}

export function SelectionFromJSON(json: any): Selection {
    return SelectionFromJSONTyped(json, false);
}

export function SelectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Selection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
        'icon': !exists(json, 'icon') ? undefined : json['icon'],
    };
}

export function SelectionToJSON(value?: Selection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'value': value.value,
        'icon': value.icon,
    };
}

