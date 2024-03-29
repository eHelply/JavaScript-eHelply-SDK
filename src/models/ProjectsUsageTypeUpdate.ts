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
import {
    ProjectsUsageTypeUnitPrice,
    ProjectsUsageTypeUnitPriceFromJSON,
    ProjectsUsageTypeUnitPriceFromJSONTyped,
    ProjectsUsageTypeUnitPriceToJSON,
} from './ProjectsUsageTypeUnitPrice';

/**
 * Used for update endpoint
 * @export
 * @interface ProjectsUsageTypeUpdate
 */
export interface ProjectsUsageTypeUpdate {
    /**
     * 
     * @type {string}
     * @memberof ProjectsUsageTypeUpdate
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUsageTypeUpdate
     */
    summary?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUsageTypeUpdate
     */
    category?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUsageTypeUpdate
     */
    service?: string;
    /**
     * 
     * @type {Array<ProjectsUsageTypeUnitPrice>}
     * @memberof ProjectsUsageTypeUpdate
     */
    unitPrices?: Array<ProjectsUsageTypeUnitPrice>;
}

export function ProjectsUsageTypeUpdateFromJSON(json: any): ProjectsUsageTypeUpdate {
    return ProjectsUsageTypeUpdateFromJSONTyped(json, false);
}

export function ProjectsUsageTypeUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectsUsageTypeUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
        'category': !exists(json, 'category') ? undefined : json['category'],
        'service': !exists(json, 'service') ? undefined : json['service'],
        'unitPrices': !exists(json, 'unit_prices') ? undefined : ((json['unit_prices'] as Array<any>).map(ProjectsUsageTypeUnitPriceFromJSON)),
    };
}

export function ProjectsUsageTypeUpdateToJSON(value?: ProjectsUsageTypeUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'summary': value.summary,
        'category': value.category,
        'service': value.service,
        'unit_prices': value.unitPrices === undefined ? undefined : ((value.unitPrices as Array<any>).map(ProjectsUsageTypeUnitPriceToJSON)),
    };
}

