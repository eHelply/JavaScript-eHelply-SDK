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
* Tokens, naming scheme based off of cognito return fields
*/
export class UserTokenReturn {
    'accessToken': string;
    'expiresIn': number;
    'tokenType': string;
    'idToken': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accessToken",
            "baseName": "AccessToken",
            "type": "string",
            "format": ""
        },
        {
            "name": "expiresIn",
            "baseName": "ExpiresIn",
            "type": "number",
            "format": ""
        },
        {
            "name": "tokenType",
            "baseName": "TokenType",
            "type": "string",
            "format": ""
        },
        {
            "name": "idToken",
            "baseName": "IdToken",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserTokenReturn.attributeTypeMap;
    }

    public constructor() {
    }
}

