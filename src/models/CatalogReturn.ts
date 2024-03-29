/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.118
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.118
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
 * @interface CatalogReturn
 */
export interface CatalogReturn {
    /**
     * 
     * @type {object}
     * @memberof CatalogReturn
     */
    metaData?: object;
    /**
     * 
     * @type {string}
     * @memberof CatalogReturn
     */
    name?: string;
    /**
     * 
     * @type {object}
     * @memberof CatalogReturn
     */
    featured?: object;
    /**
     * 
     * @type {object}
     * @memberof CatalogReturn
     */
    subCatalogs?: object;
    /**
     * 
     * @type {string}
     * @memberof CatalogReturn
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof CatalogReturn
     */
    metaUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof CatalogReturn
     */
    projectUuid: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CatalogReturn
     */
    productUuids?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CatalogReturn
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof CatalogReturn
     */
    updatedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof CatalogReturn
     */
    deletedAt?: string;
}

export function CatalogReturnFromJSON(json: any): CatalogReturn {
    return CatalogReturnFromJSONTyped(json, false);
}

export function CatalogReturnFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogReturn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'metaData': !exists(json, 'meta_data') ? undefined : json['meta_data'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'featured': !exists(json, 'featured') ? undefined : json['featured'],
        'subCatalogs': !exists(json, 'sub_catalogs') ? undefined : json['sub_catalogs'],
        'uuid': json['uuid'],
        'metaUuid': !exists(json, 'meta_uuid') ? undefined : json['meta_uuid'],
        'projectUuid': json['project_uuid'],
        'productUuids': !exists(json, 'product_uuids') ? undefined : json['product_uuids'],
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : json['updated_at'],
        'deletedAt': !exists(json, 'deleted_at') ? undefined : json['deleted_at'],
    };
}

export function CatalogReturnToJSON(value?: CatalogReturn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'meta_data': value.metaData,
        'name': value.name,
        'featured': value.featured,
        'sub_catalogs': value.subCatalogs,
        'uuid': value.uuid,
        'meta_uuid': value.metaUuid,
        'project_uuid': value.projectUuid,
        'product_uuids': value.productUuids,
        'created_at': value.createdAt,
        'updated_at': value.updatedAt,
        'deleted_at': value.deletedAt,
    };
}

