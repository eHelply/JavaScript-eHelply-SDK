/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.73
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.73
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { UserEmail } from './user-email';
import { UserFlags } from './user-flags';

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
    'first_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    'last_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    'phone_number'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    'country'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    'picture'?: string;
    /**
     * 
     * @type {object}
     * @memberof UserResponse
     */
    'gps_location'?: object;
    /**
     * 
     * @type {boolean}
     * @memberof UserResponse
     */
    'verified_legal_terms'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    'date_created'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    'date_updated'?: string;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    'date_deleted'?: string;
    /**
     * 
     * @type {UserEmail}
     * @memberof UserResponse
     */
    'email'?: UserEmail;
    /**
     * 
     * @type {Array<string>}
     * @memberof UserResponse
     */
    'missing'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    'uuid'?: string;
    /**
     * 
     * @type {Array<object>}
     * @memberof UserResponse
     */
    'participants'?: Array<object>;
    /**
     * 
     * @type {UserFlags}
     * @memberof UserResponse
     */
    'flags'?: UserFlags;
    /**
     * 
     * @type {string}
     * @memberof UserResponse
     */
    'last_login'?: string;
}

