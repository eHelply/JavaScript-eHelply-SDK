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
 * Basic meta
 * @export
 * @interface BasicMetaCreate
 */
export interface BasicMetaCreate {
    /**
     * 
     * @type {string}
     * @memberof BasicMetaCreate
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof BasicMetaCreate
     */
    slug?: boolean;
}

/**
 * Check if a given object implements the BasicMetaCreate interface.
 */
export function instanceOfBasicMetaCreate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BasicMetaCreateFromJSON(json: any): BasicMetaCreate {
    return BasicMetaCreateFromJSONTyped(json, false);
}

export function BasicMetaCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): BasicMetaCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'slug': !exists(json, 'slug') ? undefined : json['slug'],
    };
}

export function BasicMetaCreateToJSON(value?: BasicMetaCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'slug': value.slug,
    };
}

