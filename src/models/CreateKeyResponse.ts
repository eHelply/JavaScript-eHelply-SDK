/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.118
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.118
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
 * @interface CreateKeyResponse
 */
export interface CreateKeyResponse {
    /**
     * 
     * @type {string}
     * @memberof CreateKeyResponse
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof CreateKeyResponse
     */
    access: string;
    /**
     * 
     * @type {string}
     * @memberof CreateKeyResponse
     */
    secret: string;
}

export function CreateKeyResponseFromJSON(json: any): CreateKeyResponse {
    return CreateKeyResponseFromJSONTyped(json, false);
}

export function CreateKeyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateKeyResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'access': json['access'],
        'secret': json['secret'],
    };
}

export function CreateKeyResponseToJSON(value?: CreateKeyResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'access': value.access,
        'secret': value.secret,
    };
}

