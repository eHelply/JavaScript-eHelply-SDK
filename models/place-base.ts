/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.72
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.72
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { AddressBase } from './address-base';
import { ContactBase } from './contact-base';

/**
 * **:param** name                                **type:** string **:param** summary                             **type:** string or None  **:param** public                              **type:** bool or None  **:param** meta                                **type:** dict or None  **:param** addresses                           **type:** PlaceAddress or None  **:param** contact                             **type:** ContactBase or None
 * @export
 * @interface PlaceBase
 */
export interface PlaceBase {
    /**
     * 
     * @type {string}
     * @memberof PlaceBase
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof PlaceBase
     */
    'summary'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PlaceBase
     */
    'public'?: boolean;
    /**
     * 
     * @type {object}
     * @memberof PlaceBase
     */
    'meta'?: object;
    /**
     * 
     * @type {Array<AddressBase>}
     * @memberof PlaceBase
     */
    'addresses'?: Array<AddressBase>;
    /**
     * 
     * @type {ContactBase}
     * @memberof PlaceBase
     */
    'contact'?: ContactBase;
}

