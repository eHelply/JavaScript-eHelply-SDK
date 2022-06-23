/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.81
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.81
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
 * @interface StripeAccountResponse
 */
export interface StripeAccountResponse {
    /**
     * 
     * @type {string}
     * @memberof StripeAccountResponse
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof StripeAccountResponse
     */
    lastName: string;
    /**
     * 
     * @type {string}
     * @memberof StripeAccountResponse
     */
    projectUuid: string;
    /**
     * 
     * @type {string}
     * @memberof StripeAccountResponse
     */
    stripeCustomerId: string;
}

export function StripeAccountResponseFromJSON(json: any): StripeAccountResponse {
    return StripeAccountResponseFromJSONTyped(json, false);
}

export function StripeAccountResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StripeAccountResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': json['first_name'],
        'lastName': json['last_name'],
        'projectUuid': json['project_uuid'],
        'stripeCustomerId': json['stripe_customer_id'],
    };
}

export function StripeAccountResponseToJSON(value?: StripeAccountResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'first_name': value.firstName,
        'last_name': value.lastName,
        'project_uuid': value.projectUuid,
        'stripe_customer_id': value.stripeCustomerId,
    };
}

