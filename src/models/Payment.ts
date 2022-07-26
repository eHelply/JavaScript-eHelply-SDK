/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.97
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.97
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
 * @interface Payment
 */
export interface Payment {
    /**
     * 
     * @type {number}
     * @memberof Payment
     */
    amount: number;
}

/**
 * Check if a given object implements the Payment interface.
 */
export function instanceOfPayment(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "amount" in value;

    return isInstance;
}

export function PaymentFromJSON(json: any): Payment {
    return PaymentFromJSONTyped(json, false);
}

export function PaymentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Payment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': json['amount'],
    };
}

export function PaymentToJSON(value?: Payment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
    };
}

