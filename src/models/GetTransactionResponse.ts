/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.110
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.110
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { GetInvoiceResponse } from './GetInvoiceResponse';
import {
    GetInvoiceResponseFromJSON,
    GetInvoiceResponseFromJSONTyped,
    GetInvoiceResponseToJSON,
} from './GetInvoiceResponse';

/**
 * 
 * @export
 * @interface GetTransactionResponse
 */
export interface GetTransactionResponse {
    /**
     * 
     * @type {GetInvoiceResponse}
     * @memberof GetTransactionResponse
     */
    invoice?: GetInvoiceResponse;
    /**
     * 
     * @type {string}
     * @memberof GetTransactionResponse
     */
    transactionUuid: string;
    /**
     * 
     * @type {string}
     * @memberof GetTransactionResponse
     */
    stripeId: string;
    /**
     * 
     * @type {number}
     * @memberof GetTransactionResponse
     */
    credit: number;
    /**
     * 
     * @type {number}
     * @memberof GetTransactionResponse
     */
    debit: number;
    /**
     * 
     * @type {string}
     * @memberof GetTransactionResponse
     */
    createdAt: string;
}

/**
 * Check if a given object implements the GetTransactionResponse interface.
 */
export function instanceOfGetTransactionResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "transactionUuid" in value;
    isInstance = isInstance && "stripeId" in value;
    isInstance = isInstance && "credit" in value;
    isInstance = isInstance && "debit" in value;
    isInstance = isInstance && "createdAt" in value;

    return isInstance;
}

export function GetTransactionResponseFromJSON(json: any): GetTransactionResponse {
    return GetTransactionResponseFromJSONTyped(json, false);
}

export function GetTransactionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetTransactionResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'invoice': !exists(json, 'invoice') ? undefined : GetInvoiceResponseFromJSON(json['invoice']),
        'transactionUuid': json['transaction_uuid'],
        'stripeId': json['stripe_id'],
        'credit': json['credit'],
        'debit': json['debit'],
        'createdAt': json['created_at'],
    };
}

export function GetTransactionResponseToJSON(value?: GetTransactionResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'invoice': GetInvoiceResponseToJSON(value.invoice),
        'transaction_uuid': value.transactionUuid,
        'stripe_id': value.stripeId,
        'credit': value.credit,
        'debit': value.debit,
        'created_at': value.createdAt,
    };
}

