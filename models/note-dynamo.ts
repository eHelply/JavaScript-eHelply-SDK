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


import { NoteMeta } from './note-meta';

/**
 * A note from DynamoDB
 * @export
 * @interface NoteDynamo
 */
export interface NoteDynamo {
    /**
     * 
     * @type {string}
     * @memberof NoteDynamo
     */
    'uuid': string;
    /**
     * 
     * @type {any}
     * @memberof NoteDynamo
     */
    'content'?: any;
    /**
     * 
     * @type {string}
     * @memberof NoteDynamo
     */
    'time': string;
    /**
     * 
     * @type {NoteMeta}
     * @memberof NoteDynamo
     */
    'meta': NoteMeta;
}

