/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.87
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.87
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { OptionGroup } from './option-group';

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
    'required'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Options
     */
    'label'?: string;
    /**
     * 
     * @type {string}
     * @memberof Options
     */
    'insetLabel'?: string;
    /**
     * 
     * @type {string}
     * @memberof Options
     */
    'placeholder'?: string;
    /**
     * 
     * @type {string}
     * @memberof Options
     */
    'hint'?: string;
    /**
     * 
     * @type {string}
     * @memberof Options
     */
    'icon'?: string;
    /**
     * 
     * @type {number}
     * @memberof Options
     */
    'maxLength'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof Options
     */
    'counter'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Options
     */
    'caption'?: string;
    /**
     * 
     * @type {string}
     * @memberof Options
     */
    'color'?: string;
    /**
     * 
     * @type {string}
     * @memberof Options
     */
    'size'?: string;
    /**
     * 
     * @type {string}
     * @memberof Options
     */
    'type'?: string;
    /**
     * 
     * @type {string}
     * @memberof Options
     */
    'iconPosition'?: string;
    /**
     * 
     * @type {Array<OptionGroup>}
     * @memberof Options
     */
    'selections'?: Array<OptionGroup>;
}

