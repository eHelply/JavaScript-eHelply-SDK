/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.72
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.72
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Options } from './options';
import { Validations } from './validations';

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
    'uuid'?: string;
    /**
     * 
     * @type {number}
     * @memberof Field
     */
    'type'?: number;
    /**
     * 
     * @type {string}
     * @memberof Field
     */
    'placeholder'?: string;
    /**
     * 
     * @type {Validations}
     * @memberof Field
     */
    'validations'?: Validations;
    /**
     * 
     * @type {string}
     * @memberof Field
     */
    'hint'?: string;
    /**
     * 
     * @type {string}
     * @memberof Field
     */
    'icon'?: string;
    /**
     * 
     * @type {string}
     * @memberof Field
     */
    'label'?: string;
    /**
     * 
     * @type {Options}
     * @memberof Field
     */
    'options'?: Options;
}

