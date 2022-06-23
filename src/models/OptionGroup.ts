/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.83
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.83
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Selection,
    SelectionFromJSON,
    SelectionFromJSONTyped,
    SelectionToJSON,
} from './Selection';

/**
 * 
 * @export
 * @interface OptionGroup
 */
export interface OptionGroup {
    /**
     * 
     * @type {string}
     * @memberof OptionGroup
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof OptionGroup
     */
    type?: string;
    /**
     * 
     * @type {Array<Selection>}
     * @memberof OptionGroup
     */
    selections?: Array<Selection>;
}

export function OptionGroupFromJSON(json: any): OptionGroup {
    return OptionGroupFromJSONTyped(json, false);
}

export function OptionGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): OptionGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'selections': !exists(json, 'selections') ? undefined : ((json['selections'] as Array<any>).map(SelectionFromJSON)),
    };
}

export function OptionGroupToJSON(value?: OptionGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'type': value.type,
        'selections': value.selections === undefined ? undefined : ((value.selections as Array<any>).map(SelectionToJSON)),
    };
}

