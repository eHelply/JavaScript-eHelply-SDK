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
* **:param** address_type                        **type:** string or None  **:param** address_line_1                      **type:** string or None  **:param** address_line_2                      **type:** string or None  **:param** postal_zip_code                     **type:** string or None  **:param** city                                **type:** string or None  **:param** province_state                      **type:** string or None  **:param** country                             **type:** string or None  **:param** lat                                 **type:** string or None  **:param** lng                                 **type:** string or None
*/
export class AddressBase {
    'addressType'?: string;
    'addressLine1'?: string;
    'addressLine2'?: string;
    'postalZipCode'?: string;
    'city'?: string;
    'provinceState'?: string;
    'country'?: string;
    'lat'?: string;
    'lng'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "addressType",
            "baseName": "address_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "addressLine1",
            "baseName": "address_line_1",
            "type": "string",
            "format": ""
        },
        {
            "name": "addressLine2",
            "baseName": "address_line_2",
            "type": "string",
            "format": ""
        },
        {
            "name": "postalZipCode",
            "baseName": "postal_zip_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string",
            "format": ""
        },
        {
            "name": "provinceState",
            "baseName": "province_state",
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
            "name": "lat",
            "baseName": "lat",
            "type": "string",
            "format": ""
        },
        {
            "name": "lng",
            "baseName": "lng",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AddressBase.attributeTypeMap;
    }

    public constructor() {
    }
}

