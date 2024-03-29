/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.118
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.118
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
 * @interface Tax
 */
export interface Tax {
    /**
     * 
     * @type {string}
     * @memberof Tax
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof Tax
     */
    rate: number;
}

export function TaxFromJSON(json: any): Tax {
    return TaxFromJSONTyped(json, false);
}

export function TaxFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tax {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'rate': json['rate'],
    };
}

export function TaxToJSON(value?: Tax | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'rate': value.rate,
    };
}

