/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.118
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.118
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
 * @interface KpiResponse
 */
export interface KpiResponse {
    /**
     * 
     * @type {string}
     * @memberof KpiResponse
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof KpiResponse
     */
    serviceUuid: string;
    /**
     * 
     * @type {Array<any>}
     * @memberof KpiResponse
     */
    kpis: Array<any>;
    /**
     * 
     * @type {string}
     * @memberof KpiResponse
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof KpiResponse
     */
    fetchedAt?: string;
}

export function KpiResponseFromJSON(json: any): KpiResponse {
    return KpiResponseFromJSONTyped(json, false);
}

export function KpiResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): KpiResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'serviceUuid': json['service_uuid'],
        'kpis': json['kpis'],
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'fetchedAt': !exists(json, 'fetched_at') ? undefined : json['fetched_at'],
    };
}

export function KpiResponseToJSON(value?: KpiResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'service_uuid': value.serviceUuid,
        'kpis': value.kpis,
        'created_at': value.createdAt,
        'fetched_at': value.fetchedAt,
    };
}

