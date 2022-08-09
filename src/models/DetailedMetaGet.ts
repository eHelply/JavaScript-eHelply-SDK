/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.107
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.107
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
 * @interface DetailedMetaGet
 */
export interface DetailedMetaGet {
    /**
     * 
     * @type {string}
     * @memberof DetailedMetaGet
     */
    summary?: string;
    /**
     * 
     * @type {string}
     * @memberof DetailedMetaGet
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof DetailedMetaGet
     */
    summaryHistory?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof DetailedMetaGet
     */
    descriptionHistory?: Array<string>;
}

/**
 * Check if a given object implements the DetailedMetaGet interface.
 */
export function instanceOfDetailedMetaGet(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DetailedMetaGetFromJSON(json: any): DetailedMetaGet {
    return DetailedMetaGetFromJSONTyped(json, false);
}

export function DetailedMetaGetFromJSONTyped(json: any, ignoreDiscriminator: boolean): DetailedMetaGet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'summaryHistory': !exists(json, 'summary_history') ? undefined : json['summary_history'],
        'descriptionHistory': !exists(json, 'description_history') ? undefined : json['description_history'],
    };
}

export function DetailedMetaGetToJSON(value?: DetailedMetaGet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'summary': value.summary,
        'description': value.description,
        'summary_history': value.summaryHistory,
        'description_history': value.descriptionHistory,
    };
}

