/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.110
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.110
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
 * @interface AlarmTerminate
 */
export interface AlarmTerminate {
    /**
     * 
     * @type {string}
     * @memberof AlarmTerminate
     */
    terminaterUuid: string;
}

/**
 * Check if a given object implements the AlarmTerminate interface.
 */
export function instanceOfAlarmTerminate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "terminaterUuid" in value;

    return isInstance;
}

export function AlarmTerminateFromJSON(json: any): AlarmTerminate {
    return AlarmTerminateFromJSONTyped(json, false);
}

export function AlarmTerminateFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlarmTerminate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'terminaterUuid': json['terminater_uuid'],
    };
}

export function AlarmTerminateToJSON(value?: AlarmTerminate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'terminater_uuid': value.terminaterUuid,
    };
}

