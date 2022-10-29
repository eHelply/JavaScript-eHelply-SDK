/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.119
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.119
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    History,
    HistoryFromJSON,
    HistoryFromJSONTyped,
    HistoryToJSON,
} from './History';

/**
 * 
 * @export
 * @interface GetProjectInvoiceHistory
 */
export interface GetProjectInvoiceHistory {
    /**
     * 
     * @type {string}
     * @memberof GetProjectInvoiceHistory
     */
    projectUuid: string;
    /**
     * 
     * @type {Array<History>}
     * @memberof GetProjectInvoiceHistory
     */
    invoiceHistory?: Array<History>;
}

export function GetProjectInvoiceHistoryFromJSON(json: any): GetProjectInvoiceHistory {
    return GetProjectInvoiceHistoryFromJSONTyped(json, false);
}

export function GetProjectInvoiceHistoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetProjectInvoiceHistory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'projectUuid': json['project_uuid'],
        'invoiceHistory': !exists(json, 'invoice_history') ? undefined : ((json['invoice_history'] as Array<any>).map(HistoryFromJSON)),
    };
}

export function GetProjectInvoiceHistoryToJSON(value?: GetProjectInvoiceHistory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'project_uuid': value.projectUuid,
        'invoice_history': value.invoiceHistory === undefined ? undefined : ((value.invoiceHistory as Array<any>).map(HistoryToJSON)),
    };
}

