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
import {
    GetSecret,
    GetSecretFromJSON,
    GetSecretFromJSONTyped,
    GetSecretToJSON,
} from './GetSecret';

/**
 * 
 * @export
 * @interface GetProjectCredential
 */
export interface GetProjectCredential {
    /**
     * 
     * @type {string}
     * @memberof GetProjectCredential
     */
    serviceName: string;
    /**
     * 
     * @type {Array<GetSecret>}
     * @memberof GetProjectCredential
     */
    secrets: Array<GetSecret>;
}

export function GetProjectCredentialFromJSON(json: any): GetProjectCredential {
    return GetProjectCredentialFromJSONTyped(json, false);
}

export function GetProjectCredentialFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetProjectCredential {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'serviceName': json['service_name'],
        'secrets': ((json['secrets'] as Array<any>).map(GetSecretFromJSON)),
    };
}

export function GetProjectCredentialToJSON(value?: GetProjectCredential | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'service_name': value.serviceName,
        'secrets': ((value.secrets as Array<any>).map(GetSecretToJSON)),
    };
}

