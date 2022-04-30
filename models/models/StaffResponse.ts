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
* **:param** uuid                                **type:** string **:param** project_uuid                        **type:** string or None  **:param** entity                              **type:** string or None  **:param** place                               **type:** string or None  **:param** company                             **type:** string or None  **:param** schedule                            **type:** string or None  **:param** catalog                             **type:** string or None  **:param** reviews                             **type:** string or None  **:param** created_at                          **type:** string or None  **:param** updated_at                          **type:** string or None  **:param** deleted_at                          **type:** string or None
*/
export class StaffResponse {
    'uuid': string;
    'projectUuid'?: string;
    'entity'?: any;
    'place'?: any;
    'placeRoles'?: Array<string>;
    'company'?: any;
    'companyRoles'?: Array<string>;
    'schedule'?: any;
    'catalog'?: any;
    'reviews'?: any;
    'createdAt'?: string;
    'updatedAt'?: string;
    'deletedAt'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string",
            "format": ""
        },
        {
            "name": "projectUuid",
            "baseName": "project_uuid",
            "type": "string",
            "format": ""
        },
        {
            "name": "entity",
            "baseName": "entity",
            "type": "any",
            "format": ""
        },
        {
            "name": "place",
            "baseName": "place",
            "type": "any",
            "format": ""
        },
        {
            "name": "placeRoles",
            "baseName": "place_roles",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "company",
            "baseName": "company",
            "type": "any",
            "format": ""
        },
        {
            "name": "companyRoles",
            "baseName": "company_roles",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "schedule",
            "baseName": "schedule",
            "type": "any",
            "format": ""
        },
        {
            "name": "catalog",
            "baseName": "catalog",
            "type": "any",
            "format": ""
        },
        {
            "name": "reviews",
            "baseName": "reviews",
            "type": "any",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "deletedAt",
            "baseName": "deleted_at",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StaffResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

