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

export class AlarmAssign {
    'assigneeUuid': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "assigneeUuid",
            "baseName": "assignee_uuid",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AlarmAssign.attributeTypeMap;
    }

    public constructor() {
    }
}

