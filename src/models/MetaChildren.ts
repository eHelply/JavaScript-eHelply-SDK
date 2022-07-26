/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.94
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.94
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
 * @interface MetaChildren
 */
export interface MetaChildren {
    /**
     * 
     * @type {string}
     * @memberof MetaChildren
     */
    childName?: string;
    /**
     * 
     * @type {string}
     * @memberof MetaChildren
     */
    childDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof MetaChildren
     */
    childUuid?: string;
}

/**
 * Check if a given object implements the MetaChildren interface.
 */
export function instanceOfMetaChildren(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MetaChildrenFromJSON(json: any): MetaChildren {
    return MetaChildrenFromJSONTyped(json, false);
}

export function MetaChildrenFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetaChildren {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'childName': !exists(json, 'child_name') ? undefined : json['child_name'],
        'childDescription': !exists(json, 'child_description') ? undefined : json['child_description'],
        'childUuid': !exists(json, 'child_uuid') ? undefined : json['child_uuid'],
    };
}

export function MetaChildrenToJSON(value?: MetaChildren | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'child_name': value.childName,
        'child_description': value.childDescription,
        'child_uuid': value.childUuid,
    };
}

