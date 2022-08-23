/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.110
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.110
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
 * @interface Credential
 */
export interface Credential {
    /**
     * 
     * @type {string}
     * @memberof Credential
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Credential
     */
    value: string;
}

/**
 * Check if a given object implements the Credential interface.
 */
export function instanceOfCredential(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "value" in value;

    return isInstance;
}

export function CredentialFromJSON(json: any): Credential {
    return CredentialFromJSONTyped(json, false);
}

export function CredentialFromJSONTyped(json: any, ignoreDiscriminator: boolean): Credential {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'value': json['value'],
    };
}

export function CredentialToJSON(value?: Credential | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'value': value.value,
    };
}

