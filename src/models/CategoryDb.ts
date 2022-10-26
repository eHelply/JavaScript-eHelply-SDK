/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.113
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.113
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
 * @interface CategoryDb
 */
export interface CategoryDb {
    /**
     * 
     * @type {string}
     * @memberof CategoryDb
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof CategoryDb
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CategoryDb
     */
    projectUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof CategoryDb
     */
    metaUuid?: string;
}

export function CategoryDbFromJSON(json: any): CategoryDb {
    return CategoryDbFromJSONTyped(json, false);
}

export function CategoryDbFromJSONTyped(json: any, ignoreDiscriminator: boolean): CategoryDb {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'name': json['name'],
        'projectUuid': !exists(json, 'project_uuid') ? undefined : json['project_uuid'],
        'metaUuid': !exists(json, 'meta_uuid') ? undefined : json['meta_uuid'],
    };
}

export function CategoryDbToJSON(value?: CategoryDb | null): any {
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
    };
}

