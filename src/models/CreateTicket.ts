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
 * @interface CreateTicket
 */
export interface CreateTicket {
    /**
     * 
     * @type {string}
     * @memberof CreateTicket
     */
    priority: string;
    /**
     * 
     * @type {string}
     * @memberof CreateTicket
     */
    subject: string;
}

/**
 * Check if a given object implements the CreateTicket interface.
 */
export function instanceOfCreateTicket(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "priority" in value;
    isInstance = isInstance && "subject" in value;

    return isInstance;
}

export function CreateTicketFromJSON(json: any): CreateTicket {
    return CreateTicketFromJSONTyped(json, false);
}

export function CreateTicketFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTicket {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'priority': json['priority'],
        'subject': json['subject'],
    };
}

export function CreateTicketToJSON(value?: CreateTicket | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'priority': value.priority,
        'subject': value.subject,
    };
}

