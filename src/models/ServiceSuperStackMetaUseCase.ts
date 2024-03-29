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
 * @interface ServiceSuperStackMetaUseCase
 */
export interface ServiceSuperStackMetaUseCase {
    /**
     * 
     * @type {string}
     * @memberof ServiceSuperStackMetaUseCase
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ServiceSuperStackMetaUseCase
     */
    summary: string;
}

export function ServiceSuperStackMetaUseCaseFromJSON(json: any): ServiceSuperStackMetaUseCase {
    return ServiceSuperStackMetaUseCaseFromJSONTyped(json, false);
}

export function ServiceSuperStackMetaUseCaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceSuperStackMetaUseCase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'summary': json['summary'],
    };
}

export function ServiceSuperStackMetaUseCaseToJSON(value?: ServiceSuperStackMetaUseCase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'summary': value.summary,
    };
}

