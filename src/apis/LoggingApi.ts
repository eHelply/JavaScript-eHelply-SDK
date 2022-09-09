/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.113
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.113
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
    LoggingDynamo,
    LoggingDynamoFromJSON,
    LoggingDynamoToJSON,
} from '../models';

export interface GetLogsRequest {
    service?: string;
    dateStart?: string;
    dateEnd?: string;
    desc?: boolean;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface GetServiceLogsRequest {
    service: string;
    dateStart?: string;
    dateEnd?: string;
    desc?: boolean;
    limit?: number;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface GetSubjectLogsRequest {
    service: string;
    subject: string;
    dateStart?: string;
    dateEnd?: string;
    desc?: boolean;
    limit?: number;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

/**
 * LoggingApi - interface
 * 
 * @export
 * @interface LoggingApiInterface
 */
export interface LoggingApiInterface {
    /**
     * 
     * @summary Getlogs
     * @param {string} [service] 
     * @param {string} [dateStart] 
     * @param {string} [dateEnd] 
     * @param {boolean} [desc] 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoggingApiInterface
     */
    getLogsRaw(requestParameters: GetLogsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<LoggingDynamo>>>;

    /**
     * Getlogs
     */
    getLogs(requestParameters: GetLogsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<LoggingDynamo>>;

    /**
     * 
     * @summary Getservicelogs
     * @param {string} service 
     * @param {string} [dateStart] 
     * @param {string} [dateEnd] 
     * @param {boolean} [desc] 
     * @param {number} [limit] 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoggingApiInterface
     */
    getServiceLogsRaw(requestParameters: GetServiceLogsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<LoggingDynamo>>>;

    /**
     * Getservicelogs
     */
    getServiceLogs(requestParameters: GetServiceLogsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<LoggingDynamo>>;

    /**
     * 
     * @summary Getsubjectlogs
     * @param {string} service 
     * @param {string} subject 
     * @param {string} [dateStart] 
     * @param {string} [dateEnd] 
     * @param {boolean} [desc] 
     * @param {number} [limit] 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoggingApiInterface
     */
    getSubjectLogsRaw(requestParameters: GetSubjectLogsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<object>>;

    /**
     * Getsubjectlogs
     */
    getSubjectLogs(requestParameters: GetSubjectLogsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<object>;

}

/**
 * 
 */
export class LoggingApi extends runtime.BaseAPI implements LoggingApiInterface {

    /**
     * Getlogs
     */
    async getLogsRaw(requestParameters: GetLogsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<LoggingDynamo>>> {
        const queryParameters: any = {};

        if (requestParameters.service !== undefined) {
            queryParameters['service'] = requestParameters.service;
        }

        if (requestParameters.dateStart !== undefined) {
            queryParameters['date_start'] = requestParameters.dateStart;
        }

        if (requestParameters.dateEnd !== undefined) {
            queryParameters['date_end'] = requestParameters.dateEnd;
        }

        if (requestParameters.desc !== undefined) {
            queryParameters['desc'] = requestParameters.desc;
        }

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
            path: `/sam/logging/logs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LoggingDynamoFromJSON));
    }

    /**
     * Getlogs
     */
    async getLogs(requestParameters: GetLogsRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<LoggingDynamo>> {
        const response = await this.getLogsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Getservicelogs
     */
    async getServiceLogsRaw(requestParameters: GetServiceLogsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<LoggingDynamo>>> {
        if (requestParameters.service === null || requestParameters.service === undefined) {
            throw new runtime.RequiredError('service','Required parameter requestParameters.service was null or undefined when calling getServiceLogs.');
        }

        const queryParameters: any = {};

        if (requestParameters.dateStart !== undefined) {
            queryParameters['date_start'] = requestParameters.dateStart;
        }

        if (requestParameters.dateEnd !== undefined) {
            queryParameters['date_end'] = requestParameters.dateEnd;
        }

        if (requestParameters.desc !== undefined) {
            queryParameters['desc'] = requestParameters.desc;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

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
            path: `/sam/logging/logs/services/{service}`.replace(`{${"service"}}`, encodeURIComponent(String(requestParameters.service))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(LoggingDynamoFromJSON));
    }

    /**
     * Getservicelogs
     */
    async getServiceLogs(requestParameters: GetServiceLogsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<LoggingDynamo>> {
        const response = await this.getServiceLogsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Getsubjectlogs
     */
    async getSubjectLogsRaw(requestParameters: GetSubjectLogsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.service === null || requestParameters.service === undefined) {
            throw new runtime.RequiredError('service','Required parameter requestParameters.service was null or undefined when calling getSubjectLogs.');
        }

        if (requestParameters.subject === null || requestParameters.subject === undefined) {
            throw new runtime.RequiredError('subject','Required parameter requestParameters.subject was null or undefined when calling getSubjectLogs.');
        }

        const queryParameters: any = {};

        if (requestParameters.dateStart !== undefined) {
            queryParameters['date_start'] = requestParameters.dateStart;
        }

        if (requestParameters.dateEnd !== undefined) {
            queryParameters['date_end'] = requestParameters.dateEnd;
        }

        if (requestParameters.desc !== undefined) {
            queryParameters['desc'] = requestParameters.desc;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

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
            path: `/sam/logging/logs/services/{service}/subjects/{subject}`.replace(`{${"service"}}`, encodeURIComponent(String(requestParameters.service))).replace(`{${"subject"}}`, encodeURIComponent(String(requestParameters.subject))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Getsubjectlogs
     */
    async getSubjectLogs(requestParameters: GetSubjectLogsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<object> {
        const response = await this.getSubjectLogsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
