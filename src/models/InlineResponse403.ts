/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.74
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.74
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
 * @interface InlineResponse403
 */
export interface InlineResponse403 {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse403
     */
    message?: string;
}

export function InlineResponse403FromJSON(json: any): InlineResponse403 {
    return InlineResponse403FromJSONTyped(json, false);
}

export function InlineResponse403FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse403 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function InlineResponse403ToJSON(value?: InlineResponse403 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
    };
}

