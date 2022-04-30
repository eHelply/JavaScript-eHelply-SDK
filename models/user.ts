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
    'cognito_id'?: string;
    /**
     * 
     * @type {object}
     * @memberof User
     */
    'cognito_data'?: object;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'first_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'last_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'phone_number'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'country'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'picture'?: string;
    /**
     * 
     * @type {object}
     * @memberof User
     */
    'gps_location'?: object;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    'verified_legal_terms'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'date_created'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'date_updated'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'date_deleted'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'uuid': string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'last_login'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    'first_login'?: boolean;
}

