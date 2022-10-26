/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.113
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.113
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Discount
 */
export interface Discount {
    /**
     * 
     * @type {string}
     * @memberof Discount
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof Discount
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof Discount
     */
    rate: number;
    /**
     * 
     * @type {number}
     * @memberof Discount
     */
    flat: number;
}

export function DiscountFromJSON(json: any): Discount {
    return DiscountFromJSONTyped(json, false);
}

export function DiscountFromJSONTyped(json: any, ignoreDiscriminator: boolean): Discount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'description': json['description'],
        'rate': json['rate'],
        'flat': json['flat'],
    };
}

export function DiscountToJSON(value?: Discount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'rate': value.rate,
        'flat': value.flat,
    };
}

