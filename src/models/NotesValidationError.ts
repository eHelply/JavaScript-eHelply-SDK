/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.82
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.82
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
 * @interface NotesValidationError
 */
export interface NotesValidationError {
    /**
     * 
     * @type {Array<string>}
     * @memberof NotesValidationError
     */
    loc: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof NotesValidationError
     */
    msg: string;
    /**
     * 
     * @type {string}
     * @memberof NotesValidationError
     */
    type: string;
}

export function NotesValidationErrorFromJSON(json: any): NotesValidationError {
    return NotesValidationErrorFromJSONTyped(json, false);
}

export function NotesValidationErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotesValidationError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'loc': json['loc'],
        'msg': json['msg'],
        'type': json['type'],
    };
}

export function NotesValidationErrorToJSON(value?: NotesValidationError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'loc': value.loc,
        'msg': value.msg,
        'type': value.type,
    };
}

