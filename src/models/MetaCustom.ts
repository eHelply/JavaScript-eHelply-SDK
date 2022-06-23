/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.84
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.84
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    CustomList,
    CustomListFromJSON,
    CustomListFromJSONTyped,
    CustomListToJSON,
} from './CustomList';

/**
 * 
 * @export
 * @interface MetaCustom
 */
export interface MetaCustom {
    /**
     * 
     * @type {string}
     * @memberof MetaCustom
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof MetaCustom
     */
    description?: string;
    /**
     * 
     * @type {Array<CustomList>}
     * @memberof MetaCustom
     */
    list?: Array<CustomList>;
}

export function MetaCustomFromJSON(json: any): MetaCustom {
    return MetaCustomFromJSONTyped(json, false);
}

export function MetaCustomFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetaCustom {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'list': !exists(json, 'list') ? undefined : ((json['list'] as Array<any>).map(CustomListFromJSON)),
    };
}

export function MetaCustomToJSON(value?: MetaCustom | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'list': value.list === undefined ? undefined : ((value.list as Array<any>).map(CustomListToJSON)),
    };
}

