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

export class TicketResponse {
    'ticketId': string;
    'contactId': string;
    'subject': string;
    'priority': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "ticketId",
            "baseName": "ticket_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "contactId",
            "baseName": "contact_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        },
        {
            "name": "priority",
            "baseName": "priority",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TicketResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

