/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.116
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.116
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Used for get endpoint
 * @export
 * @interface ProjectsProjectGet
 */
export interface ProjectsProjectGet {
    /**
     * 
     * @type {string}
     * @memberof ProjectsProjectGet
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsProjectGet
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsProjectGet
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsProjectGet
     */
    archivedAt?: string;
}

export function ProjectsProjectGetFromJSON(json: any): ProjectsProjectGet {
    return ProjectsProjectGetFromJSONTyped(json, false);
}

export function ProjectsProjectGetFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectsProjectGet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'name': json['name'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'archivedAt': !exists(json, 'archived_at') ? undefined : json['archived_at'],
    };
}

export function ProjectsProjectGetToJSON(value?: ProjectsProjectGet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'name': value.name,
        'status': value.status,
        'archived_at': value.archivedAt,
    };
}

