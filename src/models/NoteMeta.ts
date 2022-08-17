/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.108
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.108
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Metadata associated to a note
 * @export
 * @interface NoteMeta
 */
export interface NoteMeta {
    /**
     * 
     * @type {string}
     * @memberof NoteMeta
     */
    originalAuthor?: string;
    /**
     * 
     * @type {string}
     * @memberof NoteMeta
     */
    author: string;
    /**
     * 
     * @type {string}
     * @memberof NoteMeta
     */
    previousVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof NoteMeta
     */
    nextVersion?: string;
}

/**
 * Check if a given object implements the NoteMeta interface.
 */
export function instanceOfNoteMeta(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "author" in value;

    return isInstance;
}

export function NoteMetaFromJSON(json: any): NoteMeta {
    return NoteMetaFromJSONTyped(json, false);
}

export function NoteMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): NoteMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'originalAuthor': !exists(json, 'original_author') ? undefined : json['original_author'],
        'author': json['author'],
        'previousVersion': !exists(json, 'previous_version') ? undefined : json['previous_version'],
        'nextVersion': !exists(json, 'next_version') ? undefined : json['next_version'],
    };
}

export function NoteMetaToJSON(value?: NoteMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'original_author': value.originalAuthor,
        'author': value.author,
        'previous_version': value.previousVersion,
        'next_version': value.nextVersion,
    };
}

