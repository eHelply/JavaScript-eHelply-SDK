/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.79
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.79
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
 * @interface AppointmentBase
 */
export interface AppointmentBase {
    /**
     * 
     * @type {string}
     * @memberof AppointmentBase
     */
    projectUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentBase
     */
    placeUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentBase
     */
    reviewGroupUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentBase
     */
    expectedFinishAt?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentBase
     */
    expectedStartAt?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentBase
     */
    actualStartAt?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentBase
     */
    actualFinishAt?: string;
    /**
     * 
     * @type {object}
     * @memberof AppointmentBase
     */
    products?: object;
    /**
     * 
     * @type {string}
     * @memberof AppointmentBase
     */
    metaUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentBase
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentBase
     */
    cancellationAt?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentBase
     */
    cancellationReason?: string;
    /**
     * 
     * @type {string}
     * @memberof AppointmentBase
     */
    cancellationEntityUuid?: string;
}

export function AppointmentBaseFromJSON(json: any): AppointmentBase {
    return AppointmentBaseFromJSONTyped(json, false);
}

export function AppointmentBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppointmentBase {
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
    };
}

export function AppointmentBaseToJSON(value?: AppointmentBase | null): any {
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
    };
}

