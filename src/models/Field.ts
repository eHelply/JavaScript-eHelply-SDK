/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.83
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.83
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
 * Field
 * @export
 * @interface Field
 */
export interface Field {
    /**
     * 
     * @type {string}
     * @memberof Field
     */
    uuid?: string;
    /**
     * 
     * @type {number}
     * @memberof Field
     */
    type?: number;
    /**
     * 
     * @type {string}
     * @memberof Field
     */
    placeholder?: string;
    /**
     * 
     * @type {Validations}
     * @memberof Field
     */
    validations?: Validations;
    /**
     * 
     * @type {string}
     * @memberof Field
     */
    hint?: string;
    /**
     * 
     * @type {string}
     * @memberof Field
     */
    icon?: string;
    /**
     * 
     * @type {string}
     * @memberof Field
     */
    label?: string;
    /**
     * 
     * @type {Options}
     * @memberof Field
     */
    options?: Options;
}

export function FieldFromJSON(json: any): Field {
    return FieldFromJSONTyped(json, false);
}

export function FieldFromJSONTyped(json: any, ignoreDiscriminator: boolean): Field {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'placeholder': !exists(json, 'placeholder') ? undefined : json['placeholder'],
        'validations': !exists(json, 'validations') ? undefined : ValidationsFromJSON(json['validations']),
        'hint': !exists(json, 'hint') ? undefined : json['hint'],
        'icon': !exists(json, 'icon') ? undefined : json['icon'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'options': !exists(json, 'options') ? undefined : OptionsFromJSON(json['options']),
    };
}

export function FieldToJSON(value?: Field | null): any {
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

