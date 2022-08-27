/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.104
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.104
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
 * @interface LineItem
 */
export interface LineItem {
    /**
     * 
     * @type {string}
     * @memberof LineItem
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof LineItem
     */
    quantity: number;
    /**
     * 
     * @type {number}
     * @memberof LineItem
     */
    unitPrice: number;
    /**
     * 
     * @type {number}
     * @memberof LineItem
     */
    total: number;
}

export function LineItemFromJSON(json: any): LineItem {
    return LineItemFromJSONTyped(json, false);
}

export function LineItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): LineItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'quantity': json['quantity'],
        'unitPrice': json['unit_price'],
        'total': json['total'],
    };
}

export function LineItemToJSON(value?: LineItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'quantity': value.quantity,
        'unit_price': value.unitPrice,
        'total': value.total,
    };
}

