/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.100
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.100
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * **:param** name                                **type:** string
 * **:param** meta                                **type:** dict or None
 * 
 * **:param** project_uuid                        **type:** string or None
 * @export
 * @interface CategoryBase
 */
export interface CategoryBase {
    /**
     * 
     * @type {string}
     * @memberof CategoryBase
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CategoryBase
     */
    metaUuid?: string;
    /**
     * 
     * @type {object}
     * @memberof CategoryBase
     */
    meta?: object;
    /**
     * 
     * @type {string}
     * @memberof CategoryBase
     */
    projectUuid?: string;
}

/**
 * Check if a given object implements the CategoryBase interface.
 */
export function instanceOfCategoryBase(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function CategoryBaseFromJSON(json: any): CategoryBase {
    return CategoryBaseFromJSONTyped(json, false);
}

export function CategoryBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'metaUuid': !exists(json, 'meta_uuid') ? undefined : json['meta_uuid'],
        'meta': !exists(json, 'meta') ? undefined : json['meta'],
        'projectUuid': !exists(json, 'project_uuid') ? undefined : json['project_uuid'],
    };
}

export function CategoryBaseToJSON(value?: CategoryBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'meta_uuid': value.metaUuid,
        'meta': value.meta,
        'project_uuid': value.projectUuid,
    };
}

