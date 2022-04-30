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

import { ProjectsUsageTypeUnitPrice } from './ProjectsUsageTypeUnitPrice';
import { HttpFile } from '../http/http';

/**
* Used for get endpoint
*/
export class ProjectsUsageTypeGet {
    'key': string;
    'name': string;
    'summary': string;
    'category': string;
    'service': string;
    'unitPrices': Array<ProjectsUsageTypeUnitPrice>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "key",
            "baseName": "key",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "summary",
            "baseName": "summary",
            "type": "string",
            "format": ""
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "string",
            "format": ""
        },
        {
            "name": "service",
            "baseName": "service",
            "type": "string",
            "format": ""
        },
        {
            "name": "unitPrices",
            "baseName": "unit_prices",
            "type": "Array<ProjectsUsageTypeUnitPrice>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProjectsUsageTypeGet.attributeTypeMap;
    }

    public constructor() {
    }
}

