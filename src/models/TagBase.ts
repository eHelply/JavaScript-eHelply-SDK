/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.95
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.95
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * **:param** name                                **type:** string
 * **:param** project_uuid                        **type:** string or None
 * @export
 * @interface TagBase
 */
export interface TagBase {
    /**
     * 
     * @type {string}
     * @memberof TagBase
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TagBase
     */
    projectUuid?: string;
}

export function TagBaseFromJSON(json: any): TagBase {
    return TagBaseFromJSONTyped(json, false);
}

export function TagBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'projectUuid': !exists(json, 'project_uuid') ? undefined : json['project_uuid'],
    };
}

export function TagBaseToJSON(value?: TagBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'project_uuid': value.projectUuid,
    };
}

