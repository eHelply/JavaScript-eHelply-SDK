/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.82
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.82
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
 * Used for create endpoint
 * @export
 * @interface ProjectsUsageTypeCreate
 */
export interface ProjectsUsageTypeCreate {
    /**
     * 
     * @type {string}
     * @memberof ProjectsUsageTypeCreate
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUsageTypeCreate
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUsageTypeCreate
     */
    summary: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUsageTypeCreate
     */
    category: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUsageTypeCreate
     */
    service: string;
    /**
     * 
     * @type {Array<ProjectsUsageTypeUnitPrice>}
     * @memberof ProjectsUsageTypeCreate
     */
    unitPrices: Array<ProjectsUsageTypeUnitPrice>;
}

export function ProjectsUsageTypeCreateFromJSON(json: any): ProjectsUsageTypeCreate {
    return ProjectsUsageTypeCreateFromJSONTyped(json, false);
}

export function ProjectsUsageTypeCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectsUsageTypeCreate {
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

export function ProjectsUsageTypeCreateToJSON(value?: ProjectsUsageTypeCreate | null): any {
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

