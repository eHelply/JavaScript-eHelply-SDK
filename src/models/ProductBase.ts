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
    metaData?: object;
    /**
     * 
     * @type {string}
     * @memberof ProductBase
     */
    collectionUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductBase
     */
    reviewGroupUuid?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductBase
     */
    addons?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ProductBase
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof ProductBase
     */
    price: number;
    /**
     * 
     * @type {number}
     * @memberof ProductBase
     */
    quantityForPublic: number;
}

export function ProductBaseFromJSON(json: any): ProductBase {
    return ProductBaseFromJSONTyped(json, false);
}

export function ProductBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'metaData': !exists(json, 'meta_data') ? undefined : json['meta_data'],
        'collectionUuid': !exists(json, 'collection_uuid') ? undefined : json['collection_uuid'],
        'reviewGroupUuid': !exists(json, 'review_group_uuid') ? undefined : json['review_group_uuid'],
        'addons': !exists(json, 'addons') ? undefined : json['addons'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'price': json['price'],
        'quantityForPublic': json['quantity_for_public'],
    };
}

export function ProductBaseToJSON(value?: ProductBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'meta_data': value.metaData,
        'collection_uuid': value.collectionUuid,
        'review_group_uuid': value.reviewGroupUuid,
        'addons': value.addons,
        'name': value.name,
        'price': value.price,
        'quantity_for_public': value.quantityForPublic,
    };
}

