/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.112
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.112
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Basic,
    BasicFromJSON,
    BasicFromJSONTyped,
    BasicToJSON,
} from './Basic';
import {
    Dates,
    DatesFromJSON,
    DatesFromJSONTyped,
    DatesToJSON,
} from './Dates';
import {
    Detailed,
    DetailedFromJSON,
    DetailedFromJSONTyped,
    DetailedToJSON,
} from './Detailed';
import {
    Field,
    FieldFromJSON,
    FieldFromJSONTyped,
    FieldToJSON,
} from './Field';

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
     * @type {object}
     * @memberof MetaDynamo
     */
    custom?: object;
    /**
     * 
     * @type {Dates}
     * @memberof MetaDynamo
     */
    dates?: Dates;
    /**
     * 
     * @type {Array<Field>}
     * @memberof MetaDynamo
     */
    fields?: Array<Field>;
    /**
     * 
     * @type {Array<object>}
     * @memberof MetaDynamo
     */
    children?: Array<object>;
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
        'custom': !exists(json, 'custom') ? undefined : json['custom'],
        'dates': !exists(json, 'dates') ? undefined : DatesFromJSON(json['dates']),
        'fields': !exists(json, 'fields') ? undefined : ((json['fields'] as Array<any>).map(FieldFromJSON)),
        'children': !exists(json, 'children') ? undefined : json['children'],
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
        'custom': value.custom,
        'dates': DatesToJSON(value.dates),
        'fields': value.fields === undefined ? undefined : ((value.fields as Array<any>).map(FieldToJSON)),
        'children': value.children,
        'parent_uuid': value.parentUuid,
        'uuid': value.uuid,
    };
}

