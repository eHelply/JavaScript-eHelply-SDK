/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.88
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.88
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ProjectsUsageTypeUnitPrice } from './ProjectsUsageTypeUnitPrice';
import {
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

/**
 * Check if a given object implements the ProjectsUsageTypeDB interface.
 */
export function instanceOfProjectsUsageTypeDB(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "summary" in value;
    isInstance = isInstance && "category" in value;
    isInstance = isInstance && "service" in value;
    isInstance = isInstance && "unitPrices" in value;

    return isInstance;
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

