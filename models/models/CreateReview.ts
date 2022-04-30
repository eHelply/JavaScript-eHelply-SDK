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

export class CreateReview {
    'rating': number;
    'maxRating': number;
    'reviewText': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "rating",
            "baseName": "rating",
            "type": "number",
            "format": ""
        },
        {
            "name": "maxRating",
            "baseName": "max_rating",
            "type": "number",
            "format": ""
        },
        {
            "name": "reviewText",
            "baseName": "review_text",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CreateReview.attributeTypeMap;
    }

    public constructor() {
    }
}

