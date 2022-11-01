/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.121
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.121
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Email,
    EmailFromJSON,
    EmailFromJSONTyped,
    EmailToJSON,
} from './Email';

/**
 * Contains all fields required when doing a Participant GET but also has user fields (name, location, ect). This is
 * what is returned from all participant endpoints.
 * @export
 * @interface ParticipantUserReturn
 */
export interface ParticipantUserReturn {
    /**
     * 
     * @type {string}
     * @memberof ParticipantUserReturn
     */
    uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof ParticipantUserReturn
     */
    userUuid?: string;
    /**
     * 
     * @type {object}
     * @memberof ParticipantUserReturn
     */
    participantMeta?: object;
    /**
     * 
     * @type {string}
     * @memberof ParticipantUserReturn
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof ParticipantUserReturn
     */
    lastName?: string;
    /**
     * 
     * @type {Email}
     * @memberof ParticipantUserReturn
     */
    email?: Email;
    /**
     * 
     * @type {string}
     * @memberof ParticipantUserReturn
     */
    phoneNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof ParticipantUserReturn
     */
    country?: string;
    /**
     * 
     * @type {object}
     * @memberof ParticipantUserReturn
     */
    gpsLocation?: object;
    /**
     * 
     * @type {string}
     * @memberof ParticipantUserReturn
     */
    picture?: string;
    /**
     * 
     * @type {Date}
     * @memberof ParticipantUserReturn
     */
    lastLogin?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof ParticipantUserReturn
     */
    verifiedLegalTerms?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof ParticipantUserReturn
     */
    dateCreated?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ParticipantUserReturn
     */
    dateUpdated?: Date;
}

export function ParticipantUserReturnFromJSON(json: any): ParticipantUserReturn {
    return ParticipantUserReturnFromJSONTyped(json, false);
}

export function ParticipantUserReturnFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParticipantUserReturn {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'userUuid': !exists(json, 'user_uuid') ? undefined : json['user_uuid'],
        'participantMeta': !exists(json, 'participant_meta') ? undefined : json['participant_meta'],
        'firstName': !exists(json, 'first_name') ? undefined : json['first_name'],
        'lastName': !exists(json, 'last_name') ? undefined : json['last_name'],
        'email': !exists(json, 'email') ? undefined : EmailFromJSON(json['email']),
        'phoneNumber': !exists(json, 'phone_number') ? undefined : json['phone_number'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'gpsLocation': !exists(json, 'gps_location') ? undefined : json['gps_location'],
        'picture': !exists(json, 'picture') ? undefined : json['picture'],
        'lastLogin': !exists(json, 'last_login') ? undefined : (new Date(json['last_login'])),
        'verifiedLegalTerms': !exists(json, 'verified_legal_terms') ? undefined : json['verified_legal_terms'],
        'dateCreated': !exists(json, 'date_created') ? undefined : (new Date(json['date_created'])),
        'dateUpdated': !exists(json, 'date_updated') ? undefined : (new Date(json['date_updated'])),
    };
}

export function ParticipantUserReturnToJSON(value?: ParticipantUserReturn | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'user_uuid': value.userUuid,
        'participant_meta': value.participantMeta,
        'first_name': value.firstName,
        'last_name': value.lastName,
        'email': EmailToJSON(value.email),
        'phone_number': value.phoneNumber,
        'country': value.country,
        'gps_location': value.gpsLocation,
        'picture': value.picture,
        'last_login': value.lastLogin === undefined ? undefined : (value.lastLogin.toISOString()),
        'verified_legal_terms': value.verifiedLegalTerms,
        'date_created': value.dateCreated === undefined ? undefined : (value.dateCreated.toISOString()),
        'date_updated': value.dateUpdated === undefined ? undefined : (value.dateUpdated.toISOString()),
    };
}

