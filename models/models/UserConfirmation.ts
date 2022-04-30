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
* Information to confirm user
*/
export class UserConfirmation {
    'email': string;
    'verificationCode': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "verificationCode",
            "baseName": "verification_code",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserConfirmation.attributeTypeMap;
    }

    public constructor() {
    }
}

