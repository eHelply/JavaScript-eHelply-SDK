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
 * 
 * @export
 * @interface AlarmAssign
 */
export interface AlarmAssign {
    /**
     * 
     * @type {string}
     * @memberof AlarmAssign
     */
    assigneeUuid: string;
}

export function AlarmAssignFromJSON(json: any): AlarmAssign {
    return AlarmAssignFromJSONTyped(json, false);
}

export function AlarmAssignFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlarmAssign {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'assigneeUuid': json['assignee_uuid'],
    };
}

export function AlarmAssignToJSON(value?: AlarmAssign | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'assignee_uuid': value.assigneeUuid,
    };
}

