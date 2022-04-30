/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.72
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.72
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { UserEmail } from './user-email';

/**
 * Contains all fields required when doing a Participant GET but also has user fields (name, location, ect). This is what is returned from all participant endpoints.
 * @export
 * @interface ParticipantUserReturn
 */
export interface ParticipantUserReturn {
    /**
     * 
     * @type {string}
     * @memberof ParticipantUserReturn
     */
    'uuid'?: string;
    /**
     * 
     * @type {string}
     * @memberof ParticipantUserReturn
     */
    'user_uuid'?: string;
    /**
     * 
     * @type {object}
     * @memberof ParticipantUserReturn
     */
    'participant_meta'?: object;
    /**
     * 
     * @type {string}
     * @memberof ParticipantUserReturn
     */
    'first_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof ParticipantUserReturn
     */
    'last_name'?: string;
    /**
     * 
     * @type {UserEmail}
     * @memberof ParticipantUserReturn
     */
    'email'?: UserEmail;
    /**
     * 
     * @type {string}
     * @memberof ParticipantUserReturn
     */
    'phone_number'?: string;
    /**
     * 
     * @type {string}
     * @memberof ParticipantUserReturn
     */
    'country'?: string;
    /**
     * 
     * @type {object}
     * @memberof ParticipantUserReturn
     */
    'gps_location'?: object;
    /**
     * 
     * @type {string}
     * @memberof ParticipantUserReturn
     */
    'picture'?: string;
    /**
     * 
     * @type {string}
     * @memberof ParticipantUserReturn
     */
    'last_login'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ParticipantUserReturn
     */
    'verified_legal_terms'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ParticipantUserReturn
     */
    'date_created'?: string;
    /**
     * 
     * @type {string}
     * @memberof ParticipantUserReturn
     */
    'date_updated'?: string;
}

