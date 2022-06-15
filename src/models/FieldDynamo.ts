/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.79
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.79
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Options,
    OptionsFromJSON,
    OptionsFromJSONTyped,
    OptionsToJSON,
} from './Options';
import {
    Validations,
    ValidationsFromJSON,
    ValidationsFromJSONTyped,
    ValidationsToJSON,
} from './Validations';

/**
 * Field Dynamo
 * @export
 * @interface FieldDynamo
 */
export interface FieldDynamo {
    /**
     * 
     * @type {string}
     * @memberof FieldDynamo
     */
    uuid: string;
    /**
     * 
     * @type {number}
     * @memberof FieldDynamo
     */
    type?: number;
    /**
     * 
     * @type {string}
     * @memberof FieldDynamo
     */
    placeholder?: string;
    /**
     * 
     * @type {Validations}
     * @memberof FieldDynamo
     */
    validations?: Validations;
    /**
     * 
     * @type {string}
     * @memberof FieldDynamo
     */
    hint?: string;
    /**
     * 
     * @type {string}
     * @memberof FieldDynamo
     */
    icon?: string;
    /**
     * 
     * @type {string}
     * @memberof FieldDynamo
     */
    label?: string;
    /**
     * 
     * @type {Options}
     * @memberof FieldDynamo
     */
    options?: Options;
}

export function FieldDynamoFromJSON(json: any): FieldDynamo {
    return FieldDynamoFromJSONTyped(json, false);
}

export function FieldDynamoFromJSONTyped(json: any, ignoreDiscriminator: boolean): FieldDynamo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'placeholder': !exists(json, 'placeholder') ? undefined : json['placeholder'],
        'validations': !exists(json, 'validations') ? undefined : ValidationsFromJSON(json['validations']),
        'hint': !exists(json, 'hint') ? undefined : json['hint'],
        'icon': !exists(json, 'icon') ? undefined : json['icon'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'options': !exists(json, 'options') ? undefined : OptionsFromJSON(json['options']),
    };
}

export function FieldDynamoToJSON(value?: FieldDynamo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'type': value.type,
        'placeholder': value.placeholder,
        'validations': ValidationsToJSON(value.validations),
        'hint': value.hint,
        'icon': value.icon,
        'label': value.label,
        'options': OptionsToJSON(value.options),
    };
}

