/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.106
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.106
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
 * @interface SecurityEncryptionKeyResponse
 */
export interface SecurityEncryptionKeyResponse {
    /**
     * 
     * @type {string}
     * @memberof SecurityEncryptionKeyResponse
     */
    uuid: string;
    /**
     * 
     * @type {Blob}
     * @memberof SecurityEncryptionKeyResponse
     */
    key: Blob;
    /**
     * 
     * @type {string}
     * @memberof SecurityEncryptionKeyResponse
     */
    category: string;
    /**
     * 
     * @type {string}
     * @memberof SecurityEncryptionKeyResponse
     */
    deletedAt: string;
    /**
     * 
     * @type {string}
     * @memberof SecurityEncryptionKeyResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof SecurityEncryptionKeyResponse
     */
    retrievedAt: string;
}

/**
 * Check if a given object implements the SecurityEncryptionKeyResponse interface.
 */
export function instanceOfSecurityEncryptionKeyResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "uuid" in value;
    isInstance = isInstance && "key" in value;
    isInstance = isInstance && "category" in value;
    isInstance = isInstance && "deletedAt" in value;
    isInstance = isInstance && "createdAt" in value;
    isInstance = isInstance && "retrievedAt" in value;

    return isInstance;
}

export function SecurityEncryptionKeyResponseFromJSON(json: any): SecurityEncryptionKeyResponse {
    return SecurityEncryptionKeyResponseFromJSONTyped(json, false);
}

export function SecurityEncryptionKeyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecurityEncryptionKeyResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'key': json['key'],
        'category': json['category'],
        'deletedAt': json['deleted_at'],
        'createdAt': json['created_at'],
        'retrievedAt': json['retrieved_at'],
    };
}

export function SecurityEncryptionKeyResponseToJSON(value?: SecurityEncryptionKeyResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'key': value.key,
        'category': value.category,
        'deleted_at': value.deletedAt,
        'created_at': value.createdAt,
        'retrieved_at': value.retrievedAt,
    };
}

