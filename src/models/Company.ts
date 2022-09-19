/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.108
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.108
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    CompanyBase,
    CompanyBaseFromJSON,
    CompanyBaseFromJSONTyped,
    CompanyBaseToJSON,
} from './CompanyBase';
import {
    ContactBase,
    ContactBaseFromJSON,
    ContactBaseFromJSONTyped,
    ContactBaseToJSON,
} from './ContactBase';

/**
 * 
 * @export
 * @interface Company
 */
export interface Company {
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Company
     */
    summary?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Company
     */
    _public?: boolean;
    /**
     * 
     * @type {object}
     * @memberof Company
     */
    meta?: object;
    /**
     * 
     * @type {ContactBase}
     * @memberof Company
     */
    contact?: ContactBase;
}

export function CompanyFromJSON(json: any): Company {
    return CompanyFromJSONTyped(json, false);
}

export function CompanyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Company {
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

export function CompanyToJSON(value?: Company | null): any {
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

