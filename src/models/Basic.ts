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
import type { BasicMeta } from './BasicMeta';
import {
    BasicMetaFromJSON,
    BasicMetaFromJSONTyped,
    BasicMetaToJSON,
} from './BasicMeta';

/**
 * 
 * @export
 * @interface Basic
 */
export interface Basic {
    /**
     * 
     * @type {string}
     * @memberof Basic
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Basic
     */
    slug?: string;
}

/**
 * Check if a given object implements the Basic interface.
 */
export function instanceOfBasic(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BasicFromJSON(json: any): Basic {
    return BasicFromJSONTyped(json, false);
}

export function BasicFromJSONTyped(json: any, ignoreDiscriminator: boolean): Basic {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'slug': !exists(json, 'slug') ? undefined : json['slug'],
    };
}

export function BasicToJSON(value?: Basic | null): any {
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

