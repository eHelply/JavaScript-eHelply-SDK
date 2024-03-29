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

