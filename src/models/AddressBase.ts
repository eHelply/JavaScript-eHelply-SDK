/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.120
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.120
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * **:param** address_type                        **type:** string or None
 * 
 * **:param** address_line_1                      **type:** string or None
 * 
 * **:param** address_line_2                      **type:** string or None
 * 
 * **:param** postal_zip_code                     **type:** string or None
 * 
 * **:param** city                                **type:** string or None
 * 
 * **:param** province_state                      **type:** string or None
 * 
 * **:param** country                             **type:** string or None
 * 
 * **:param** lat                                 **type:** string or None
 * 
 * **:param** lng                                 **type:** string or None
 * @export
 * @interface AddressBase
 */
export interface AddressBase {
    /**
     * 
     * @type {string}
     * @memberof AddressBase
     */
    addressType?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressBase
     */
    addressLine1?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressBase
     */
    addressLine2?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressBase
     */
    postalZipCode?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressBase
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressBase
     */
    provinceState?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressBase
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressBase
     */
    lat?: string;
    /**
     * 
     * @type {string}
     * @memberof AddressBase
     */
    lng?: string;
}

export function AddressBaseFromJSON(json: any): AddressBase {
    return AddressBaseFromJSONTyped(json, false);
}

export function AddressBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addressType': !exists(json, 'address_type') ? undefined : json['address_type'],
        'addressLine1': !exists(json, 'address_line_1') ? undefined : json['address_line_1'],
        'addressLine2': !exists(json, 'address_line_2') ? undefined : json['address_line_2'],
        'postalZipCode': !exists(json, 'postal_zip_code') ? undefined : json['postal_zip_code'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'provinceState': !exists(json, 'province_state') ? undefined : json['province_state'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'lat': !exists(json, 'lat') ? undefined : json['lat'],
        'lng': !exists(json, 'lng') ? undefined : json['lng'],
    };
}

export function AddressBaseToJSON(value?: AddressBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address_type': value.addressType,
        'address_line_1': value.addressLine1,
        'address_line_2': value.addressLine2,
        'postal_zip_code': value.postalZipCode,
        'city': value.city,
        'province_state': value.provinceState,
        'country': value.country,
        'lat': value.lat,
        'lng': value.lng,
    };
}

