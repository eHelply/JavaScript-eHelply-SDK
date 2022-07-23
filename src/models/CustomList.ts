/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.90
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.90
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
 * @interface CustomList
 */
export interface CustomList {
    /**
     * 
     * @type {string}
     * @memberof CustomList
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomList
     */
    description?: string;
}

/**
 * Check if a given object implements the CustomList interface.
 */
export function instanceOfCustomList(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomListFromJSON(json: any): CustomList {
    return CustomListFromJSONTyped(json, false);
}

export function CustomListFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function CustomListToJSON(value?: CustomList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
    };
}

