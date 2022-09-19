/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.108
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.108
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    BasicMeta,
    BasicMetaFromJSON,
    BasicMetaFromJSONTyped,
    BasicMetaToJSON,
} from './BasicMeta';
import {
    DatesMeta,
    DatesMetaFromJSON,
    DatesMetaFromJSONTyped,
    DatesMetaToJSON,
} from './DatesMeta';
import {
    DetailedMetaGet,
    DetailedMetaGetFromJSON,
    DetailedMetaGetFromJSONTyped,
    DetailedMetaGetToJSON,
} from './DetailedMetaGet';
import {
    Field,
    FieldFromJSON,
    FieldFromJSONTyped,
    FieldToJSON,
} from './Field';
import {
    MetaChildren,
    MetaChildrenFromJSON,
    MetaChildrenFromJSONTyped,
    MetaChildrenToJSON,
} from './MetaChildren';
import {
    MetaCustom,
    MetaCustomFromJSON,
    MetaCustomFromJSONTyped,
    MetaCustomToJSON,
} from './MetaCustom';

/**
 * Meta
 * @export
 * @interface MetaGet
 */
export interface MetaGet {
    /**
     * 
     * @type {string}
     * @memberof MetaGet
     */
    uuid: string;
    /**
     * 
     * @type {BasicMeta}
     * @memberof MetaGet
     */
    basic: BasicMeta;
    /**
     * 
     * @type {DetailedMetaGet}
     * @memberof MetaGet
     */
    detailed: DetailedMetaGet;
    /**
     * 
     * @type {MetaCustom}
     * @memberof MetaGet
     */
    custom?: MetaCustom;
    /**
     * 
     * @type {DatesMeta}
     * @memberof MetaGet
     */
    dates?: DatesMeta;
    /**
     * 
     * @type {Array<Field>}
     * @memberof MetaGet
     */
    fields?: Array<Field>;
    /**
     * 
     * @type {Array<MetaChildren>}
     * @memberof MetaGet
     */
    children?: Array<MetaChildren>;
    /**
     * 
     * @type {string}
     * @memberof MetaGet
     */
    parentUuid?: string;
}

export function MetaGetFromJSON(json: any): MetaGet {
    return MetaGetFromJSONTyped(json, false);
}

export function MetaGetFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetaGet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'basic': BasicMetaFromJSON(json['basic']),
        'detailed': DetailedMetaGetFromJSON(json['detailed']),
        'custom': !exists(json, 'custom') ? undefined : MetaCustomFromJSON(json['custom']),
        'dates': !exists(json, 'dates') ? undefined : DatesMetaFromJSON(json['dates']),
        'fields': !exists(json, 'fields') ? undefined : ((json['fields'] as Array<any>).map(FieldFromJSON)),
        'children': !exists(json, 'children') ? undefined : ((json['children'] as Array<any>).map(MetaChildrenFromJSON)),
        'parentUuid': !exists(json, 'parent_uuid') ? undefined : json['parent_uuid'],
    };
}

export function MetaGetToJSON(value?: MetaGet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'basic': BasicMetaToJSON(value.basic),
        'detailed': DetailedMetaGetToJSON(value.detailed),
        'custom': MetaCustomToJSON(value.custom),
        'dates': DatesMetaToJSON(value.dates),
        'fields': value.fields === undefined ? undefined : ((value.fields as Array<any>).map(FieldToJSON)),
        'children': value.children === undefined ? undefined : ((value.children as Array<any>).map(MetaChildrenToJSON)),
        'parent_uuid': value.parentUuid,
    };
}

