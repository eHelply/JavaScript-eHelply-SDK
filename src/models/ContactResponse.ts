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
 * @interface ContactResponse
 */
export interface ContactResponse {
    /**
     * 
     * @type {string}
     * @memberof ContactResponse
     */
    contactId: string;
    /**
     * 
     * @type {string}
     * @memberof ContactResponse
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof ContactResponse
     */
    lastName: string;
    /**
     * 
     * @type {string}
     * @memberof ContactResponse
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof ContactResponse
     */
    phone: string;
}

/**
 * Check if a given object implements the ContactResponse interface.
 */
export function instanceOfContactResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "contactId" in value;
    isInstance = isInstance && "firstName" in value;
    isInstance = isInstance && "lastName" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "phone" in value;

    return isInstance;
}

export function ContactResponseFromJSON(json: any): ContactResponse {
    return ContactResponseFromJSONTyped(json, false);
}

export function ContactResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContactResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contactId': json['contact_id'],
        'firstName': json['first_name'],
        'lastName': json['last_name'],
        'email': json['email'],
        'phone': json['phone'],
    };
}

export function ContactResponseToJSON(value?: ContactResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contact_id': value.contactId,
        'first_name': value.firstName,
        'last_name': value.lastName,
        'email': value.email,
        'phone': value.phone,
    };
}

