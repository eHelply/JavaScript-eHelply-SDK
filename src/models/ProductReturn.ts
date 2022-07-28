/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.106
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.106
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
 * @interface ProductReturn
 */
export interface ProductReturn {
    /**
     * 
     * @type {object}
     * @memberof ProductReturn
     */
    metaData?: object;
    /**
     * 
     * @type {string}
     * @memberof ProductReturn
     */
    collectionUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductReturn
     */
    reviewGroupUuid?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProductReturn
     */
    addons?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ProductReturn
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof ProductReturn
     */
    price: number;
    /**
     * 
     * @type {number}
     * @memberof ProductReturn
     */
    quantityForPublic: number;
    /**
     * 
     * @type {string}
     * @memberof ProductReturn
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof ProductReturn
     */
    metaUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductReturn
     */
    projectUuid: string;
    /**
     * 
     * @type {string}
     * @memberof ProductReturn
     */
    catalogUuid?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof ProductReturn
     */
    addonList?: Array<object>;
    /**
     * 
     * @type {string}
     * @memberof ProductReturn
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductReturn
     */
    updatedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof ProductReturn
     */
    deletedAt?: string;
}

/**
 * Check if a given object implements the ProductReturn interface.
 */
export function instanceOfProductReturn(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "price" in value;
    isInstance = isInstance && "quantityForPublic" in value;
    isInstance = isInstance && "uuid" in value;
    isInstance = isInstance && "projectUuid" in value;

    return isInstance;
}

export function ProductReturnFromJSON(json: any): ProductReturn {
    return ProductReturnFromJSONTyped(json, false);
}

export function ProductReturnFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductReturn {
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
        'uuid': json['uuid'],
        'metaUuid': !exists(json, 'meta_uuid') ? undefined : json['meta_uuid'],
        'projectUuid': json['project_uuid'],
        'catalogUuid': !exists(json, 'catalog_uuid') ? undefined : json['catalog_uuid'],
        'addonList': !exists(json, 'addon_list') ? undefined : json['addon_list'],
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : json['updated_at'],
        'deletedAt': !exists(json, 'deleted_at') ? undefined : json['deleted_at'],
    };
}

export function ProductReturnToJSON(value?: ProductReturn | null): any {
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
        'uuid': value.uuid,
        'meta_uuid': value.metaUuid,
        'project_uuid': value.projectUuid,
        'catalog_uuid': value.catalogUuid,
        'addon_list': value.addonList,
        'created_at': value.createdAt,
        'updated_at': value.updatedAt,
        'deleted_at': value.deletedAt,
    };
}

