/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.119
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.119
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    UserEmail,
    UserEmailFromJSON,
    UserEmailFromJSONTyped,
    UserEmailToJSON,
} from './UserEmail';

/**
 * 
 * @export
 * @interface Email
 */
export interface Email {
    /**
     * 
     * @type {string}
     * @memberof Email
     */
    address?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Email
     */
    verified?: boolean;
}

export function EmailFromJSON(json: any): Email {
    return EmailFromJSONTyped(json, false);
}

export function EmailFromJSONTyped(json: any, ignoreDiscriminator: boolean): Email {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address': !exists(json, 'address') ? undefined : json['address'],
        'verified': !exists(json, 'verified') ? undefined : json['verified'],
    };
}

export function EmailToJSON(value?: Email | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address': value.address,
        'verified': value.verified,
    };
}

