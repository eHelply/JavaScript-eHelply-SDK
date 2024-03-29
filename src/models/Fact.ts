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
 * @interface Fact
 */
export interface Fact {
    /**
     * 
     * @type {string}
     * @memberof Fact
     */
    name: string;
    /**
     * 
     * @type {object}
     * @memberof Fact
     */
    data: object;
    /**
     * 
     * @type {boolean}
     * @memberof Fact
     */
    _public: boolean;
}

export function FactFromJSON(json: any): Fact {
    return FactFromJSONTyped(json, false);
}

export function FactFromJSONTyped(json: any, ignoreDiscriminator: boolean): Fact {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'data': json['data'],
        '_public': json['public'],
    };
}

export function FactToJSON(value?: Fact | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'data': value.data,
        'public': value._public,
    };
}

