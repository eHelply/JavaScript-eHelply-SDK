/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.121
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.121
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * **:param** uuid                                **type:** string
 * **:param** name                                **type:** string
 * **:param** project_uuid                        **type:** string or None
 * 
 * **:param** meta_uuid                           **type:** string or None
 * @export
 * @interface CategoryResponse
 */
export interface CategoryResponse {
    /**
     * 
     * @type {string}
     * @memberof CategoryResponse
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof CategoryResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CategoryResponse
     */
    projectUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof CategoryResponse
     */
    metaUuid?: string;
    /**
     * 
     * @type {object}
     * @memberof CategoryResponse
     */
    meta?: object;
}

export function CategoryResponseFromJSON(json: any): CategoryResponse {
    return CategoryResponseFromJSONTyped(json, false);
}

export function CategoryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'name': json['name'],
        'projectUuid': !exists(json, 'project_uuid') ? undefined : json['project_uuid'],
        'metaUuid': !exists(json, 'meta_uuid') ? undefined : json['meta_uuid'],
        'meta': !exists(json, 'meta') ? undefined : json['meta'],
    };
}

export function CategoryResponseToJSON(value?: CategoryResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'name': value.name,
        'project_uuid': value.projectUuid,
        'meta_uuid': value.metaUuid,
        'meta': value.meta,
    };
}

