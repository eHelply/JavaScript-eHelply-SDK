/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.120
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.120
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Discount,
    DiscountFromJSON,
    DiscountFromJSONTyped,
    DiscountToJSON,
} from './Discount';
import {
    LineItem,
    LineItemFromJSON,
    LineItemFromJSONTyped,
    LineItemToJSON,
} from './LineItem';
import {
    Note,
    NoteFromJSON,
    NoteFromJSONTyped,
    NoteToJSON,
} from './Note';
import {
    Tax,
    TaxFromJSON,
    TaxFromJSONTyped,
    TaxToJSON,
} from './Tax';

/**
 * 
 * @export
 * @interface GetInvoiceResponse
 */
export interface GetInvoiceResponse {
    /**
     * 
     * @type {string}
     * @memberof GetInvoiceResponse
     */
    invoiceUuid: string;
    /**
     * 
     * @type {Array<LineItem>}
     * @memberof GetInvoiceResponse
     */
    lineItems: Array<LineItem>;
    /**
     * 
     * @type {number}
     * @memberof GetInvoiceResponse
     */
    subtotal: number;
    /**
     * 
     * @type {Array<Discount>}
     * @memberof GetInvoiceResponse
     */
    discounts: Array<Discount>;
    /**
     * 
     * @type {Array<Tax>}
     * @memberof GetInvoiceResponse
     */
    taxes: Array<Tax>;
    /**
     * 
     * @type {number}
     * @memberof GetInvoiceResponse
     */
    total: number;
    /**
     * 
     * @type {Array<Note>}
     * @memberof GetInvoiceResponse
     */
    notes: Array<Note>;
    /**
     * 
     * @type {boolean}
     * @memberof GetInvoiceResponse
     */
    paid?: boolean;
    /**
     * 
     * @type {string}
     * @memberof GetInvoiceResponse
     */
    createdAt: string;
    /**
     * 
     * @type {string}
     * @memberof GetInvoiceResponse
     */
    updateAt: string;
    /**
     * 
     * @type {string}
     * @memberof GetInvoiceResponse
     */
    deletedAt?: string;
}

export function GetInvoiceResponseFromJSON(json: any): GetInvoiceResponse {
    return GetInvoiceResponseFromJSONTyped(json, false);
}

export function GetInvoiceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetInvoiceResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'invoiceUuid': json['invoice_uuid'],
        'lineItems': ((json['line_items'] as Array<any>).map(LineItemFromJSON)),
        'subtotal': json['subtotal'],
        'discounts': ((json['discounts'] as Array<any>).map(DiscountFromJSON)),
        'taxes': ((json['taxes'] as Array<any>).map(TaxFromJSON)),
        'total': json['total'],
        'notes': ((json['notes'] as Array<any>).map(NoteFromJSON)),
        'paid': !exists(json, 'paid') ? undefined : json['paid'],
        'createdAt': json['created_at'],
        'updateAt': json['update_at'],
        'deletedAt': !exists(json, 'deleted_at') ? undefined : json['deleted_at'],
    };
}

export function GetInvoiceResponseToJSON(value?: GetInvoiceResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'invoice_uuid': value.invoiceUuid,
        'line_items': ((value.lineItems as Array<any>).map(LineItemToJSON)),
        'subtotal': value.subtotal,
        'discounts': ((value.discounts as Array<any>).map(DiscountToJSON)),
        'taxes': ((value.taxes as Array<any>).map(TaxToJSON)),
        'total': value.total,
        'notes': ((value.notes as Array<any>).map(NoteToJSON)),
        'paid': value.paid,
        'created_at': value.createdAt,
        'update_at': value.updateAt,
        'deleted_at': value.deletedAt,
    };
}

