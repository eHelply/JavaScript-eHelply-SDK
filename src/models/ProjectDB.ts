/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.90
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.90
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Used for DB row entry
 * @export
 * @interface ProjectDB
 */
export interface ProjectDB {
    /**
     * 
     * @type {string}
     * @memberof ProjectDB
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectDB
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectDB
     */
    createdAt: string;
    /**
     * 
     * @type {number}
     * @memberof ProjectDB
     */
    currentSpend: number;
    /**
     * 
     * @type {number}
     * @memberof ProjectDB
     */
    maxSpend: number;
    /**
     * 
     * @type {string}
     * @memberof ProjectDB
     */
    projectStatus: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectDB
     */
    archivedAt?: string;
}

export function ProjectDBFromJSON(json: any): ProjectDB {
    return ProjectDBFromJSONTyped(json, false);
}

export function ProjectDBFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectDB {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'name': json['name'],
        'createdAt': json['created_at'],
        'currentSpend': json['current_spend'],
        'maxSpend': json['max_spend'],
        'projectStatus': json['project_status'],
        'archivedAt': !exists(json, 'archived_at') ? undefined : json['archived_at'],
    };
}

export function ProjectDBToJSON(value?: ProjectDB | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'name': value.name,
        'created_at': value.createdAt,
        'current_spend': value.currentSpend,
        'max_spend': value.maxSpend,
        'project_status': value.projectStatus,
        'archived_at': value.archivedAt,
    };
}

