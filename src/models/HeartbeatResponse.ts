/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.87
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.87
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
 * @interface HeartbeatResponse
 */
export interface HeartbeatResponse {
    /**
     * 
     * @type {string}
     * @memberof HeartbeatResponse
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof HeartbeatResponse
     */
    serviceUuid: string;
    /**
     * 
     * @type {string}
     * @memberof HeartbeatResponse
     */
    stage: string;
    /**
     * 
     * @type {string}
     * @memberof HeartbeatResponse
     */
    process: string;
    /**
     * 
     * @type {string}
     * @memberof HeartbeatResponse
     */
    health: string;
    /**
     * 
     * @type {object}
     * @memberof HeartbeatResponse
     */
    platform: object;
    /**
     * 
     * @type {string}
     * @memberof HeartbeatResponse
     */
    createdAt?: string;
}

export function HeartbeatResponseFromJSON(json: any): HeartbeatResponse {
    return HeartbeatResponseFromJSONTyped(json, false);
}

export function HeartbeatResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): HeartbeatResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'serviceUuid': json['service_uuid'],
        'stage': json['stage'],
        'process': json['process'],
        'health': json['health'],
        'platform': json['platform'],
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
    };
}

export function HeartbeatResponseToJSON(value?: HeartbeatResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'service_uuid': value.serviceUuid,
        'stage': value.stage,
        'process': value.process,
        'health': value.health,
        'platform': value.platform,
        'created_at': value.createdAt,
    };
}

