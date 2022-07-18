/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.87
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.87
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    NoteDynamo,
    NoteDynamoFromJSON,
    NoteDynamoFromJSONTyped,
    NoteDynamoToJSON,
} from './NoteDynamo';
import {
    NoteMeta,
    NoteMetaFromJSON,
    NoteMetaFromJSONTyped,
    NoteMetaToJSON,
} from './NoteMeta';

/**
 * A note from Dynamo DB including n amount of version history of that note
 * @export
 * @interface NoteDynamoHistory
 */
export interface NoteDynamoHistory {
    /**
     * 
     * @type {string}
     * @memberof NoteDynamoHistory
     */
    uuid: string;
    /**
     * 
     * @type {Blob}
     * @memberof NoteDynamoHistory
     */
    content?: Blob;
    /**
     * 
     * @type {string}
     * @memberof NoteDynamoHistory
     */
    time: string;
    /**
     * 
     * @type {NoteMeta}
     * @memberof NoteDynamoHistory
     */
    meta: NoteMeta;
    /**
     * 
     * @type {Array<NoteDynamo>}
     * @memberof NoteDynamoHistory
     */
    history?: Array<NoteDynamo>;
}

export function NoteDynamoHistoryFromJSON(json: any): NoteDynamoHistory {
    return NoteDynamoHistoryFromJSONTyped(json, false);
}

export function NoteDynamoHistoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): NoteDynamoHistory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'time': json['time'],
        'meta': NoteMetaFromJSON(json['meta']),
        'history': !exists(json, 'history') ? undefined : ((json['history'] as Array<any>).map(NoteDynamoFromJSON)),
    };
}

export function NoteDynamoHistoryToJSON(value?: NoteDynamoHistory | null): any {
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
        'history': value.history === undefined ? undefined : ((value.history as Array<any>).map(NoteDynamoToJSON)),
    };
}

