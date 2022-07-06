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
import {
    NoteMeta,
    NoteMetaFromJSON,
    NoteMetaFromJSONTyped,
    NoteMetaToJSON,
} from './NoteMeta';

/**
 * Note
 * This is used as the payload to endpoints
 * @export
 * @interface NoteBase
 */
export interface NoteBase {
    /**
     * 
     * @type {string}
     * @memberof NoteBase
     */
    content: string;
    /**
     * 
     * @type {string}
     * @memberof NoteBase
     */
    time: string;
    /**
     * 
     * @type {NoteMeta}
     * @memberof NoteBase
     */
    meta: NoteMeta;
}

export function NoteBaseFromJSON(json: any): NoteBase {
    return NoteBaseFromJSONTyped(json, false);
}

export function NoteBaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): NoteBase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'content': json['content'],
        'time': json['time'],
        'meta': NoteMetaFromJSON(json['meta']),
    };
}

export function NoteBaseToJSON(value?: NoteBase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'content': value.content,
        'time': value.time,
        'meta': NoteMetaToJSON(value.meta),
    };
}

