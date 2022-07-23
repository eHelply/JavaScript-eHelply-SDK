/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.90
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.90
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { NoteDynamoResponse } from './NoteDynamoResponse';
import {
    NoteDynamoResponseFromJSON,
    NoteDynamoResponseFromJSONTyped,
    NoteDynamoResponseToJSON,
} from './NoteDynamoResponse';
import type { NoteMeta } from './NoteMeta';
import {
    NoteMetaFromJSON,
    NoteMetaFromJSONTyped,
    NoteMetaToJSON,
} from './NoteMeta';

/**
 * A note from Dynamo DB including n amount of version history of that note
 * @export
 * @interface NoteDynamoHistoryResponse
 */
export interface NoteDynamoHistoryResponse {
    /**
     * 
     * @type {string}
     * @memberof NoteDynamoHistoryResponse
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof NoteDynamoHistoryResponse
     */
    content: string;
    /**
     * 
     * @type {string}
     * @memberof NoteDynamoHistoryResponse
     */
    time: string;
    /**
     * 
     * @type {NoteMeta}
     * @memberof NoteDynamoHistoryResponse
     */
    meta: NoteMeta;
    /**
     * 
     * @type {Array<NoteDynamoResponse>}
     * @memberof NoteDynamoHistoryResponse
     */
    history?: Array<NoteDynamoResponse>;
}

/**
 * Check if a given object implements the NoteDynamoHistoryResponse interface.
 */
export function instanceOfNoteDynamoHistoryResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "uuid" in value;
    isInstance = isInstance && "content" in value;
    isInstance = isInstance && "time" in value;
    isInstance = isInstance && "meta" in value;

    return isInstance;
}

export function NoteDynamoHistoryResponseFromJSON(json: any): NoteDynamoHistoryResponse {
    return NoteDynamoHistoryResponseFromJSONTyped(json, false);
}

export function NoteDynamoHistoryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): NoteDynamoHistoryResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'content': json['content'],
        'time': json['time'],
        'meta': NoteMetaFromJSON(json['meta']),
        'history': !exists(json, 'history') ? undefined : ((json['history'] as Array<any>).map(NoteDynamoResponseFromJSON)),
    };
}

export function NoteDynamoHistoryResponseToJSON(value?: NoteDynamoHistoryResponse | null): any {
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
        'history': value.history === undefined ? undefined : ((value.history as Array<any>).map(NoteDynamoResponseToJSON)),
    };
}
