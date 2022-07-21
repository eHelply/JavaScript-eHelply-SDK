/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.96
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.96
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
 * @interface BasicMeta
 */
export interface BasicMeta {
    /**
     * 
     * @type {string}
     * @memberof BasicMeta
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof BasicMeta
     */
    slug?: string;
}

export function BasicMetaFromJSON(json: any): BasicMeta {
    return BasicMetaFromJSONTyped(json, false);
}

export function BasicMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): BasicMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'slug': !exists(json, 'slug') ? undefined : json['slug'],
    };
}

export function BasicMetaToJSON(value?: BasicMeta | null): any {
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

