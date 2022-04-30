/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.87
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.87
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ProductBase
 */
export interface ProductBase {
    /**
     * 
     * @type {object}
     * @memberof ProductBase
     */
    'meta_data'?: object;
    /**
     * 
     * @type {string}
     * @memberof ProductBase
     */
    'collection_uuid'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductBase
     */
    'review_group_uuid'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductBase
     */
    'addons'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ProductBase
     */
    'name'?: string;
    /**
     * 
     * @type {number}
     * @memberof ProductBase
     */
    'price': number;
    /**
     * 
     * @type {number}
     * @memberof ProductBase
     */
    'quantity_for_public': number;
}

