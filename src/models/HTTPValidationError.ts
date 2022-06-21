/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.80
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.80
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ValidationError,
    ValidationErrorFromJSON,
    ValidationErrorFromJSONTyped,
    ValidationErrorToJSON,
} from './ValidationError';

/**
 * 
 * @export
 * @interface HTTPValidationError
 */
export interface HTTPValidationError {
    /**
     * 
     * @type {Array<ValidationError>}
     * @memberof HTTPValidationError
     */
    detail?: Array<ValidationError>;
}

export function HTTPValidationErrorFromJSON(json: any): HTTPValidationError {
    return HTTPValidationErrorFromJSONTyped(json, false);
}

export function HTTPValidationErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): HTTPValidationError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'detail': !exists(json, 'detail') ? undefined : ((json['detail'] as Array<any>).map(ValidationErrorFromJSON)),
    };
}

export function HTTPValidationErrorToJSON(value?: HTTPValidationError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'detail': value.detail === undefined ? undefined : ((value.detail as Array<any>).map(ValidationErrorToJSON)),
    };
}

