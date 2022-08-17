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
 * 
 * @export
 * @interface StatsVitalsResponse
 */
export interface StatsVitalsResponse {
    /**
     * 
     * @type {string}
     * @memberof StatsVitalsResponse
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof StatsVitalsResponse
     */
    serviceUuid: string;
    /**
     * 
     * @type {string}
     * @memberof StatsVitalsResponse
     */
    heartbeatUuid: string;
    /**
     * 
     * @type {object}
     * @memberof StatsVitalsResponse
     */
    stats?: object;
    /**
     * 
     * @type {object}
     * @memberof StatsVitalsResponse
     */
    vitals?: object;
    /**
     * 
     * @type {string}
     * @memberof StatsVitalsResponse
     */
    createdAt?: string;
}

/**
 * Check if a given object implements the StatsVitalsResponse interface.
 */
export function instanceOfStatsVitalsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "serviceUuid" in value;
    isInstance = isInstance && "heartbeatUuid" in value;

    return isInstance;
}

export function StatsVitalsResponseFromJSON(json: any): StatsVitalsResponse {
    return StatsVitalsResponseFromJSONTyped(json, false);
}

export function StatsVitalsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatsVitalsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'serviceUuid': json['service_uuid'],
        'heartbeatUuid': json['heartbeat_uuid'],
        'stats': !exists(json, 'stats') ? undefined : json['stats'],
        'vitals': !exists(json, 'vitals') ? undefined : json['vitals'],
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
    };
}

export function StatsVitalsResponseToJSON(value?: StatsVitalsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'service_uuid': value.serviceUuid,
        'heartbeat_uuid': value.heartbeatUuid,
        'stats': value.stats,
        'vitals': value.vitals,
        'created_at': value.createdAt,
    };
}

