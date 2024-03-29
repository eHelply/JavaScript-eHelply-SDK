/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.118
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.118
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    DetailedMeta,
    DetailedMetaFromJSON,
    DetailedMetaFromJSONTyped,
    DetailedMetaToJSON,
} from './DetailedMeta';

/**
 * 
 * @export
 * @interface Detailed
 */
export interface Detailed {
    /**
     * 
     * @type {string}
     * @memberof Detailed
     */
    summaryUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof Detailed
     */
    descriptionUuid?: string;
}

export function DetailedFromJSON(json: any): Detailed {
    return DetailedFromJSONTyped(json, false);
}

export function DetailedFromJSONTyped(json: any, ignoreDiscriminator: boolean): Detailed {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'summaryUuid': !exists(json, 'summary_uuid') ? undefined : json['summary_uuid'],
        'descriptionUuid': !exists(json, 'description_uuid') ? undefined : json['description_uuid'],
    };
}

export function DetailedToJSON(value?: Detailed | null): any {
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

