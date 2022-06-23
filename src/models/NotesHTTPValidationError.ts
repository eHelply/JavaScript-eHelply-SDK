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
    NotesValidationError,
    NotesValidationErrorFromJSON,
    NotesValidationErrorFromJSONTyped,
    NotesValidationErrorToJSON,
} from './NotesValidationError';

/**
 * 
 * @export
 * @interface NotesHTTPValidationError
 */
export interface NotesHTTPValidationError {
    /**
     * 
     * @type {Array<NotesValidationError>}
     * @memberof NotesHTTPValidationError
     */
    detail?: Array<NotesValidationError>;
}

export function NotesHTTPValidationErrorFromJSON(json: any): NotesHTTPValidationError {
    return NotesHTTPValidationErrorFromJSONTyped(json, false);
}

export function NotesHTTPValidationErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotesHTTPValidationError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'detail': !exists(json, 'detail') ? undefined : ((json['detail'] as Array<any>).map(NotesValidationErrorFromJSON)),
    };
}

export function NotesHTTPValidationErrorToJSON(value?: NotesHTTPValidationError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'detail': value.detail === undefined ? undefined : ((value.detail as Array<any>).map(NotesValidationErrorToJSON)),
    };
}

