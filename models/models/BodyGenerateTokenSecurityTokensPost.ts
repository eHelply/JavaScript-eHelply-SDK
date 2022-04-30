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

import { SecurityCreateToken } from './SecurityCreateToken';
import { HttpFile } from '../http/http';

export class BodyGenerateTokenSecurityTokensPost {
    'token': SecurityCreateToken;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "token",
            "baseName": "token",
            "type": "SecurityCreateToken",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BodyGenerateTokenSecurityTokensPost.attributeTypeMap;
    }

    public constructor() {
    }
}

