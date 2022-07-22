/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.97
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.97
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { Pagination } from './Pagination';
import {
    PaginationFromJSON,
    PaginationFromJSONTyped,
    PaginationToJSON,
} from './Pagination';

/**
 * Page state
 * @export
 * @interface Page
 */
export interface Page {
    /**
     * 
     * @type {Array<any>}
     * @memberof Page
     */
    items: Array<any>;
    /**
     * 
     * @type {Pagination}
     * @memberof Page
     */
    pagination: Pagination;
}

/**
 * Check if a given object implements the Page interface.
 */
export function instanceOfPage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "items" in value;
    isInstance = isInstance && "pagination" in value;

    return isInstance;
}

export function PageFromJSON(json: any): Page {
    return PageFromJSONTyped(json, false);
}

export function PageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Page {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': json['items'],
        'pagination': PaginationFromJSON(json['pagination']),
    };
}

export function PageToJSON(value?: Page | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': value.items,
        'pagination': PaginationToJSON(value.pagination),
    };
}

