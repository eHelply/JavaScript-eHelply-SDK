/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.111
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.111
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ContactBase,
    ContactBaseFromJSON,
    ContactBaseFromJSONTyped,
    ContactBaseToJSON,
} from './ContactBase';

/**
 * **:param** name                                **type:** string
 * **:param** summary                             **type:** string or None
 * 
 * **:param** public                              **type:** bool or None
 * 
 * **:param** meta                                **type:** dict or None
 * 
 * **:param** contact                             **type:** ContactBase or None
 * @export
 * @interface CompanyBase
 */
export interface CompanyBase {
    /**
     * 
     * @type {string}
     * @memberof CompanyBase
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CompanyBase
     */
    summary?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CompanyBase
     */
    _public?: boolean;
    /**
     * 
     * @type {object}
     * @memberof CompanyBase
     */
    meta?: object;
    /**
     * 
     * @type {ContactBase}
     * @memberof CompanyBase
     */
    contact?: ContactBase;
}

export function CompanyBaseFromJSON(json: any): CompanyBase {
    return CompanyBaseFromJSONTyped(json, false);
}

export function CompanyBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompanyBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
        '_public': !exists(json, 'public') ? undefined : json['public'],
        'meta': !exists(json, 'meta') ? undefined : json['meta'],
        'contact': !exists(json, 'contact') ? undefined : ContactBaseFromJSON(json['contact']),
    };
}

export function CompanyBaseToJSON(value?: CompanyBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'summary': value.summary,
        'public': value._public,
        'meta': value.meta,
        'contact': ContactBaseToJSON(value.contact),
    };
}

