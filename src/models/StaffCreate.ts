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
 * **:param** project_uuid                        **type:** string or None
 * 
 * **:param** entity_uuid                         **type:** string or None
 * 
 * **:param** schedule_uuid                       **type:** string or None
 * 
 * **:param** catalog_uuid                        **type:** string or None
 * 
 * **:param** review_group_uuid                   **type:** string or None
 * @export
 * @interface StaffCreate
 */
export interface StaffCreate {
    /**
     * 
     * @type {string}
     * @memberof StaffCreate
     */
    entityUuid: string;
    /**
     * 
     * @type {string}
     * @memberof StaffCreate
     */
    projectUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof StaffCreate
     */
    scheduleUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof StaffCreate
     */
    catalogUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof StaffCreate
     */
    reviewGroupUuid?: string;
}

export function StaffCreateFromJSON(json: any): StaffCreate {
    return StaffCreateFromJSONTyped(json, false);
}

export function StaffCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): StaffCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entityUuid': json['entity_uuid'],
        'projectUuid': !exists(json, 'project_uuid') ? undefined : json['project_uuid'],
        'scheduleUuid': !exists(json, 'schedule_uuid') ? undefined : json['schedule_uuid'],
        'catalogUuid': !exists(json, 'catalog_uuid') ? undefined : json['catalog_uuid'],
        'reviewGroupUuid': !exists(json, 'review_group_uuid') ? undefined : json['review_group_uuid'],
    };
}

export function StaffCreateToJSON(value?: StaffCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'entity_uuid': value.entityUuid,
        'project_uuid': value.projectUuid,
        'schedule_uuid': value.scheduleUuid,
        'catalog_uuid': value.catalogUuid,
        'review_group_uuid': value.reviewGroupUuid,
    };
}

