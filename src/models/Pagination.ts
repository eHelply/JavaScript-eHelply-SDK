/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.93
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.93
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Pagination state
 * @export
 * @interface Pagination
 */
export interface Pagination {
    /**
     * 
     * @type {number}
     * @memberof Pagination
     */
    currentPage: number;
    /**
     * 
     * @type {number}
     * @memberof Pagination
     */
    pageSize: number;
    /**
     * 
     * @type {number}
     * @memberof Pagination
     */
    totalItems: number;
    /**
     * 
     * @type {number}
     * @memberof Pagination
     */
    totalPages: number;
    /**
     * 
     * @type {boolean}
     * @memberof Pagination
     */
    hasPreviousPage: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Pagination
     */
    hasNextPage: boolean;
    /**
     * 
     * @type {number}
     * @memberof Pagination
     */
    previousPage?: number;
    /**
     * 
     * @type {number}
     * @memberof Pagination
     */
    nextPage?: number;
}

/**
 * Check if a given object implements the Pagination interface.
 */
export function instanceOfPagination(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "currentPage" in value;
    isInstance = isInstance && "pageSize" in value;
    isInstance = isInstance && "totalItems" in value;
    isInstance = isInstance && "totalPages" in value;
    isInstance = isInstance && "hasPreviousPage" in value;
    isInstance = isInstance && "hasNextPage" in value;

    return isInstance;
}

export function PaginationFromJSON(json: any): Pagination {
    return PaginationFromJSONTyped(json, false);
}

export function PaginationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Pagination {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currentPage': json['current_page'],
        'pageSize': json['page_size'],
        'totalItems': json['total_items'],
        'totalPages': json['total_pages'],
        'hasPreviousPage': json['has_previous_page'],
        'hasNextPage': json['has_next_page'],
        'previousPage': !exists(json, 'previous_page') ? undefined : json['previous_page'],
        'nextPage': !exists(json, 'next_page') ? undefined : json['next_page'],
    };
}

export function PaginationToJSON(value?: Pagination | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'current_page': value.currentPage,
        'page_size': value.pageSize,
        'total_items': value.totalItems,
        'total_pages': value.totalPages,
        'has_previous_page': value.hasPreviousPage,
        'has_next_page': value.hasNextPage,
        'previous_page': value.previousPage,
        'next_page': value.nextPage,
    };
}

