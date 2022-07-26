/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.99
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.99
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
 * @interface GetSecret
 */
export interface GetSecret {
    /**
     * 
     * @type {string}
     * @memberof GetSecret
     */
    name: string;
}

/**
 * Check if a given object implements the GetSecret interface.
 */
export function instanceOfGetSecret(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;

    return isInstance;
}

export function GetSecretFromJSON(json: any): GetSecret {
    return GetSecretFromJSONTyped(json, false);
}

export function GetSecretFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetSecret {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
    };
}

export function GetSecretToJSON(value?: GetSecret | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

