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


import * as runtime from '../runtime';
import {
    HTTPValidationError,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    Payment,
    PaymentFromJSON,
    PaymentToJSON,
    PaymentMethodResponse,
    PaymentMethodResponseFromJSON,
    PaymentMethodResponseToJSON,
    StripeAccountResponse,
    StripeAccountResponseFromJSON,
    StripeAccountResponseToJSON,
    StripeCustomerSecretResponse,
    StripeCustomerSecretResponseFromJSON,
    StripeCustomerSecretResponseToJSON,
} from '../models';

export interface CreateBillingAccountRequest {
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface GetClientSecretRequest {
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface HasPaymentRequest {
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface ListPaymentMethodsRequest {
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface ProcessPaymentRequest {
    payment: Payment;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface ReconcilePaymentMethodRequest {
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface RemovePaymentMethodRequest {
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

/**
 * BillingApi - interface
 * 
 * @export
 * @interface BillingApiInterface
 */
export interface BillingApiInterface {
    /**
     * 
     * @summary Createbillingaccount
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BillingApiInterface
     */
    createBillingAccountRaw(requestParameters: CreateBillingAccountRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StripeAccountResponse>>;

    /**
     * Createbillingaccount
     */
    createBillingAccount(requestParameters: CreateBillingAccountRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StripeAccountResponse>;

    /**
     * 
     * @summary Getclientsecret
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BillingApiInterface
     */
    getClientSecretRaw(requestParameters: GetClientSecretRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StripeCustomerSecretResponse>>;

    /**
     * Getclientsecret
     */
    getClientSecret(requestParameters: GetClientSecretRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StripeCustomerSecretResponse>;

    /**
     * 
     * @summary Haspayment
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BillingApiInterface
     */
    hasPaymentRaw(requestParameters: HasPaymentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<boolean>>;

    /**
     * Haspayment
     */
    hasPayment(requestParameters: HasPaymentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<boolean>;

    /**
     * 
     * @summary Listpaymentmethods
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BillingApiInterface
     */
    listPaymentMethodsRaw(requestParameters: ListPaymentMethodsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<PaymentMethodResponse>>>;

    /**
     * Listpaymentmethods
     */
    listPaymentMethods(requestParameters: ListPaymentMethodsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<PaymentMethodResponse>>;

    /**
     * 
     * @summary Processpayment
     * @param {Payment} payment 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BillingApiInterface
     */
    processPaymentRaw(requestParameters: ProcessPaymentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<string>>;

    /**
     * Processpayment
     */
    processPayment(requestParameters: ProcessPaymentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<string>;

    /**
     * 
     * @summary Reconcilepaymentmethod
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BillingApiInterface
     */
    reconcilePaymentMethodRaw(requestParameters: ReconcilePaymentMethodRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<boolean>>;

    /**
     * Reconcilepaymentmethod
     */
    reconcilePaymentMethod(requestParameters: ReconcilePaymentMethodRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<boolean>;

    /**
     * 
     * @summary Removepaymentmethod
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BillingApiInterface
     */
    removePaymentMethodRaw(requestParameters: RemovePaymentMethodRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<string>>;

    /**
     * Removepaymentmethod
     */
    removePaymentMethod(requestParameters: RemovePaymentMethodRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<string>;

}

/**
 * 
 */
export class BillingApi extends runtime.BaseAPI implements BillingApiInterface {

    /**
     * Createbillingaccount
     */
    async createBillingAccountRaw(requestParameters: CreateBillingAccountRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StripeAccountResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAccessToken !== undefined && requestParameters.xAccessToken !== null) {
            headerParameters['x-access-token'] = String(requestParameters.xAccessToken);
        }

        if (requestParameters.xSecretToken !== undefined && requestParameters.xSecretToken !== null) {
            headerParameters['x-secret-token'] = String(requestParameters.xSecretToken);
        }

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.ehelplyActiveParticipant !== undefined && requestParameters.ehelplyActiveParticipant !== null) {
            headerParameters['ehelply-active-participant'] = String(requestParameters.ehelplyActiveParticipant);
        }

        if (requestParameters.ehelplyProject !== undefined && requestParameters.ehelplyProject !== null) {
            headerParameters['ehelply-project'] = String(requestParameters.ehelplyProject);
        }

        if (requestParameters.ehelplyData !== undefined && requestParameters.ehelplyData !== null) {
            headerParameters['ehelply-data'] = String(requestParameters.ehelplyData);
        }

        const response = await this.request({
            path: `/sam/billing/create_billing_account`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StripeAccountResponseFromJSON(jsonValue));
    }

    /**
     * Createbillingaccount
     */
    async createBillingAccount(requestParameters: CreateBillingAccountRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StripeAccountResponse> {
        const response = await this.createBillingAccountRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Getclientsecret
     */
    async getClientSecretRaw(requestParameters: GetClientSecretRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StripeCustomerSecretResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAccessToken !== undefined && requestParameters.xAccessToken !== null) {
            headerParameters['x-access-token'] = String(requestParameters.xAccessToken);
        }

        if (requestParameters.xSecretToken !== undefined && requestParameters.xSecretToken !== null) {
            headerParameters['x-secret-token'] = String(requestParameters.xSecretToken);
        }

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.ehelplyActiveParticipant !== undefined && requestParameters.ehelplyActiveParticipant !== null) {
            headerParameters['ehelply-active-participant'] = String(requestParameters.ehelplyActiveParticipant);
        }

        if (requestParameters.ehelplyProject !== undefined && requestParameters.ehelplyProject !== null) {
            headerParameters['ehelply-project'] = String(requestParameters.ehelplyProject);
        }

        if (requestParameters.ehelplyData !== undefined && requestParameters.ehelplyData !== null) {
            headerParameters['ehelply-data'] = String(requestParameters.ehelplyData);
        }

        const response = await this.request({
            path: `/sam/billing/retrieve_secret`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StripeCustomerSecretResponseFromJSON(jsonValue));
    }

    /**
     * Getclientsecret
     */
    async getClientSecret(requestParameters: GetClientSecretRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StripeCustomerSecretResponse> {
        const response = await this.getClientSecretRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Haspayment
     */
    async hasPaymentRaw(requestParameters: HasPaymentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<boolean>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAccessToken !== undefined && requestParameters.xAccessToken !== null) {
            headerParameters['x-access-token'] = String(requestParameters.xAccessToken);
        }

        if (requestParameters.xSecretToken !== undefined && requestParameters.xSecretToken !== null) {
            headerParameters['x-secret-token'] = String(requestParameters.xSecretToken);
        }

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.ehelplyActiveParticipant !== undefined && requestParameters.ehelplyActiveParticipant !== null) {
            headerParameters['ehelply-active-participant'] = String(requestParameters.ehelplyActiveParticipant);
        }

        if (requestParameters.ehelplyProject !== undefined && requestParameters.ehelplyProject !== null) {
            headerParameters['ehelply-project'] = String(requestParameters.ehelplyProject);
        }

        if (requestParameters.ehelplyData !== undefined && requestParameters.ehelplyData !== null) {
            headerParameters['ehelply-data'] = String(requestParameters.ehelplyData);
        }

        const response = await this.request({
            path: `/sam/billing/has_payment`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Haspayment
     */
    async hasPayment(requestParameters: HasPaymentRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<boolean> {
        const response = await this.hasPaymentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Listpaymentmethods
     */
    async listPaymentMethodsRaw(requestParameters: ListPaymentMethodsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<PaymentMethodResponse>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAccessToken !== undefined && requestParameters.xAccessToken !== null) {
            headerParameters['x-access-token'] = String(requestParameters.xAccessToken);
        }

        if (requestParameters.xSecretToken !== undefined && requestParameters.xSecretToken !== null) {
            headerParameters['x-secret-token'] = String(requestParameters.xSecretToken);
        }

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.ehelplyActiveParticipant !== undefined && requestParameters.ehelplyActiveParticipant !== null) {
            headerParameters['ehelply-active-participant'] = String(requestParameters.ehelplyActiveParticipant);
        }

        if (requestParameters.ehelplyProject !== undefined && requestParameters.ehelplyProject !== null) {
            headerParameters['ehelply-project'] = String(requestParameters.ehelplyProject);
        }

        if (requestParameters.ehelplyData !== undefined && requestParameters.ehelplyData !== null) {
            headerParameters['ehelply-data'] = String(requestParameters.ehelplyData);
        }

        const response = await this.request({
            path: `/sam/billing/view_payment_method`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PaymentMethodResponseFromJSON));
    }

    /**
     * Listpaymentmethods
     */
    async listPaymentMethods(requestParameters: ListPaymentMethodsRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<PaymentMethodResponse>> {
        const response = await this.listPaymentMethodsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Processpayment
     */
    async processPaymentRaw(requestParameters: ProcessPaymentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.payment === null || requestParameters.payment === undefined) {
            throw new runtime.RequiredError('payment','Required parameter requestParameters.payment was null or undefined when calling processPayment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xAccessToken !== undefined && requestParameters.xAccessToken !== null) {
            headerParameters['x-access-token'] = String(requestParameters.xAccessToken);
        }

        if (requestParameters.xSecretToken !== undefined && requestParameters.xSecretToken !== null) {
            headerParameters['x-secret-token'] = String(requestParameters.xSecretToken);
        }

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.ehelplyActiveParticipant !== undefined && requestParameters.ehelplyActiveParticipant !== null) {
            headerParameters['ehelply-active-participant'] = String(requestParameters.ehelplyActiveParticipant);
        }

        if (requestParameters.ehelplyProject !== undefined && requestParameters.ehelplyProject !== null) {
            headerParameters['ehelply-project'] = String(requestParameters.ehelplyProject);
        }

        if (requestParameters.ehelplyData !== undefined && requestParameters.ehelplyData !== null) {
            headerParameters['ehelply-data'] = String(requestParameters.ehelplyData);
        }

        const response = await this.request({
            path: `/sam/billing/process_payment`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaymentToJSON(requestParameters.payment),
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Processpayment
     */
    async processPayment(requestParameters: ProcessPaymentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<string> {
        const response = await this.processPaymentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Reconcilepaymentmethod
     */
    async reconcilePaymentMethodRaw(requestParameters: ReconcilePaymentMethodRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<boolean>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAccessToken !== undefined && requestParameters.xAccessToken !== null) {
            headerParameters['x-access-token'] = String(requestParameters.xAccessToken);
        }

        if (requestParameters.xSecretToken !== undefined && requestParameters.xSecretToken !== null) {
            headerParameters['x-secret-token'] = String(requestParameters.xSecretToken);
        }

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.ehelplyActiveParticipant !== undefined && requestParameters.ehelplyActiveParticipant !== null) {
            headerParameters['ehelply-active-participant'] = String(requestParameters.ehelplyActiveParticipant);
        }

        if (requestParameters.ehelplyProject !== undefined && requestParameters.ehelplyProject !== null) {
            headerParameters['ehelply-project'] = String(requestParameters.ehelplyProject);
        }

        if (requestParameters.ehelplyData !== undefined && requestParameters.ehelplyData !== null) {
            headerParameters['ehelply-data'] = String(requestParameters.ehelplyData);
        }

        const response = await this.request({
            path: `/sam/billing/reconcile_payment`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Reconcilepaymentmethod
     */
    async reconcilePaymentMethod(requestParameters: ReconcilePaymentMethodRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<boolean> {
        const response = await this.reconcilePaymentMethodRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Removepaymentmethod
     */
    async removePaymentMethodRaw(requestParameters: RemovePaymentMethodRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xAccessToken !== undefined && requestParameters.xAccessToken !== null) {
            headerParameters['x-access-token'] = String(requestParameters.xAccessToken);
        }

        if (requestParameters.xSecretToken !== undefined && requestParameters.xSecretToken !== null) {
            headerParameters['x-secret-token'] = String(requestParameters.xSecretToken);
        }

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.ehelplyActiveParticipant !== undefined && requestParameters.ehelplyActiveParticipant !== null) {
            headerParameters['ehelply-active-participant'] = String(requestParameters.ehelplyActiveParticipant);
        }

        if (requestParameters.ehelplyProject !== undefined && requestParameters.ehelplyProject !== null) {
            headerParameters['ehelply-project'] = String(requestParameters.ehelplyProject);
        }

        if (requestParameters.ehelplyData !== undefined && requestParameters.ehelplyData !== null) {
            headerParameters['ehelply-data'] = String(requestParameters.ehelplyData);
        }

        const response = await this.request({
            path: `/sam/billing/remove_payment_method`,
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Removepaymentmethod
     */
    async removePaymentMethod(requestParameters: RemovePaymentMethodRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<string> {
        const response = await this.removePaymentMethodRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
