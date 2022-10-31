/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.120
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.120
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
 * @interface ProjectCreditResponse
 */
export interface ProjectCreditResponse {
    /**
     * 
     * @type {string}
     * @memberof ProjectCreditResponse
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectCreditResponse
     */
    projectUuid: string;
    /**
     * 
     * @type {number}
     * @memberof ProjectCreditResponse
     */
    creditsGranted: number;
    /**
     * 
     * @type {number}
     * @memberof ProjectCreditResponse
     */
    creditsConsumed?: number;
    /**
     * 
     * @type {string}
     * @memberof ProjectCreditResponse
     */
    grantedBy: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectCreditResponse
     */
    grantedReason: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectCreditResponse
     */
    grantedAt: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectCreditResponse
     */
    fullyConsumedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectCreditResponse
     */
    revokedReason?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectCreditResponse
     */
    revokedAt?: string;
}

export function ProjectCreditResponseFromJSON(json: any): ProjectCreditResponse {
    return ProjectCreditResponseFromJSONTyped(json, false);
}

export function ProjectCreditResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectCreditResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'projectUuid': json['project_uuid'],
        'creditsGranted': json['credits_granted'],
        'creditsConsumed': !exists(json, 'credits_consumed') ? undefined : json['credits_consumed'],
        'grantedBy': json['granted_by'],
        'grantedReason': json['granted_reason'],
        'grantedAt': json['granted_at'],
        'fullyConsumedAt': !exists(json, 'fully_consumed_at') ? undefined : json['fully_consumed_at'],
        'revokedReason': !exists(json, 'revoked_reason') ? undefined : json['revoked_reason'],
        'revokedAt': !exists(json, 'revoked_at') ? undefined : json['revoked_at'],
    };
}

export function ProjectCreditResponseToJSON(value?: ProjectCreditResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'project_uuid': value.projectUuid,
        'credits_granted': value.creditsGranted,
        'credits_consumed': value.creditsConsumed,
        'granted_by': value.grantedBy,
        'granted_reason': value.grantedReason,
        'granted_at': value.grantedAt,
        'fully_consumed_at': value.fullyConsumedAt,
        'revoked_reason': value.revokedReason,
        'revoked_at': value.revokedAt,
    };
}

