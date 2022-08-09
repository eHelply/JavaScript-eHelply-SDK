/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.107
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.107
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
 * @interface AlarmIgnore
 */
export interface AlarmIgnore {
    /**
     * 
     * @type {string}
     * @memberof AlarmIgnore
     */
    ignorerUuid: string;
}

/**
 * Check if a given object implements the AlarmIgnore interface.
 */
export function instanceOfAlarmIgnore(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "ignorerUuid" in value;

    return isInstance;
}

export function AlarmIgnoreFromJSON(json: any): AlarmIgnore {
    return AlarmIgnoreFromJSONTyped(json, false);
}

export function AlarmIgnoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlarmIgnore {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ignorerUuid': json['ignorer_uuid'],
    };
}

export function AlarmIgnoreToJSON(value?: AlarmIgnore | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ignorer_uuid': value.ignorerUuid,
    };
}

