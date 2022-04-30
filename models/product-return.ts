/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.73
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.73
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ProductReturn
 */
export interface ProductReturn {
    /**
     * 
     * @type {object}
     * @memberof ProductReturn
     */
    'meta_data'?: object;
    /**
     * 
     * @type {string}
     * @memberof ProductReturn
     */
    'collection_uuid'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductReturn
     */
    'review_group_uuid'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductReturn
     */
    'addons'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ProductReturn
     */
    'name'?: string;
    /**
     * 
     * @type {number}
     * @memberof ProductReturn
     */
    'price': number;
    /**
     * 
     * @type {number}
     * @memberof ProductReturn
     */
    'quantity_for_public': number;
    /**
     * 
     * @type {string}
     * @memberof ProductReturn
     */
    'uuid': string;
    /**
     * 
     * @type {string}
     * @memberof ProductReturn
     */
    'meta_uuid'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductReturn
     */
    'project_uuid': string;
    /**
     * 
     * @type {string}
     * @memberof ProductReturn
     */
    'catalog_uuid'?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof ProductReturn
     */
    'addon_list'?: Array<object>;
    /**
     * 
     * @type {string}
     * @memberof ProductReturn
     */
    'created_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductReturn
     */
    'updated_at'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductReturn
     */
    'deleted_at'?: string;
}

