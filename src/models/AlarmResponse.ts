/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.112
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.112
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
 * @interface AlarmResponse
 */
export interface AlarmResponse {
    /**
     * 
     * @type {string}
     * @memberof AlarmResponse
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof AlarmResponse
     */
    serviceUuid?: string;
    /**
     * 
     * @type {number}
     * @memberof AlarmResponse
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof AlarmResponse
     */
    stage?: string;
    /**
     * 
     * @type {string}
     * @memberof AlarmResponse
     */
    process?: string;
    /**
     * 
     * @type {string}
     * @memberof AlarmResponse
     */
    severity?: string;
    /**
     * 
     * @type {string}
     * @memberof AlarmResponse
     */
    ticketUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof AlarmResponse
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AlarmResponse
     */
    summary?: string;
    /**
     * 
     * @type {string}
     * @memberof AlarmResponse
     */
    description?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof AlarmResponse
     */
    note?: Array<object>;
    /**
     * 
     * @type {string}
     * @memberof AlarmResponse
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof AlarmResponse
     */
    latestAt?: string;
    /**
     * 
     * @type {string}
     * @memberof AlarmResponse
     */
    acknowledgedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof AlarmResponse
     */
    ignoredAt?: string;
    /**
     * 
     * @type {string}
     * @memberof AlarmResponse
     */
    clearedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof AlarmResponse
     */
    terminatedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof AlarmResponse
     */
    assigneeUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof AlarmResponse
     */
    acknowledgerUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof AlarmResponse
     */
    ignorerUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof AlarmResponse
     */
    terminaterUuid?: string;
}

export function AlarmResponseFromJSON(json: any): AlarmResponse {
    return AlarmResponseFromJSONTyped(json, false);
}

export function AlarmResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlarmResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'serviceUuid': !exists(json, 'service_uuid') ? undefined : json['service_uuid'],
        'count': !exists(json, 'count') ? undefined : json['count'],
        'stage': !exists(json, 'stage') ? undefined : json['stage'],
        'process': !exists(json, 'process') ? undefined : json['process'],
        'severity': !exists(json, 'severity') ? undefined : json['severity'],
        'ticketUuid': !exists(json, 'ticket_uuid') ? undefined : json['ticket_uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'note': !exists(json, 'note') ? undefined : json['note'],
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'latestAt': !exists(json, 'latest_at') ? undefined : json['latest_at'],
        'acknowledgedAt': !exists(json, 'acknowledged_at') ? undefined : json['acknowledged_at'],
        'ignoredAt': !exists(json, 'ignored_at') ? undefined : json['ignored_at'],
        'clearedAt': !exists(json, 'cleared_at') ? undefined : json['cleared_at'],
        'terminatedAt': !exists(json, 'terminated_at') ? undefined : json['terminated_at'],
        'assigneeUuid': !exists(json, 'assignee_uuid') ? undefined : json['assignee_uuid'],
        'acknowledgerUuid': !exists(json, 'acknowledger_uuid') ? undefined : json['acknowledger_uuid'],
        'ignorerUuid': !exists(json, 'ignorer_uuid') ? undefined : json['ignorer_uuid'],
        'terminaterUuid': !exists(json, 'terminater_uuid') ? undefined : json['terminater_uuid'],
    };
}

export function AlarmResponseToJSON(value?: AlarmResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'service_uuid': value.serviceUuid,
        'count': value.count,
        'stage': value.stage,
        'process': value.process,
        'severity': value.severity,
        'ticket_uuid': value.ticketUuid,
        'name': value.name,
        'summary': value.summary,
        'description': value.description,
        'note': value.note,
        'created_at': value.createdAt,
        'latest_at': value.latestAt,
        'acknowledged_at': value.acknowledgedAt,
        'ignored_at': value.ignoredAt,
        'cleared_at': value.clearedAt,
        'terminated_at': value.terminatedAt,
        'assignee_uuid': value.assigneeUuid,
        'acknowledger_uuid': value.acknowledgerUuid,
        'ignorer_uuid': value.ignorerUuid,
        'terminater_uuid': value.terminaterUuid,
    };
}

