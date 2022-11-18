/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.122
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.122
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    GetInvoiceResponse,
    GetInvoiceResponseFromJSON,
    GetInvoiceResponseFromJSONTyped,
    GetInvoiceResponseToJSON,
} from './GetInvoiceResponse';

/**
 * 
 * @export
 * @interface GetProjectInvoiceResponse
 */
export interface GetProjectInvoiceResponse {
    /**
     * 
     * @type {string}
     * @memberof GetProjectInvoiceResponse
     */
    projectUuid: string;
    /**
     * 
     * @type {string}
     * @memberof GetProjectInvoiceResponse
     */
    invoiceUuid: string;
    /**
     * 
     * @type {number}
     * @memberof GetProjectInvoiceResponse
     */
    year: number;
    /**
     * 
     * @type {number}
     * @memberof GetProjectInvoiceResponse
     */
    month: number;
    /**
     * 
     * @type {string}
     * @memberof GetProjectInvoiceResponse
     */
    createdBy: string;
    /**
     * 
     * @type {GetInvoiceResponse}
     * @memberof GetProjectInvoiceResponse
     */
    invoice?: GetInvoiceResponse;
}

export function GetProjectInvoiceResponseFromJSON(json: any): GetProjectInvoiceResponse {
    return GetProjectInvoiceResponseFromJSONTyped(json, false);
}

export function GetProjectInvoiceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetProjectInvoiceResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'projectUuid': json['project_uuid'],
        'invoiceUuid': json['invoice_uuid'],
        'year': json['year'],
        'month': json['month'],
        'createdBy': json['created_by'],
        'invoice': !exists(json, 'invoice') ? undefined : GetInvoiceResponseFromJSON(json['invoice']),
    };
}

export function GetProjectInvoiceResponseToJSON(value?: GetProjectInvoiceResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'project_uuid': value.projectUuid,
        'invoice_uuid': value.invoiceUuid,
        'year': value.year,
        'month': value.month,
        'created_by': value.createdBy,
        'invoice': GetInvoiceResponseToJSON(value.invoice),
    };
}

