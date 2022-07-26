/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.102
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.102
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
    addStatus?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsProjectUpdate
     */
    removeStatus?: string;
}

/**
 * Check if a given object implements the ProjectsProjectUpdate interface.
 */
export function instanceOfProjectsProjectUpdate(value: object): boolean {
    let isInstance = true;

    return isInstance;
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
        'addStatus': !exists(json, 'add_status') ? undefined : json['add_status'],
        'removeStatus': !exists(json, 'remove_status') ? undefined : json['remove_status'],
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
        'add_status': value.addStatus,
        'remove_status': value.removeStatus,
    };
}

