/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.122
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.122
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
 * @interface Note
 */
export interface Note {
    /**
     * 
     * @type {string}
     * @memberof Note
     */
    participantUuid: string;
    /**
     * 
     * @type {string}
     * @memberof Note
     */
    content: string;
    /**
     * 
     * @type {string}
     * @memberof Note
     */
    createdAt: string;
}

export function NoteFromJSON(json: any): Note {
    return NoteFromJSONTyped(json, false);
}

export function NoteFromJSONTyped(json: any, ignoreDiscriminator: boolean): Note {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'participantUuid': json['participant_uuid'],
        'content': json['content'],
        'createdAt': json['created_at'],
    };
}

export function NoteToJSON(value?: Note | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'participant_uuid': value.participantUuid,
        'content': value.content,
        'created_at': value.createdAt,
    };
}

