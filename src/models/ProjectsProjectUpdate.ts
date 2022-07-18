/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.87
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.87
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Used for update endpoint
 * @export
 * @interface ProjectsProjectUpdate
 */
export interface ProjectsProjectUpdate {
    /**
     * 
     * @type {number}
     * @memberof ProjectsProjectUpdate
     */
    maxSpend?: number;
    /**
     * 
     * @type {string}
     * @memberof ProjectsProjectUpdate
     */
    status?: string;
}

export function ProjectsProjectUpdateFromJSON(json: any): ProjectsProjectUpdate {
    return ProjectsProjectUpdateFromJSONTyped(json, false);
}

export function ProjectsProjectUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectsProjectUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'maxSpend': !exists(json, 'max_spend') ? undefined : json['max_spend'],
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function ProjectsProjectUpdateToJSON(value?: ProjectsProjectUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'max_spend': value.maxSpend,
        'status': value.status,
    };
}

