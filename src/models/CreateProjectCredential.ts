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
import type { Credential } from './Credential';
import {
    CredentialFromJSON,
    CredentialFromJSONTyped,
    CredentialToJSON,
} from './Credential';

/**
 * 
 * @export
 * @interface CreateProjectCredential
 */
export interface CreateProjectCredential {
    /**
     * 
     * @type {string}
     * @memberof CreateProjectCredential
     */
    serviceName: string;
    /**
     * 
     * @type {Array<Credential>}
     * @memberof CreateProjectCredential
     */
    secrets: Array<Credential>;
}

/**
 * Check if a given object implements the CreateProjectCredential interface.
 */
export function instanceOfCreateProjectCredential(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "serviceName" in value;
    isInstance = isInstance && "secrets" in value;

    return isInstance;
}

export function CreateProjectCredentialFromJSON(json: any): CreateProjectCredential {
    return CreateProjectCredentialFromJSONTyped(json, false);
}

export function CreateProjectCredentialFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateProjectCredential {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'serviceName': json['service_name'],
        'secrets': ((json['secrets'] as Array<any>).map(CredentialFromJSON)),
    };
}

export function CreateProjectCredentialToJSON(value?: CreateProjectCredential | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'service_name': value.serviceName,
        'secrets': ((value.secrets as Array<any>).map(CredentialToJSON)),
    };
}

