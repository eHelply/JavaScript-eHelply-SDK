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
 * **:param** uuid                                **type:** string
 * **:param** project_uuid                        **type:** string or None
 * 
 * **:param** entity_uuid                         **type:** string or None
 * 
 * **:param** schedule_uuid                       **type:** string or None
 * 
 * **:param** catalog_uuid                        **type:** string or None
 * 
 * **:param** review_group_uuid                   **type:** string or None
 * 
 * **:param** created_at                          **type:** string or None
 * 
 * **:param** updated_at                          **type:** string or None
 * 
 * **:param** deleted_at                          **type:** string or None
 * @export
 * @interface StaffDb
 */
export interface StaffDb {
    /**
     * 
     * @type {string}
     * @memberof StaffDb
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof StaffDb
     */
    projectUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof StaffDb
     */
    entityUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof StaffDb
     */
    scheduleUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof StaffDb
     */
    catalogUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof StaffDb
     */
    reviewGroupUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof StaffDb
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof StaffDb
     */
    updatedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof StaffDb
     */
    deletedAt?: string;
}

/**
 * Check if a given object implements the StaffDb interface.
 */
export function instanceOfStaffDb(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "uuid" in value;

    return isInstance;
}

export function StaffDbFromJSON(json: any): StaffDb {
    return StaffDbFromJSONTyped(json, false);
}

export function StaffDbFromJSONTyped(json: any, ignoreDiscriminator: boolean): StaffDb {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'projectUuid': !exists(json, 'project_uuid') ? undefined : json['project_uuid'],
        'entityUuid': !exists(json, 'entity_uuid') ? undefined : json['entity_uuid'],
        'scheduleUuid': !exists(json, 'schedule_uuid') ? undefined : json['schedule_uuid'],
        'catalogUuid': !exists(json, 'catalog_uuid') ? undefined : json['catalog_uuid'],
        'reviewGroupUuid': !exists(json, 'review_group_uuid') ? undefined : json['review_group_uuid'],
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : json['updated_at'],
        'deletedAt': !exists(json, 'deleted_at') ? undefined : json['deleted_at'],
    };
}

export function StaffDbToJSON(value?: StaffDb | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'project_uuid': value.projectUuid,
        'entity_uuid': value.entityUuid,
        'schedule_uuid': value.scheduleUuid,
        'catalog_uuid': value.catalogUuid,
        'review_group_uuid': value.reviewGroupUuid,
        'created_at': value.createdAt,
        'updated_at': value.updatedAt,
        'deleted_at': value.deletedAt,
    };
}

