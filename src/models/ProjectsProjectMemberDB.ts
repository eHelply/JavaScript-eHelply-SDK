/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.75
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.75
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
 * @interface ProjectsProjectMemberDB
 */
export interface ProjectsProjectMemberDB {
    /**
     * 
     * @type {string}
     * @memberof ProjectsProjectMemberDB
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsProjectMemberDB
     */
    projectUuid: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsProjectMemberDB
     */
    entityUuid: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsProjectMemberDB
     */
    role: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsProjectMemberDB
     */
    createdAt: string;
}

export function ProjectsProjectMemberDBFromJSON(json: any): ProjectsProjectMemberDB {
    return ProjectsProjectMemberDBFromJSONTyped(json, false);
}

export function ProjectsProjectMemberDBFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectsProjectMemberDB {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'projectUuid': json['project_uuid'],
        'entityUuid': json['entity_uuid'],
        'role': json['role'],
        'createdAt': json['created_at'],
    };
}

export function ProjectsProjectMemberDBToJSON(value?: ProjectsProjectMemberDB | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'project_uuid': value.projectUuid,
        'entity_uuid': value.entityUuid,
        'role': value.role,
        'created_at': value.createdAt,
    };
}

