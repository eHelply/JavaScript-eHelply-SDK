/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.114
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.114
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
 * 
 * @export
 * @interface NoteDynamoResponse
 */
export interface NoteDynamoResponse {
    /**
     * 
     * @type {string}
     * @memberof NoteDynamoResponse
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof NoteDynamoResponse
     */
    content: string;
    /**
     * 
     * @type {string}
     * @memberof NoteDynamoResponse
     */
    time: string;
    /**
     * 
     * @type {NoteMeta}
     * @memberof NoteDynamoResponse
     */
    meta: NoteMeta;
}

export function NoteDynamoResponseFromJSON(json: any): NoteDynamoResponse {
    return NoteDynamoResponseFromJSONTyped(json, false);
}

export function NoteDynamoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): NoteDynamoResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'content': json['content'],
        'time': json['time'],
        'meta': NoteMetaFromJSON(json['meta']),
    };
}

export function NoteDynamoResponseToJSON(value?: NoteDynamoResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'content': value.content,
        'time': value.time,
        'meta': NoteMetaToJSON(value.meta),
    };
}

