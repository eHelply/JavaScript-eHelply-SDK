/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.97
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.97
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BasicMetaCreate } from './BasicMetaCreate';
import {
    BasicMetaCreateFromJSON,
    BasicMetaCreateFromJSONTyped,
    BasicMetaCreateToJSON,
} from './BasicMetaCreate';
import type { DetailedMetaCreate } from './DetailedMetaCreate';
import {
    DetailedMetaCreateFromJSON,
    DetailedMetaCreateFromJSONTyped,
    DetailedMetaCreateToJSON,
} from './DetailedMetaCreate';
import type { Field } from './Field';
import {
    FieldFromJSON,
    FieldFromJSONTyped,
    FieldToJSON,
} from './Field';
import type { MetaChildren } from './MetaChildren';
import {
    MetaChildrenFromJSON,
    MetaChildrenFromJSONTyped,
    MetaChildrenToJSON,
} from './MetaChildren';
import type { MetaCustom } from './MetaCustom';
import {
    MetaCustomFromJSON,
    MetaCustomFromJSONTyped,
    MetaCustomToJSON,
} from './MetaCustom';

/**
 * Meta
 * @export
 * @interface MetaCreate
 */
export interface MetaCreate {
    /**
     * 
     * @type {BasicMetaCreate}
     * @memberof MetaCreate
     */
    basic?: BasicMetaCreate;
    /**
     * 
     * @type {DetailedMetaCreate}
     * @memberof MetaCreate
     */
    detailed?: DetailedMetaCreate;
    /**
     * 
     * @type {MetaCustom}
     * @memberof MetaCreate
     */
    custom?: MetaCustom;
    /**
     * 
     * @type {Array<Field>}
     * @memberof MetaCreate
     */
    fields?: Array<Field>;
    /**
     * 
     * @type {Array<MetaChildren>}
     * @memberof MetaCreate
     */
    children?: Array<MetaChildren>;
    /**
     * 
     * @type {string}
     * @memberof MetaCreate
     */
    parentUuid?: string;
}

/**
 * Check if a given object implements the MetaCreate interface.
 */
export function instanceOfMetaCreate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MetaCreateFromJSON(json: any): MetaCreate {
    return MetaCreateFromJSONTyped(json, false);
}

export function MetaCreateFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetaCreate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'basic': !exists(json, 'basic') ? undefined : BasicMetaCreateFromJSON(json['basic']),
        'detailed': !exists(json, 'detailed') ? undefined : DetailedMetaCreateFromJSON(json['detailed']),
        'custom': !exists(json, 'custom') ? undefined : MetaCustomFromJSON(json['custom']),
        'fields': !exists(json, 'fields') ? undefined : ((json['fields'] as Array<any>).map(FieldFromJSON)),
        'children': !exists(json, 'children') ? undefined : ((json['children'] as Array<any>).map(MetaChildrenFromJSON)),
        'parentUuid': !exists(json, 'parent_uuid') ? undefined : json['parent_uuid'],
    };
}

export function MetaCreateToJSON(value?: MetaCreate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'basic': BasicMetaCreateToJSON(value.basic),
        'detailed': DetailedMetaCreateToJSON(value.detailed),
        'custom': MetaCustomToJSON(value.custom),
        'fields': value.fields === undefined ? undefined : ((value.fields as Array<any>).map(FieldToJSON)),
        'children': value.children === undefined ? undefined : ((value.children as Array<any>).map(MetaChildrenToJSON)),
        'parent_uuid': value.parentUuid,
    };
}

