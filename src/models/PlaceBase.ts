/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.75
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.75
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    AddressBase,
    AddressBaseFromJSON,
    AddressBaseFromJSONTyped,
    AddressBaseToJSON,
} from './AddressBase';
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
 * **:param** addresses                           **type:** PlaceAddress or None
 * 
 * **:param** contact                             **type:** ContactBase or None
 * @export
 * @interface PlaceBase
 */
export interface PlaceBase {
    /**
     * 
     * @type {string}
     * @memberof PlaceBase
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof PlaceBase
     */
    summary?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PlaceBase
     */
    _public?: boolean;
    /**
     * 
     * @type {object}
     * @memberof PlaceBase
     */
    meta?: object;
    /**
     * 
     * @type {Array<AddressBase>}
     * @memberof PlaceBase
     */
    addresses?: Array<AddressBase>;
    /**
     * 
     * @type {ContactBase}
     * @memberof PlaceBase
     */
    contact?: ContactBase;
}

export function PlaceBaseFromJSON(json: any): PlaceBase {
    return PlaceBaseFromJSONTyped(json, false);
}

export function PlaceBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlaceBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
        '_public': !exists(json, 'public') ? undefined : json['public'],
        'meta': !exists(json, 'meta') ? undefined : json['meta'],
        'addresses': !exists(json, 'addresses') ? undefined : ((json['addresses'] as Array<any>).map(AddressBaseFromJSON)),
        'contact': !exists(json, 'contact') ? undefined : ContactBaseFromJSON(json['contact']),
    };
}

export function PlaceBaseToJSON(value?: PlaceBase | null): any {
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
        'addresses': value.addresses === undefined ? undefined : ((value.addresses as Array<any>).map(AddressBaseToJSON)),
        'contact': ContactBaseToJSON(value.contact),
    };
}

