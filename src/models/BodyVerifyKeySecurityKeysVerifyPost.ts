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
import {
    SecurityKeyVerify,
    SecurityKeyVerifyFromJSON,
    SecurityKeyVerifyFromJSONTyped,
    SecurityKeyVerifyToJSON,
} from './SecurityKeyVerify';

/**
 * 
 * @export
 * @interface BodyVerifyKeySecurityKeysVerifyPost
 */
export interface BodyVerifyKeySecurityKeysVerifyPost {
    /**
     * 
     * @type {SecurityKeyVerify}
     * @memberof BodyVerifyKeySecurityKeysVerifyPost
     */
    key: SecurityKeyVerify;
}

export function BodyVerifyKeySecurityKeysVerifyPostFromJSON(json: any): BodyVerifyKeySecurityKeysVerifyPost {
    return BodyVerifyKeySecurityKeysVerifyPostFromJSONTyped(json, false);
}

export function BodyVerifyKeySecurityKeysVerifyPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): BodyVerifyKeySecurityKeysVerifyPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': SecurityKeyVerifyFromJSON(json['key']),
    };
}

export function BodyVerifyKeySecurityKeysVerifyPostToJSON(value?: BodyVerifyKeySecurityKeysVerifyPost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': SecurityKeyVerifyToJSON(value.key),
    };
}

