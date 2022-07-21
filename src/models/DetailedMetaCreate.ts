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
 * Detailed meta based on Notes
 * @export
 * @interface DetailedMetaCreate
 */
export interface DetailedMetaCreate {
    /**
     * 
     * @type {string}
     * @memberof DetailedMetaCreate
     */
    summary?: string;
    /**
     * 
     * @type {string}
     * @memberof DetailedMetaCreate
     */
    description?: string;
}

export function DetailedMetaCreateFromJSON(json: any): DetailedMetaCreate {
    return DetailedMetaCreateFromJSONTyped(json, false);
}

export function DetailedMetaCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): DetailedMetaCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function DetailedMetaCreateToJSON(value?: DetailedMetaCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'summary': value.summary,
        'description': value.description,
    };
}

