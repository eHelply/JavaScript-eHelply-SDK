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
import type { UserEmail } from './UserEmail';
import {
    UserEmailFromJSON,
    UserEmailFromJSONTyped,
    UserEmailToJSON,
} from './UserEmail';
import type { UserFlags } from './UserFlags';
import {
    UserFlagsFromJSON,
    UserFlagsFromJSONTyped,
    UserFlagsToJSON,
} from './UserFlags';

/**
 * When retrieving a user
 * @export
 * @interface UserResponse
 */
export interface UserResponse {
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    phoneNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    picture?: string;
    /**
     * 
     * @type {object}
     * @memberof UserResponse
     */
    gpsLocation?: object;
    /**
     * 
     * @type {boolean}
     * @memberof UserResponse
     */
    verifiedLegalTerms?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof UserResponse
     */
    dateCreated?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UserResponse
     */
    dateUpdated?: Date;
    /**
     * 
     * @type {Date}
     * @memberof UserResponse
     */
    dateDeleted?: Date;
    /**
     * 
     * @type {UserEmail}
     * @memberof UserResponse
     */
    email?: UserEmail;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserResponse
     */
    missing?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    uuid?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof UserResponse
     */
    participants?: Array<object>;
    /**
     * 
     * @type {UserFlags}
     * @memberof UserResponse
     */
    flags?: UserFlags;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    lastLogin?: string;
}

/**
 * Check if a given object implements the UserResponse interface.
 */
export function instanceOfUserResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserResponseFromJSON(json: any): UserResponse {
    return UserResponseFromJSONTyped(json, false);
}

export function UserResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': !exists(json, 'first_name') ? undefined : json['first_name'],
        'lastName': !exists(json, 'last_name') ? undefined : json['last_name'],
        'phoneNumber': !exists(json, 'phone_number') ? undefined : json['phone_number'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'picture': !exists(json, 'picture') ? undefined : json['picture'],
        'gpsLocation': !exists(json, 'gps_location') ? undefined : json['gps_location'],
        'verifiedLegalTerms': !exists(json, 'verified_legal_terms') ? undefined : json['verified_legal_terms'],
        'dateCreated': !exists(json, 'date_created') ? undefined : (new Date(json['date_created'])),
        'dateUpdated': !exists(json, 'date_updated') ? undefined : (new Date(json['date_updated'])),
        'dateDeleted': !exists(json, 'date_deleted') ? undefined : (new Date(json['date_deleted'])),
        'email': !exists(json, 'email') ? undefined : UserEmailFromJSON(json['email']),
        'missing': !exists(json, 'missing') ? undefined : json['missing'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'participants': !exists(json, 'participants') ? undefined : json['participants'],
        'flags': !exists(json, 'flags') ? undefined : UserFlagsFromJSON(json['flags']),
        'lastLogin': !exists(json, 'last_login') ? undefined : json['last_login'],
    };
}

export function UserResponseToJSON(value?: UserResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'first_name': value.firstName,
        'last_name': value.lastName,
        'phone_number': value.phoneNumber,
        'country': value.country,
        'picture': value.picture,
        'gps_location': value.gpsLocation,
        'verified_legal_terms': value.verifiedLegalTerms,
        'date_created': value.dateCreated === undefined ? undefined : (value.dateCreated.toISOString()),
        'date_updated': value.dateUpdated === undefined ? undefined : (value.dateUpdated.toISOString()),
        'date_deleted': value.dateDeleted === undefined ? undefined : (value.dateDeleted.toISOString()),
        'email': UserEmailToJSON(value.email),
        'missing': value.missing,
        'uuid': value.uuid,
        'participants': value.participants,
        'flags': UserFlagsToJSON(value.flags),
        'last_login': value.lastLogin,
    };
}

