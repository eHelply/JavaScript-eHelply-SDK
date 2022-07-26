/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.96
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.96
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
 * @interface SecurityEncryptionKeyGet
 */
export interface SecurityEncryptionKeyGet {
    /**
     * 
     * @type {string}
     * @memberof SecurityEncryptionKeyGet
     */
    key: string;
    /**
     * 
     * @type {string}
     * @memberof SecurityEncryptionKeyGet
     */
    category: string;
    /**
     * 
     * @type {string}
     * @memberof SecurityEncryptionKeyGet
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof SecurityEncryptionKeyGet
     */
    retrievedAt: string;
}

/**
 * Check if a given object implements the SecurityEncryptionKeyGet interface.
 */
export function instanceOfSecurityEncryptionKeyGet(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "category" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "retrievedAt" in value;

    return isInstance;
}

export function SecurityEncryptionKeyGetFromJSON(json: any): SecurityEncryptionKeyGet {
    return SecurityEncryptionKeyGetFromJSONTyped(json, false);
}

export function SecurityEncryptionKeyGetFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecurityEncryptionKeyGet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': json['key'],
        'category': json['category'],
        'createdAt': json['created_at'],
        'retrievedAt': json['retrieved_at'],
    };
}

export function SecurityEncryptionKeyGetToJSON(value?: SecurityEncryptionKeyGet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'category': value.category,
        'created_at': value.createdAt,
        'retrieved_at': value.retrievedAt,
    };
}

