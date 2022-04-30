/**
 * eHelply SDK - 1.1.71
 * eHelply SDK for SuperStack Services
 *
 * OpenAPI spec version: 1.1.71
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Used for create endpoint
*/
export class SecurityKeyCreate {
    'name': string;
    'summary': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "summary",
            "baseName": "summary",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SecurityKeyCreate.attributeTypeMap;
    }

    public constructor() {
    }
}

