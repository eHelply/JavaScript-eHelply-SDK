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
 * Used for get endpoint
 * @export
 * @interface SecurityKeyGet
 */
export interface SecurityKeyGet {
    /**
     * 
     * @type {string}
     * @memberof SecurityKeyGet
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof SecurityKeyGet
     */
    access: string;
    /**
     * 
     * @type {string}
     * @memberof SecurityKeyGet
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SecurityKeyGet
     */
    summary: string;
    /**
     * 
     * @type {string}
     * @memberof SecurityKeyGet
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof SecurityKeyGet
     */
    lastUsedAt: string;
}

export function SecurityKeyGetFromJSON(json: any): SecurityKeyGet {
    return SecurityKeyGetFromJSONTyped(json, false);
}

export function SecurityKeyGetFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecurityKeyGet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'access': json['access'],
        'name': json['name'],
        'summary': json['summary'],
        'createdAt': json['created_at'],
        'lastUsedAt': json['last_used_at'],
    };
}

export function SecurityKeyGetToJSON(value?: SecurityKeyGet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'access': value.access,
        'name': value.name,
        'summary': value.summary,
        'created_at': value.createdAt,
        'last_used_at': value.lastUsedAt,
    };
}

