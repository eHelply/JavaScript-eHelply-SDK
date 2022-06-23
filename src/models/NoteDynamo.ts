/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.81
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.81
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
 * A note from DynamoDB
 * @export
 * @interface NoteDynamo
 */
export interface NoteDynamo {
    /**
     * 
     * @type {string}
     * @memberof NoteDynamo
     */
    uuid: string;
    /**
     * 
     * @type {Blob}
     * @memberof NoteDynamo
     */
    content?: Blob;
    /**
     * 
     * @type {string}
     * @memberof NoteDynamo
     */
    time: string;
    /**
     * 
     * @type {NoteMeta}
     * @memberof NoteDynamo
     */
    meta: NoteMeta;
}

export function NoteDynamoFromJSON(json: any): NoteDynamo {
    return NoteDynamoFromJSONTyped(json, false);
}

export function NoteDynamoFromJSONTyped(json: any, ignoreDiscriminator: boolean): NoteDynamo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'time': json['time'],
        'meta': NoteMetaFromJSON(json['meta']),
    };
}

export function NoteDynamoToJSON(value?: NoteDynamo | null): any {
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

