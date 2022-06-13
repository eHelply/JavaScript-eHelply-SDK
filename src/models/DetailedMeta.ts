/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.89
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.89
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
 * @interface DetailedMeta
 */
export interface DetailedMeta {
    /**
     * 
     * @type {string}
     * @memberof DetailedMeta
     */
    summaryUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof DetailedMeta
     */
    descriptionUuid?: string;
}

export function DetailedMetaFromJSON(json: any): DetailedMeta {
    return DetailedMetaFromJSONTyped(json, false);
}

export function DetailedMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): DetailedMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'summaryUuid': !exists(json, 'summary_uuid') ? undefined : json['summary_uuid'],
        'descriptionUuid': !exists(json, 'description_uuid') ? undefined : json['description_uuid'],
    };
}

export function DetailedMetaToJSON(value?: DetailedMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'summary_uuid': value.summaryUuid,
        'description_uuid': value.descriptionUuid,
    };
}

