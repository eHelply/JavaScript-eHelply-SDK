/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK
 * eHelply SDK
 *
 * The version of the OpenAPI document: 1.1.31
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { BasicMeta } from './basic-meta';
import { DatesMeta } from './dates-meta';
import { DetailedMeta } from './detailed-meta';

/**
 * A meta from DynamoDB
 * @export
 * @interface MetaDynamo
 */
export interface MetaDynamo {
    /**
     * 
     * @type {BasicMeta}
     * @memberof MetaDynamo
     */
    'basic'?: BasicMeta;
    /**
     * 
     * @type {DetailedMeta}
     * @memberof MetaDynamo
     */
    'detailed'?: DetailedMeta;
    /**
     * 
     * @type {object}
     * @memberof MetaDynamo
     */
    'custom'?: object;
    /**
     * 
     * @type {DatesMeta}
     * @memberof MetaDynamo
     */
    'dates'?: DatesMeta;
    /**
     * 
     * @type {string}
     * @memberof MetaDynamo
     */
    'uuid': string;
}
