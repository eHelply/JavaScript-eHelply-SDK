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

import { UserEmail } from './UserEmail';
import { UserFlags } from './UserFlags';
import { HttpFile } from '../http/http';

/**
* When retrieving a user
*/
export class UserResponse {
    'firstName'?: string;
    'lastName'?: string;
    'phoneNumber'?: string;
    'country'?: string;
    'picture'?: string;
    'gpsLocation'?: any;
    'verifiedLegalTerms'?: boolean;
    'dateCreated'?: Date;
    'dateUpdated'?: Date;
    'dateDeleted'?: Date;
    'email'?: UserEmail;
    'missing'?: Array<string>;
    'uuid'?: string;
    'participants'?: Array<any>;
    'flags'?: UserFlags;
    'lastLogin'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "firstName",
            "baseName": "first_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "last_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "phoneNumber",
            "baseName": "phone_number",
            "type": "string",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "string",
            "format": ""
        },
        {
            "name": "picture",
            "baseName": "picture",
            "type": "string",
            "format": ""
        },
        {
            "name": "gpsLocation",
            "baseName": "gps_location",
            "type": "any",
            "format": ""
        },
        {
            "name": "verifiedLegalTerms",
            "baseName": "verified_legal_terms",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "dateCreated",
            "baseName": "date_created",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "dateUpdated",
            "baseName": "date_updated",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "dateDeleted",
            "baseName": "date_deleted",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "UserEmail",
            "format": ""
        },
        {
            "name": "missing",
            "baseName": "missing",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string",
            "format": ""
        },
        {
            "name": "participants",
            "baseName": "participants",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "flags",
            "baseName": "flags",
            "type": "UserFlags",
            "format": ""
        },
        {
            "name": "lastLogin",
            "baseName": "last_login",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return UserResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

