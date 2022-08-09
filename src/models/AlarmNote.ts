/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.101
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.101
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
 * @interface AlarmNote
 */
export interface AlarmNote {
    /**
     * 
     * @type {string}
     * @memberof AlarmNote
     */
    authorUuid: string;
    /**
     * 
     * @type {string}
     * @memberof AlarmNote
     */
    message: string;
}

/**
 * Check if a given object implements the AlarmNote interface.
 */
export function instanceOfAlarmNote(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "authorUuid" in value;
    isInstance = isInstance && "message" in value;

    return isInstance;
}

export function AlarmNoteFromJSON(json: any): AlarmNote {
    return AlarmNoteFromJSONTyped(json, false);
}

export function AlarmNoteFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlarmNote {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'authorUuid': json['author_uuid'],
        'message': json['message'],
    };
}

export function AlarmNoteToJSON(value?: AlarmNote | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'author_uuid': value.authorUuid,
        'message': value.message,
    };
}

