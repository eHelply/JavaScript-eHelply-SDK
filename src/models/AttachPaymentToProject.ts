/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.95
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.95
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
 * @interface AttachPaymentToProject
 */
export interface AttachPaymentToProject {
    /**
     * 
     * @type {string}
     * @memberof AttachPaymentToProject
     */
    paymentType: string;
    /**
     * 
     * @type {string}
     * @memberof AttachPaymentToProject
     */
    number: string;
    /**
     * 
     * @type {number}
     * @memberof AttachPaymentToProject
     */
    expMonth: number;
    /**
     * 
     * @type {number}
     * @memberof AttachPaymentToProject
     */
    expYear: number;
    /**
     * 
     * @type {string}
     * @memberof AttachPaymentToProject
     */
    cvc: string;
}

export function AttachPaymentToProjectFromJSON(json: any): AttachPaymentToProject {
    return AttachPaymentToProjectFromJSONTyped(json, false);
}

export function AttachPaymentToProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): AttachPaymentToProject {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'paymentType': json['payment_type'],
        'number': json['number'],
        'expMonth': json['exp_month'],
        'expYear': json['exp_year'],
        'cvc': json['cvc'],
    };
}

export function AttachPaymentToProjectToJSON(value?: AttachPaymentToProject | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'payment_type': value.paymentType,
        'number': value.number,
        'exp_month': value.expMonth,
        'exp_year': value.expYear,
        'cvc': value.cvc,
    };
}

