/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.117
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.117
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
 * @interface TagResponse
 */
export interface TagResponse {
    /**
     * 
     * @type {string}
     * @memberof TagResponse
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof TagResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TagResponse
     */
    projectUuid?: string;
}

export function TagResponseFromJSON(json: any): TagResponse {
    return TagResponseFromJSONTyped(json, false);
}

export function TagResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TagResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'name': json['name'],
        'projectUuid': !exists(json, 'project_uuid') ? undefined : json['project_uuid'],
    };
}

export function TagResponseToJSON(value?: TagResponse | null): any {
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
