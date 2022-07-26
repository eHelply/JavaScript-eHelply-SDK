/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.97
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.97
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * **:param** uuid                                **type:** string
 * **:param** name                                **type:** string
 * **:param** project_uuid                        **type:** string or None
 * @export
 * @interface TagDb
 */
export interface TagDb {
    /**
     * 
     * @type {string}
     * @memberof TagDb
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof TagDb
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TagDb
     */
    projectUuid?: string;
}

/**
 * Check if a given object implements the TagDb interface.
 */
export function instanceOfTagDb(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "uuid" in value;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function TagDbFromJSON(json: any): TagDb {
    return TagDbFromJSONTyped(json, false);
}

export function TagDbFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagDb {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'name': json['name'],
        'projectUuid': !exists(json, 'project_uuid') ? undefined : json['project_uuid'],
    };
}

export function TagDbToJSON(value?: TagDb | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'name': value.name,
        'project_uuid': value.projectUuid,
    };
}

