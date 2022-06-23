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
/**
 * 
 * @export
 * @interface ProjectsUsageTypeUnitPrice
 */
export interface ProjectsUsageTypeUnitPrice {
    /**
     * 
     * @type {number}
     * @memberof ProjectsUsageTypeUnitPrice
     */
    minQuantity: number;
    /**
     * 
     * @type {number}
     * @memberof ProjectsUsageTypeUnitPrice
     */
    maxQuantity: number;
    /**
     * 
     * @type {number}
     * @memberof ProjectsUsageTypeUnitPrice
     */
    unitPrice: number;
}

export function ProjectsUsageTypeUnitPriceFromJSON(json: any): ProjectsUsageTypeUnitPrice {
    return ProjectsUsageTypeUnitPriceFromJSONTyped(json, false);
}

export function ProjectsUsageTypeUnitPriceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectsUsageTypeUnitPrice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'minQuantity': json['min_quantity'],
        'maxQuantity': json['max_quantity'],
        'unitPrice': json['unit_price'],
    };
}

export function ProjectsUsageTypeUnitPriceToJSON(value?: ProjectsUsageTypeUnitPrice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'min_quantity': value.minQuantity,
        'max_quantity': value.maxQuantity,
        'unit_price': value.unitPrice,
    };
}

