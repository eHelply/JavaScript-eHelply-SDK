/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.95
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.95
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
 * @interface AppointmentResponse
 */
export interface AppointmentResponse {
    /**
     * 
     * @type {string}
     * @memberof AppointmentResponse
     */
    projectUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentResponse
     */
    placeUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentResponse
     */
    reviewGroupUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentResponse
     */
    expectedFinishAt?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentResponse
     */
    expectedStartAt?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentResponse
     */
    actualStartAt?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentResponse
     */
    actualFinishAt?: string;
    /**
     * 
     * @type {object}
     * @memberof AppointmentResponse
     */
    products?: object;
    /**
     * 
     * @type {string}
     * @memberof AppointmentResponse
     */
    metaUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentResponse
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentResponse
     */
    cancellationAt?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentResponse
     */
    cancellationReason?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentResponse
     */
    cancellationEntityUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentResponse
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentResponse
     */
    updatedAt: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentResponse
     */
    deletedAt?: string;
}

export function AppointmentResponseFromJSON(json: any): AppointmentResponse {
    return AppointmentResponseFromJSONTyped(json, false);
}

export function AppointmentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppointmentResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'projectUuid': !exists(json, 'project_uuid') ? undefined : json['project_uuid'],
        'placeUuid': !exists(json, 'place_uuid') ? undefined : json['place_uuid'],
        'reviewGroupUuid': !exists(json, 'review_group_uuid') ? undefined : json['review_group_uuid'],
        'expectedFinishAt': !exists(json, 'expected_finish_at') ? undefined : json['expected_finish_at'],
        'expectedStartAt': !exists(json, 'expected_start_at') ? undefined : json['expected_start_at'],
        'actualStartAt': !exists(json, 'actual_start_at') ? undefined : json['actual_start_at'],
        'actualFinishAt': !exists(json, 'actual_finish_at') ? undefined : json['actual_finish_at'],
        'products': !exists(json, 'products') ? undefined : json['products'],
        'metaUuid': !exists(json, 'meta_uuid') ? undefined : json['meta_uuid'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'cancellationAt': !exists(json, 'cancellation_at') ? undefined : json['cancellation_at'],
        'cancellationReason': !exists(json, 'cancellation_reason') ? undefined : json['cancellation_reason'],
        'cancellationEntityUuid': !exists(json, 'cancellation_entity_uuid') ? undefined : json['cancellation_entity_uuid'],
        'uuid': json['uuid'],
        'createdAt': json['created_at'],
        'updatedAt': json['updated_at'],
        'deletedAt': !exists(json, 'deleted_at') ? undefined : json['deleted_at'],
    };
}

export function AppointmentResponseToJSON(value?: AppointmentResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'project_uuid': value.projectUuid,
        'place_uuid': value.placeUuid,
        'review_group_uuid': value.reviewGroupUuid,
        'expected_finish_at': value.expectedFinishAt,
        'expected_start_at': value.expectedStartAt,
        'actual_start_at': value.actualStartAt,
        'actual_finish_at': value.actualFinishAt,
        'products': value.products,
        'meta_uuid': value.metaUuid,
        'status': value.status,
        'cancellation_at': value.cancellationAt,
        'cancellation_reason': value.cancellationReason,
        'cancellation_entity_uuid': value.cancellationEntityUuid,
        'uuid': value.uuid,
        'created_at': value.createdAt,
        'updated_at': value.updatedAt,
        'deleted_at': value.deletedAt,
    };
}

