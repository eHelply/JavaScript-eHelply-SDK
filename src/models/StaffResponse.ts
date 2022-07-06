/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.86
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.86
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
 * **:param** entity                              **type:** string or None
 * 
 * **:param** place                               **type:** string or None
 * 
 * **:param** company                             **type:** string or None
 * 
 * **:param** schedule                            **type:** string or None
 * 
 * **:param** catalog                             **type:** string or None
 * 
 * **:param** reviews                             **type:** string or None
 * 
 * **:param** created_at                          **type:** string or None
 * 
 * **:param** updated_at                          **type:** string or None
 * 
 * **:param** deleted_at                          **type:** string or None
 * @export
 * @interface StaffResponse
 */
export interface StaffResponse {
    /**
     * 
     * @type {string}
     * @memberof StaffResponse
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof StaffResponse
     */
    projectUuid?: string;
    /**
     * 
     * @type {object}
     * @memberof StaffResponse
     */
    entity?: object;
    /**
     * 
     * @type {object}
     * @memberof StaffResponse
     */
    place?: object;
    /**
     * 
     * @type {Array<string>}
     * @memberof StaffResponse
     */
    placeRoles?: Array<string>;
    /**
     * 
     * @type {object}
     * @memberof StaffResponse
     */
    company?: object;
    /**
     * 
     * @type {Array<string>}
     * @memberof StaffResponse
     */
    companyRoles?: Array<string>;
    /**
     * 
     * @type {object}
     * @memberof StaffResponse
     */
    schedule?: object;
    /**
     * 
     * @type {object}
     * @memberof StaffResponse
     */
    catalog?: object;
    /**
     * 
     * @type {object}
     * @memberof StaffResponse
     */
    reviews?: object;
    /**
     * 
     * @type {string}
     * @memberof StaffResponse
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof StaffResponse
     */
    updatedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof StaffResponse
     */
    deletedAt?: string;
}

export function StaffResponseFromJSON(json: any): StaffResponse {
    return StaffResponseFromJSONTyped(json, false);
}

export function StaffResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StaffResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'projectUuid': !exists(json, 'project_uuid') ? undefined : json['project_uuid'],
        'entity': !exists(json, 'entity') ? undefined : json['entity'],
        'place': !exists(json, 'place') ? undefined : json['place'],
        'placeRoles': !exists(json, 'place_roles') ? undefined : json['place_roles'],
        'company': !exists(json, 'company') ? undefined : json['company'],
        'companyRoles': !exists(json, 'company_roles') ? undefined : json['company_roles'],
        'schedule': !exists(json, 'schedule') ? undefined : json['schedule'],
        'catalog': !exists(json, 'catalog') ? undefined : json['catalog'],
        'reviews': !exists(json, 'reviews') ? undefined : json['reviews'],
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : json['updated_at'],
        'deletedAt': !exists(json, 'deleted_at') ? undefined : json['deleted_at'],
    };
}

export function StaffResponseToJSON(value?: StaffResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'project_uuid': value.projectUuid,
        'entity': value.entity,
        'place': value.place,
        'place_roles': value.placeRoles,
        'company': value.company,
        'company_roles': value.companyRoles,
        'schedule': value.schedule,
        'catalog': value.catalog,
        'reviews': value.reviews,
        'created_at': value.createdAt,
        'updated_at': value.updatedAt,
        'deleted_at': value.deletedAt,
    };
}

