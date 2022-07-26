/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.94
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.94
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AlarmResponse } from './AlarmResponse';
import {
    AlarmResponseFromJSON,
    AlarmResponseFromJSONTyped,
    AlarmResponseToJSON,
} from './AlarmResponse';

/**
 * 
 * @export
 * @interface ServiceResponse
 */
export interface ServiceResponse {
    /**
     * 
     * @type {string}
     * @memberof ServiceResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceResponse
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceResponse
     */
    version: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceResponse
     */
    summary: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ServiceResponse
     */
    authors: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ServiceResponse
     */
    authorEmails: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ServiceResponse
     */
    uuid?: string;
    /**
     * 
     * @type {Array<any>}
     * @memberof ServiceResponse
     */
    heartbeats?: Array<any>;
    /**
     * 
     * @type {Array<AlarmResponse>}
     * @memberof ServiceResponse
     */
    alarms?: Array<AlarmResponse>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ServiceResponse
     */
    hiddenStages?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ServiceResponse
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceResponse
     */
    updatedAt?: string;
}

/**
 * Check if a given object implements the ServiceResponse interface.
 */
export function instanceOfServiceResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "summary" in value;
    isInstance = isInstance && "authors" in value;
    isInstance = isInstance && "authorEmails" in value;

    return isInstance;
}

export function ServiceResponseFromJSON(json: any): ServiceResponse {
    return ServiceResponseFromJSONTyped(json, false);
}

export function ServiceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'key': json['key'],
        'version': json['version'],
        'summary': json['summary'],
        'authors': json['authors'],
        'authorEmails': json['author_emails'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'heartbeats': !exists(json, 'heartbeats') ? undefined : json['heartbeats'],
        'alarms': !exists(json, 'alarms') ? undefined : ((json['alarms'] as Array<any>).map(AlarmResponseFromJSON)),
        'hiddenStages': !exists(json, 'hidden_stages') ? undefined : json['hidden_stages'],
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : json['updated_at'],
    };
}

export function ServiceResponseToJSON(value?: ServiceResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'key': value.key,
        'version': value.version,
        'summary': value.summary,
        'authors': value.authors,
        'author_emails': value.authorEmails,
        'uuid': value.uuid,
        'heartbeats': value.heartbeats,
        'alarms': value.alarms === undefined ? undefined : ((value.alarms as Array<any>).map(AlarmResponseToJSON)),
        'hidden_stages': value.hiddenStages,
        'created_at': value.createdAt,
        'updated_at': value.updatedAt,
    };
}

