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
/**
 * 
 * @export
 * @interface PaymentMethodResponse
 */
export interface PaymentMethodResponse {
    /**
     * 
     * @type {string}
     * @memberof PaymentMethodResponse
     */
    paymentId: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentMethodResponse
     */
    last4Digits: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentMethodResponse
     */
    cardBrand: string;
    /**
     * 
     * @type {string}
     * @memberof PaymentMethodResponse
     */
    projectUuid: string;
}

export function PaymentMethodResponseFromJSON(json: any): PaymentMethodResponse {
    return PaymentMethodResponseFromJSONTyped(json, false);
}

export function PaymentMethodResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentMethodResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'paymentId': json['payment_id'],
        'last4Digits': json['last_4_digits'],
        'cardBrand': json['card_brand'],
        'projectUuid': json['project_uuid'],
    };
}

export function PaymentMethodResponseToJSON(value?: PaymentMethodResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'payment_id': value.paymentId,
        'last_4_digits': value.last4Digits,
        'card_brand': value.cardBrand,
        'project_uuid': value.projectUuid,
    };
}

