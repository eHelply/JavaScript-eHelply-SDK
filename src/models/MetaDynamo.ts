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
import type { Basic } from './Basic';
import {
    BasicFromJSON,
    BasicFromJSONTyped,
    BasicToJSON,
} from './Basic';
import type { DatesMeta } from './DatesMeta';
import {
    DatesMetaFromJSON,
    DatesMetaFromJSONTyped,
    DatesMetaToJSON,
} from './DatesMeta';
import type { Detailed } from './Detailed';
import {
    DetailedFromJSON,
    DetailedFromJSONTyped,
    DetailedToJSON,
} from './Detailed';
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
 * A meta from DynamoDB
 * @export
 * @interface MetaDynamo
 */
export interface MetaDynamo {
    /**
     * 
     * @type {Basic}
     * @memberof MetaDynamo
     */
    basic?: Basic;
    /**
     * 
     * @type {Detailed}
     * @memberof MetaDynamo
     */
    detailed?: Detailed;
    /**
     * 
     * @type {MetaCustom}
     * @memberof MetaDynamo
     */
    custom?: MetaCustom;
    /**
     * 
     * @type {DatesMeta}
     * @memberof MetaDynamo
     */
    dates?: DatesMeta;
    /**
     * 
     * @type {Array<Field>}
     * @memberof MetaDynamo
     */
    fields?: Array<Field>;
    /**
     * 
     * @type {Array<MetaChildren>}
     * @memberof MetaDynamo
     */
    children?: Array<MetaChildren>;
    /**
     * 
     * @type {string}
     * @memberof MetaDynamo
     */
    parentUuid?: string;
    /**
     * 
     * @type {string}
     * @memberof MetaDynamo
     */
    uuid: string;
}

/**
 * Check if a given object implements the MetaDynamo interface.
 */
export function instanceOfMetaDynamo(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "uuid" in value;

    return isInstance;
}

export function MetaDynamoFromJSON(json: any): MetaDynamo {
    return MetaDynamoFromJSONTyped(json, false);
}

export function MetaDynamoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetaDynamo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'basic': !exists(json, 'basic') ? undefined : BasicFromJSON(json['basic']),
        'detailed': !exists(json, 'detailed') ? undefined : DetailedFromJSON(json['detailed']),
        'custom': !exists(json, 'custom') ? undefined : MetaCustomFromJSON(json['custom']),
        'dates': !exists(json, 'dates') ? undefined : DatesMetaFromJSON(json['dates']),
        'fields': !exists(json, 'fields') ? undefined : ((json['fields'] as Array<any>).map(FieldFromJSON)),
        'children': !exists(json, 'children') ? undefined : ((json['children'] as Array<any>).map(MetaChildrenFromJSON)),
        'parentUuid': !exists(json, 'parent_uuid') ? undefined : json['parent_uuid'],
        'uuid': json['uuid'],
    };
}

export function MetaDynamoToJSON(value?: MetaDynamo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'basic': BasicToJSON(value.basic),
        'detailed': DetailedToJSON(value.detailed),
        'custom': MetaCustomToJSON(value.custom),
        'dates': DatesMetaToJSON(value.dates),
        'fields': value.fields === undefined ? undefined : ((value.fields as Array<any>).map(FieldToJSON)),
        'children': value.children === undefined ? undefined : ((value.children as Array<any>).map(MetaChildrenToJSON)),
        'parent_uuid': value.parentUuid,
        'uuid': value.uuid,
    };
}

