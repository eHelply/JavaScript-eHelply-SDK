/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.92
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.92
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
 * @interface TicketResponse
 */
export interface TicketResponse {
    /**
     * 
     * @type {string}
     * @memberof TicketResponse
     */
    ticketId: string;
    /**
     * 
     * @type {string}
     * @memberof TicketResponse
     */
    contactId: string;
    /**
     * 
     * @type {string}
     * @memberof TicketResponse
     */
    subject: string;
    /**
     * 
     * @type {string}
     * @memberof TicketResponse
     */
    priority: string;
}

/**
 * Check if a given object implements the TicketResponse interface.
 */
export function instanceOfTicketResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "ticketId" in value;
    isInstance = isInstance && "contactId" in value;
    isInstance = isInstance && "subject" in value;
    isInstance = isInstance && "priority" in value;

    return isInstance;
}

export function TicketResponseFromJSON(json: any): TicketResponse {
    return TicketResponseFromJSONTyped(json, false);
}

export function TicketResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TicketResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ticketId': json['ticket_id'],
        'contactId': json['contact_id'],
        'subject': json['subject'],
        'priority': json['priority'],
    };
}

export function TicketResponseToJSON(value?: TicketResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ticket_id': value.ticketId,
        'contact_id': value.contactId,
        'subject': value.subject,
        'priority': value.priority,
    };
}

