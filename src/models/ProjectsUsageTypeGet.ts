/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.84
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.84
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
 * Used for get endpoint
 * @export
 * @interface ProjectsUsageTypeGet
 */
export interface ProjectsUsageTypeGet {
    /**
     * 
     * @type {string}
     * @memberof ProjectsUsageTypeGet
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUsageTypeGet
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUsageTypeGet
     */
    summary: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUsageTypeGet
     */
    category: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUsageTypeGet
     */
    service: string;
    /**
     * 
     * @type {Array<ProjectsUsageTypeUnitPrice>}
     * @memberof ProjectsUsageTypeGet
     */
    unitPrices: Array<ProjectsUsageTypeUnitPrice>;
}

export function ProjectsUsageTypeGetFromJSON(json: any): ProjectsUsageTypeGet {
    return ProjectsUsageTypeGetFromJSONTyped(json, false);
}

export function ProjectsUsageTypeGetFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectsUsageTypeGet {
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

export function ProjectsUsageTypeGetToJSON(value?: ProjectsUsageTypeGet | null): any {
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

