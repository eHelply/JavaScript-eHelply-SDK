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

export class CatalogReturn {
    'metaData'?: any;
    'name'?: string;
    'featured'?: any;
    'subCatalogs'?: any;
    'uuid': string;
    'metaUuid'?: string;
    'projectUuid': string;
    'productUuids'?: Array<string>;
    'createdAt'?: string;
    'updatedAt'?: string;
    'deletedAt'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "metaData",
            "baseName": "meta_data",
            "type": "any",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "featured",
            "baseName": "featured",
            "type": "any",
            "format": ""
        },
        {
            "name": "subCatalogs",
            "baseName": "sub_catalogs",
            "type": "any",
            "format": ""
        },
        {
            "name": "uuid",
            "baseName": "uuid",
            "type": "string",
            "format": ""
        },
        {
            "name": "metaUuid",
            "baseName": "meta_uuid",
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
            "name": "productUuids",
            "baseName": "product_uuids",
            "type": "Array<string>",
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
        return CatalogReturn.attributeTypeMap;
    }

    public constructor() {
    }
}

