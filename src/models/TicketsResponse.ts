/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.106
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.106
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
 * @interface TicketsResponse
 */
export interface TicketsResponse {
    /**
     * 
     * @type {string}
     * @memberof TicketsResponse
     */
    subject: string;
    /**
     * 
     * @type {string}
     * @memberof TicketsResponse
     */
    priority: string;
    /**
     * 
     * @type {string}
     * @memberof TicketsResponse
     */
    ticketId: string;
}

/**
 * Check if a given object implements the TicketsResponse interface.
 */
export function instanceOfTicketsResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "subject" in value;
    isInstance = isInstance && "priority" in value;
    isInstance = isInstance && "ticketId" in value;

    return isInstance;
}

export function TicketsResponseFromJSON(json: any): TicketsResponse {
    return TicketsResponseFromJSONTyped(json, false);
}

export function TicketsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TicketsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'subject': json['subject'],
        'priority': json['priority'],
        'ticketId': json['ticket_id'],
    };
}

export function TicketsResponseToJSON(value?: TicketsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'subject': value.subject,
        'priority': value.priority,
        'ticket_id': value.ticketId,
    };
}

