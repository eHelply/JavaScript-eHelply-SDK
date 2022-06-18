/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.91
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.91
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Date based meta
 * @export
 * @interface DatesMeta
 */
export interface DatesMeta {
    /**
     * 
     * @type {string}
     * @memberof DatesMeta
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof DatesMeta
     */
    updatedAt?: string;
}

export function DatesMetaFromJSON(json: any): DatesMeta {
    return DatesMetaFromJSONTyped(json, false);
}

export function DatesMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatesMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : json['updated_at'],
    };
}

export function DatesMetaToJSON(value?: DatesMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_at': value.createdAt,
        'updated_at': value.updatedAt,
    };
}

