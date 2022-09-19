/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.115
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.115
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ContactMethod,
    ContactMethodFromJSON,
    ContactMethodFromJSONTyped,
    ContactMethodToJSON,
} from './ContactMethod';

/**
 * **:param** phones                              **type:** List[ContactKeys] or None
 * 
 * **:param** email                               **type:** string or None
 * 
 * **:param** website                             **type:** string or None
 * 
 * **:param** socials                             **type:** List[ContactKeys] or None
 * @export
 * @interface ContactBase
 */
export interface ContactBase {
    /**
     * 
     * @type {Array<ContactMethod>}
     * @memberof ContactBase
     */
    phones?: Array<ContactMethod>;
    /**
     * 
     * @type {string}
     * @memberof ContactBase
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof ContactBase
     */
    website?: string;
    /**
     * 
     * @type {Array<ContactMethod>}
     * @memberof ContactBase
     */
    socials?: Array<ContactMethod>;
}

export function ContactBaseFromJSON(json: any): ContactBase {
    return ContactBaseFromJSONTyped(json, false);
}

export function ContactBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContactBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'phones': !exists(json, 'phones') ? undefined : ((json['phones'] as Array<any>).map(ContactMethodFromJSON)),
        'email': !exists(json, 'email') ? undefined : json['email'],
        'website': !exists(json, 'website') ? undefined : json['website'],
        'socials': !exists(json, 'socials') ? undefined : ((json['socials'] as Array<any>).map(ContactMethodFromJSON)),
    };
}

export function ContactBaseToJSON(value?: ContactBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'phones': value.phones === undefined ? undefined : ((value.phones as Array<any>).map(ContactMethodToJSON)),
        'email': value.email,
        'website': value.website,
        'socials': value.socials === undefined ? undefined : ((value.socials as Array<any>).map(ContactMethodToJSON)),
    };
}

