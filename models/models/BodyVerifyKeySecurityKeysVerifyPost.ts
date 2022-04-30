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

import { SecurityKeyVerify } from './SecurityKeyVerify';
import { HttpFile } from '../http/http';

export class BodyVerifyKeySecurityKeysVerifyPost {
    'key': SecurityKeyVerify;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "SecurityKeyVerify",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BodyVerifyKeySecurityKeysVerifyPost.attributeTypeMap;
    }

    public constructor() {
    }
}

