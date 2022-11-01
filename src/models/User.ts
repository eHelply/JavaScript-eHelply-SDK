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
/**
 * User object, contains all required parameters
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {string}
     * @memberof User
     */
    cognitoId?: string;
    /**
     * 
     * @type {object}
     * @memberof User
     */
    cognitoData?: object;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    phoneNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    country?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    picture?: string;
    /**
     * 
     * @type {object}
     * @memberof User
     */
    gpsLocation?: object;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    verifiedLegalTerms?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof User
     */
    dateCreated?: Date;
    /**
     * 
     * @type {Date}
     * @memberof User
     */
    dateUpdated?: Date;
    /**
     * 
     * @type {Date}
     * @memberof User
     */
    dateDeleted?: Date;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    uuid: string;
    /**
     * 
     * @type {Date}
     * @memberof User
     */
    lastLogin?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    firstLogin?: boolean;
}

export function UserFromJSON(json: any): User {
    return UserFromJSONTyped(json, false);
}

export function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cognitoId': !exists(json, 'cognito_id') ? undefined : json['cognito_id'],
        'cognitoData': !exists(json, 'cognito_data') ? undefined : json['cognito_data'],
        'firstName': !exists(json, 'first_name') ? undefined : json['first_name'],
        'lastName': !exists(json, 'last_name') ? undefined : json['last_name'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'phoneNumber': !exists(json, 'phone_number') ? undefined : json['phone_number'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'picture': !exists(json, 'picture') ? undefined : json['picture'],
        'gpsLocation': !exists(json, 'gps_location') ? undefined : json['gps_location'],
        'verifiedLegalTerms': !exists(json, 'verified_legal_terms') ? undefined : json['verified_legal_terms'],
        'dateCreated': !exists(json, 'date_created') ? undefined : (new Date(json['date_created'])),
        'dateUpdated': !exists(json, 'date_updated') ? undefined : (new Date(json['date_updated'])),
        'dateDeleted': !exists(json, 'date_deleted') ? undefined : (new Date(json['date_deleted'])),
        'uuid': json['uuid'],
        'lastLogin': !exists(json, 'last_login') ? undefined : (new Date(json['last_login'])),
        'firstLogin': !exists(json, 'first_login') ? undefined : json['first_login'],
    };
}

export function UserToJSON(value?: User | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cognito_id': value.cognitoId,
        'cognito_data': value.cognitoData,
        'first_name': value.firstName,
        'last_name': value.lastName,
        'email': value.email,
        'phone_number': value.phoneNumber,
        'country': value.country,
        'picture': value.picture,
        'gps_location': value.gpsLocation,
        'verified_legal_terms': value.verifiedLegalTerms,
        'date_created': value.dateCreated === undefined ? undefined : (value.dateCreated.toISOString()),
        'date_updated': value.dateUpdated === undefined ? undefined : (value.dateUpdated.toISOString()),
        'date_deleted': value.dateDeleted === undefined ? undefined : (value.dateDeleted.toISOString()),
        'uuid': value.uuid,
        'last_login': value.lastLogin === undefined ? undefined : (value.lastLogin.toISOString()),
        'first_login': value.firstLogin,
    };
}

