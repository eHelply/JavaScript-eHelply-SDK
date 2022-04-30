/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.74
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.74
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Payment,
    PaymentFromJSON,
    PaymentFromJSONTyped,
    PaymentToJSON,
} from './Payment';

/**
 * 
 * @export
 * @interface BodyProcessPaymentBillingProcessPaymentPost
 */
export interface BodyProcessPaymentBillingProcessPaymentPost {
    /**
     * 
     * @type {Payment}
     * @memberof BodyProcessPaymentBillingProcessPaymentPost
     */
    paymentSchema: Payment;
}

export function BodyProcessPaymentBillingProcessPaymentPostFromJSON(json: any): BodyProcessPaymentBillingProcessPaymentPost {
    return BodyProcessPaymentBillingProcessPaymentPostFromJSONTyped(json, false);
}

export function BodyProcessPaymentBillingProcessPaymentPostFromJSONTyped(json: any, ignoreDiscriminator: boolean): BodyProcessPaymentBillingProcessPaymentPost {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'paymentSchema': PaymentFromJSON(json['payment_schema']),
    };
}

export function BodyProcessPaymentBillingProcessPaymentPostToJSON(value?: BodyProcessPaymentBillingProcessPaymentPost | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'payment_schema': PaymentToJSON(value.paymentSchema),
    };
}

