/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.94
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.94
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Meta slugger
 * @export
 * @interface MetaSlugger
 */
export interface MetaSlugger {
    /**
     * 
     * @type {string}
     * @memberof MetaSlugger
     */
    name: string;
}

export function MetaSluggerFromJSON(json: any): MetaSlugger {
    return MetaSluggerFromJSONTyped(json, false);
}

export function MetaSluggerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetaSlugger {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function MetaSluggerToJSON(value?: MetaSlugger | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

