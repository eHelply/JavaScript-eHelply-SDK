/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.104
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.104
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
 * @interface AlarmTicket
 */
export interface AlarmTicket {
    /**
     * 
     * @type {string}
     * @memberof AlarmTicket
     */
    ticketUuid: string;
}

export function AlarmTicketFromJSON(json: any): AlarmTicket {
    return AlarmTicketFromJSONTyped(json, false);
}

export function AlarmTicketFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlarmTicket {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ticketUuid': json['ticket_uuid'],
    };
}

export function AlarmTicketToJSON(value?: AlarmTicket | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ticket_uuid': value.ticketUuid,
    };
}

