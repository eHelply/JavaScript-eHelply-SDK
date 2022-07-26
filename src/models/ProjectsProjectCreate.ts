/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.96
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.96
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Used for create endpoint
 * @export
 * @interface ProjectsProjectCreate
 */
export interface ProjectsProjectCreate {
    /**
     * 
     * @type {string}
     * @memberof ProjectsProjectCreate
     */
    name: string;
}

/**
 * Check if a given object implements the ProjectsProjectCreate interface.
 */
export function instanceOfProjectsProjectCreate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function ProjectsProjectCreateFromJSON(json: any): ProjectsProjectCreate {
    return ProjectsProjectCreateFromJSONTyped(json, false);
}

export function ProjectsProjectCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectsProjectCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function ProjectsProjectCreateToJSON(value?: ProjectsProjectCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

