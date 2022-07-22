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
import type { OptionGroup } from './OptionGroup';
import {
    OptionGroupFromJSON,
    OptionGroupFromJSONTyped,
    OptionGroupToJSON,
} from './OptionGroup';

/**
 * 
 * @export
 * @interface Options
 */
export interface Options {
    /**
     * 
     * @type {boolean}
     * @memberof Options
     */
    required?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Options
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof Options
     */
    insetLabel?: string;
    /**
     * 
     * @type {string}
     * @memberof Options
     */
    placeholder?: string;
    /**
     * 
     * @type {string}
     * @memberof Options
     */
    hint?: string;
    /**
     * 
     * @type {string}
     * @memberof Options
     */
    icon?: string;
    /**
     * 
     * @type {number}
     * @memberof Options
     */
    maxLength?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Options
     */
    counter?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Options
     */
    caption?: string;
    /**
     * 
     * @type {string}
     * @memberof Options
     */
    color?: string;
    /**
     * 
     * @type {string}
     * @memberof Options
     */
    size?: string;
    /**
     * 
     * @type {string}
     * @memberof Options
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof Options
     */
    iconPosition?: string;
    /**
     * 
     * @type {Array<OptionGroup>}
     * @memberof Options
     */
    selections?: Array<OptionGroup>;
}

/**
 * Check if a given object implements the Options interface.
 */
export function instanceOfOptions(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OptionsFromJSON(json: any): Options {
    return OptionsFromJSONTyped(json, false);
}

export function OptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Options {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'required': !exists(json, 'required') ? undefined : json['required'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'insetLabel': !exists(json, 'insetLabel') ? undefined : json['insetLabel'],
        'placeholder': !exists(json, 'placeholder') ? undefined : json['placeholder'],
        'hint': !exists(json, 'hint') ? undefined : json['hint'],
        'icon': !exists(json, 'icon') ? undefined : json['icon'],
        'maxLength': !exists(json, 'maxLength') ? undefined : json['maxLength'],
        'counter': !exists(json, 'counter') ? undefined : json['counter'],
        'caption': !exists(json, 'caption') ? undefined : json['caption'],
        'color': !exists(json, 'color') ? undefined : json['color'],
        'size': !exists(json, 'size') ? undefined : json['size'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'iconPosition': !exists(json, 'iconPosition') ? undefined : json['iconPosition'],
        'selections': !exists(json, 'selections') ? undefined : ((json['selections'] as Array<any>).map(OptionGroupFromJSON)),
    };
}

export function OptionsToJSON(value?: Options | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'required': value.required,
        'label': value.label,
        'insetLabel': value.insetLabel,
        'placeholder': value.placeholder,
        'hint': value.hint,
        'icon': value.icon,
        'maxLength': value.maxLength,
        'counter': value.counter,
        'caption': value.caption,
        'color': value.color,
        'size': value.size,
        'type': value.type,
        'iconPosition': value.iconPosition,
        'selections': value.selections === undefined ? undefined : ((value.selections as Array<any>).map(OptionGroupToJSON)),
    };
}

