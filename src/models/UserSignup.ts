/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.83
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.83
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * User information used for user signup
 * @export
 * @interface UserSignup
 */
export interface UserSignup {
    /**
     * 
     * @type {string}
     * @memberof UserSignup
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof UserSignup
     */
    password: string;
    /**
     * 
     * @type {string}
     * @memberof UserSignup
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof UserSignup
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof UserSignup
     */
    lastName: string;
    /**
     * 
     * @type {string}
     * @memberof UserSignup
     */
    phoneNumber: string;
    /**
     * 
     * @type {string}
     * @memberof UserSignup
     */
    country: string;
    /**
     * 
     * @type {string}
     * @memberof UserSignup
     */
    lat?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSignup
     */
    lng?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserSignup
     */
    verifiedLegalTerms?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserSignup
     */
    picture?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UserSignup
     */
    newsletters?: boolean;
}

export function UserSignupFromJSON(json: any): UserSignup {
    return UserSignupFromJSONTyped(json, false);
}

export function UserSignupFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSignup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'username': json['username'],
        'password': json['password'],
        'email': json['email'],
        'firstName': json['first_name'],
        'lastName': json['last_name'],
        'phoneNumber': json['phone_number'],
        'country': json['country'],
        'lat': !exists(json, 'lat') ? undefined : json['lat'],
        'lng': !exists(json, 'lng') ? undefined : json['lng'],
        'verifiedLegalTerms': !exists(json, 'verified_legal_terms') ? undefined : json['verified_legal_terms'],
        'picture': !exists(json, 'picture') ? undefined : json['picture'],
        'newsletters': !exists(json, 'newsletters') ? undefined : json['newsletters'],
    };
}

export function UserSignupToJSON(value?: UserSignup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'password': value.password,
        'email': value.email,
        'first_name': value.firstName,
        'last_name': value.lastName,
        'phone_number': value.phoneNumber,
        'country': value.country,
        'lat': value.lat,
        'lng': value.lng,
        'verified_legal_terms': value.verifiedLegalTerms,
        'picture': value.picture,
        'newsletters': value.newsletters,
    };
}

