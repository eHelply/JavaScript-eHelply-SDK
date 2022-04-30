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


import { ContactBase } from './contact-base';

/**
 * **:param** name                                **type:** string **:param** summary                             **type:** string or None  **:param** public                              **type:** bool or None  **:param** meta                                **type:** dict or None  **:param** contact                             **type:** ContactBase or None
 * @export
 * @interface CompanyBase
 */
export interface CompanyBase {
    /**
     * 
     * @type {string}
     * @memberof CompanyBase
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof CompanyBase
     */
    'summary'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CompanyBase
     */
    'public'?: boolean;
    /**
     * 
     * @type {object}
     * @memberof CompanyBase
     */
    'meta'?: object;
    /**
     * 
     * @type {ContactBase}
     * @memberof CompanyBase
     */
    'contact'?: ContactBase;
}

