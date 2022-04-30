/**
 * eHelply SDK - 1.1.70
 * eHelply SDK for SuperStack Services
 *
 * OpenAPI spec version: 1.1.70
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Detailed meta based on Notes
*/
export class DetailedMeta {
    'summaryUuid'?: string;
    'descriptionUuid'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "summaryUuid",
            "baseName": "summary_uuid",
            "type": "string",
            "format": ""
        },
        {
            "name": "descriptionUuid",
            "baseName": "description_uuid",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DetailedMeta.attributeTypeMap;
    }

    public constructor() {
    }
}

