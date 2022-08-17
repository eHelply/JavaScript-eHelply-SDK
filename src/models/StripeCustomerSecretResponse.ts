/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.108
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.108
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
 * @interface StripeCustomerSecretResponse
 */
export interface StripeCustomerSecretResponse {
    /**
     * 
     * @type {string}
     * @memberof StripeCustomerSecretResponse
     */
    secret: string;
}

/**
 * Check if a given object implements the StripeCustomerSecretResponse interface.
 */
export function instanceOfStripeCustomerSecretResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "secret" in value;

    return isInstance;
}

export function StripeCustomerSecretResponseFromJSON(json: any): StripeCustomerSecretResponse {
    return StripeCustomerSecretResponseFromJSONTyped(json, false);
}

export function StripeCustomerSecretResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StripeCustomerSecretResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'secret': json['secret'],
    };
}

export function StripeCustomerSecretResponseToJSON(value?: StripeCustomerSecretResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'secret': value.secret,
    };
}

