/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.113
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.113
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
 * @interface Slugger
 */
export interface Slugger {
    /**
     * 
     * @type {string}
     * @memberof Slugger
     */
    name: string;
}

export function SluggerFromJSON(json: any): Slugger {
    return SluggerFromJSONTyped(json, false);
}

export function SluggerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Slugger {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function SluggerToJSON(value?: Slugger | null): any {
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

