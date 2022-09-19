/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.107
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.107
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ProjectsUsageTypeUnitPrice,
    ProjectsUsageTypeUnitPriceFromJSON,
    ProjectsUsageTypeUnitPriceFromJSONTyped,
    ProjectsUsageTypeUnitPriceToJSON,
} from './ProjectsUsageTypeUnitPrice';

/**
 * Used for DB row entry
 * @export
 * @interface ProjectsUsageTypeDB
 */
export interface ProjectsUsageTypeDB {
    /**
     * 
     * @type {string}
     * @memberof ProjectsUsageTypeDB
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUsageTypeDB
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUsageTypeDB
     */
    summary: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUsageTypeDB
     */
    category: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUsageTypeDB
     */
    service: string;
    /**
     * 
     * @type {Array<ProjectsUsageTypeUnitPrice>}
     * @memberof ProjectsUsageTypeDB
     */
    unitPrices: Array<ProjectsUsageTypeUnitPrice>;
}

export function ProjectsUsageTypeDBFromJSON(json: any): ProjectsUsageTypeDB {
    return ProjectsUsageTypeDBFromJSONTyped(json, false);
}

export function ProjectsUsageTypeDBFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectsUsageTypeDB {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': json['key'],
        'name': json['name'],
        'summary': json['summary'],
        'category': json['category'],
        'service': json['service'],
        'unitPrices': ((json['unit_prices'] as Array<any>).map(ProjectsUsageTypeUnitPriceFromJSON)),
    };
}

export function ProjectsUsageTypeDBToJSON(value?: ProjectsUsageTypeDB | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'name': value.name,
        'summary': value.summary,
        'category': value.category,
        'service': value.service,
        'unit_prices': ((value.unitPrices as Array<any>).map(ProjectsUsageTypeUnitPriceToJSON)),
    };
}

