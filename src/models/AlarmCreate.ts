/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.108
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.108
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
 * @interface AlarmCreate
 */
export interface AlarmCreate {
    /**
     * 
     * @type {string}
     * @memberof AlarmCreate
     */
    process?: string;
    /**
     * 
     * @type {string}
     * @memberof AlarmCreate
     */
    severity?: string;
    /**
     * 
     * @type {string}
     * @memberof AlarmCreate
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof AlarmCreate
     */
    summary?: string;
    /**
     * 
     * @type {string}
     * @memberof AlarmCreate
     */
    description?: string;
}

export function AlarmCreateFromJSON(json: any): AlarmCreate {
    return AlarmCreateFromJSONTyped(json, false);
}

export function AlarmCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlarmCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'process': !exists(json, 'process') ? undefined : json['process'],
        'severity': !exists(json, 'severity') ? undefined : json['severity'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'summary': !exists(json, 'summary') ? undefined : json['summary'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function AlarmCreateToJSON(value?: AlarmCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'process': value.process,
        'severity': value.severity,
        'name': value.name,
        'summary': value.summary,
        'description': value.description,
    };
}

