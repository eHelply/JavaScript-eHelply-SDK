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
 * @interface Contact
 */
export interface Contact {
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    lastName: string;
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof Contact
     */
    phone: string;
}

/**
 * Check if a given object implements the Contact interface.
 */
export function instanceOfContact(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "firstName" in value;
    isInstance = isInstance && "lastName" in value;
    isInstance = isInstance && "email" in value;
    isInstance = isInstance && "phone" in value;

    return isInstance;
}

export function ContactFromJSON(json: any): Contact {
    return ContactFromJSONTyped(json, false);
}

export function ContactFromJSONTyped(json: any, ignoreDiscriminator: boolean): Contact {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': json['first_name'],
        'lastName': json['last_name'],
        'email': json['email'],
        'phone': json['phone'],
    };
}

export function ContactToJSON(value?: Contact | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'first_name': value.firstName,
        'last_name': value.lastName,
        'email': value.email,
        'phone': value.phone,
    };
}

