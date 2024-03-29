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
 * @interface ProjectsProjectUsageDB
 */
export interface ProjectsProjectUsageDB {
    /**
     * 
     * @type {string}
     * @memberof ProjectsProjectUsageDB
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsProjectUsageDB
     */
    projectUuid: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsProjectUsageDB
     */
    usageKey: string;
    /**
     * 
     * @type {number}
     * @memberof ProjectsProjectUsageDB
     */
    year: number;
    /**
     * 
     * @type {number}
     * @memberof ProjectsProjectUsageDB
     */
    month: number;
    /**
     * 
     * @type {number}
     * @memberof ProjectsProjectUsageDB
     */
    quantity: number;
    /**
     * 
     * @type {number}
     * @memberof ProjectsProjectUsageDB
     */
    estimatedCost: number;
    /**
     * 
     * @type {string}
     * @memberof ProjectsProjectUsageDB
     */
    updatedAt: string;
}

export function ProjectsProjectUsageDBFromJSON(json: any): ProjectsProjectUsageDB {
    return ProjectsProjectUsageDBFromJSONTyped(json, false);
}

export function ProjectsProjectUsageDBFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectsProjectUsageDB {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'projectUuid': json['project_uuid'],
        'usageKey': json['usage_key'],
        'year': json['year'],
        'month': json['month'],
        'quantity': json['quantity'],
        'estimatedCost': json['estimated_cost'],
        'updatedAt': json['updated_at'],
    };
}

export function ProjectsProjectUsageDBToJSON(value?: ProjectsProjectUsageDB | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'project_uuid': value.projectUuid,
        'usage_key': value.usageKey,
        'year': value.year,
        'month': value.month,
        'quantity': value.quantity,
        'estimated_cost': value.estimatedCost,
        'updated_at': value.updatedAt,
    };
}

