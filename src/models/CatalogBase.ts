/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.114
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.114
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
 * @interface CatalogBase
 */
export interface CatalogBase {
    /**
     * 
     * @type {object}
     * @memberof CatalogBase
     */
    metaData?: object;
    /**
     * 
     * @type {string}
     * @memberof CatalogBase
     */
    name?: string;
    /**
     * 
     * @type {object}
     * @memberof CatalogBase
     */
    featured?: object;
    /**
     * 
     * @type {object}
     * @memberof CatalogBase
     */
    subCatalogs?: object;
}

export function CatalogBaseFromJSON(json: any): CatalogBase {
    return CatalogBaseFromJSONTyped(json, false);
}

export function CatalogBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CatalogBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'metaData': !exists(json, 'meta_data') ? undefined : json['meta_data'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'featured': !exists(json, 'featured') ? undefined : json['featured'],
        'subCatalogs': !exists(json, 'sub_catalogs') ? undefined : json['sub_catalogs'],
    };
}

export function CatalogBaseToJSON(value?: CatalogBase | null): any {
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
    };
}

