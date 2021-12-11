/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK
 * eHelply SDK
 *
 * The version of the OpenAPI document: 1.1.32
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { HTTPValidationError } from '../models';
/**
 * LoggingApi - axios parameter creator
 * @export
 */
export const LoggingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get Logs
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
         */
        getLogsLoggingLogsGet: async (service?: string, dateStart?: string, dateEnd?: string, desc?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/sam/logging/logs`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (service !== undefined) {
                localVarQueryParameter['service'] = service;
            }

            if (dateStart !== undefined) {
                localVarQueryParameter['date_start'] = dateStart;
            }

            if (dateEnd !== undefined) {
                localVarQueryParameter['date_end'] = dateEnd;
            }

            if (desc !== undefined) {
                localVarQueryParameter['desc'] = desc;
            }

            if (xAccessToken !== undefined && xAccessToken !== null) {
                localVarHeaderParameter['x-access-token'] = String(xAccessToken);
            }

            if (xSecretToken !== undefined && xSecretToken !== null) {
                localVarHeaderParameter['x-secret-token'] = String(xSecretToken);
            }

            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['authorization'] = String(authorization);
            }

            if (ehelplyActiveParticipant !== undefined && ehelplyActiveParticipant !== null) {
                localVarHeaderParameter['ehelply-active-participant'] = String(ehelplyActiveParticipant);
            }

            if (ehelplyProject !== undefined && ehelplyProject !== null) {
                localVarHeaderParameter['ehelply-project'] = String(ehelplyProject);
            }

            if (ehelplyData !== undefined && ehelplyData !== null) {
                localVarHeaderParameter['ehelply-data'] = String(ehelplyData);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Service Logs
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
         */
        getServiceLogsLoggingLogsServicesServiceGet: async (service: string, dateStart?: string, dateEnd?: string, desc?: boolean, limit?: number, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'service' is not null or undefined
            assertParamExists('getServiceLogsLoggingLogsServicesServiceGet', 'service', service)
            const localVarPath = `/sam/logging/logs/services/{service}`
                .replace(`{${"service"}}`, encodeURIComponent(String(service)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (dateStart !== undefined) {
                localVarQueryParameter['date_start'] = dateStart;
            }

            if (dateEnd !== undefined) {
                localVarQueryParameter['date_end'] = dateEnd;
            }

            if (desc !== undefined) {
                localVarQueryParameter['desc'] = desc;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (xAccessToken !== undefined && xAccessToken !== null) {
                localVarHeaderParameter['x-access-token'] = String(xAccessToken);
            }

            if (xSecretToken !== undefined && xSecretToken !== null) {
                localVarHeaderParameter['x-secret-token'] = String(xSecretToken);
            }

            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['authorization'] = String(authorization);
            }

            if (ehelplyActiveParticipant !== undefined && ehelplyActiveParticipant !== null) {
                localVarHeaderParameter['ehelply-active-participant'] = String(ehelplyActiveParticipant);
            }

            if (ehelplyProject !== undefined && ehelplyProject !== null) {
                localVarHeaderParameter['ehelply-project'] = String(ehelplyProject);
            }

            if (ehelplyData !== undefined && ehelplyData !== null) {
                localVarHeaderParameter['ehelply-data'] = String(ehelplyData);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Subject Logs
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
         */
        getSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet: async (service: string, subject: string, dateStart?: string, dateEnd?: string, desc?: boolean, limit?: number, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'service' is not null or undefined
            assertParamExists('getSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet', 'service', service)
            // verify required parameter 'subject' is not null or undefined
            assertParamExists('getSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet', 'subject', subject)
            const localVarPath = `/sam/logging/logs/services/{service}/subjects/{subject}`
                .replace(`{${"service"}}`, encodeURIComponent(String(service)))
                .replace(`{${"subject"}}`, encodeURIComponent(String(subject)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (dateStart !== undefined) {
                localVarQueryParameter['date_start'] = dateStart;
            }

            if (dateEnd !== undefined) {
                localVarQueryParameter['date_end'] = dateEnd;
            }

            if (desc !== undefined) {
                localVarQueryParameter['desc'] = desc;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (xAccessToken !== undefined && xAccessToken !== null) {
                localVarHeaderParameter['x-access-token'] = String(xAccessToken);
            }

            if (xSecretToken !== undefined && xSecretToken !== null) {
                localVarHeaderParameter['x-secret-token'] = String(xSecretToken);
            }

            if (authorization !== undefined && authorization !== null) {
                localVarHeaderParameter['authorization'] = String(authorization);
            }

            if (ehelplyActiveParticipant !== undefined && ehelplyActiveParticipant !== null) {
                localVarHeaderParameter['ehelply-active-participant'] = String(ehelplyActiveParticipant);
            }

            if (ehelplyProject !== undefined && ehelplyProject !== null) {
                localVarHeaderParameter['ehelply-project'] = String(ehelplyProject);
            }

            if (ehelplyData !== undefined && ehelplyData !== null) {
                localVarHeaderParameter['ehelply-data'] = String(ehelplyData);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LoggingApi - functional programming interface
 * @export
 */
export const LoggingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LoggingApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Get Logs
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
         */
        async getLogsLoggingLogsGet(service?: string, dateStart?: string, dateEnd?: string, desc?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getLogsLoggingLogsGet(service, dateStart, dateEnd, desc, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Service Logs
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
         */
        async getServiceLogsLoggingLogsServicesServiceGet(service: string, dateStart?: string, dateEnd?: string, desc?: boolean, limit?: number, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getServiceLogsLoggingLogsServicesServiceGet(service, dateStart, dateEnd, desc, limit, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Subject Logs
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
         */
        async getSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet(service: string, subject: string, dateStart?: string, dateEnd?: string, desc?: boolean, limit?: number, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet(service, subject, dateStart, dateEnd, desc, limit, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * LoggingApi - factory interface
 * @export
 */
export const LoggingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LoggingApiFp(configuration)
    return {
        /**
         * 
         * @summary Get Logs
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
         */
        getLogsLoggingLogsGet(service?: string, dateStart?: string, dateEnd?: string, desc?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, options?: any): AxiosPromise<any> {
            return localVarFp.getLogsLoggingLogsGet(service, dateStart, dateEnd, desc, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Service Logs
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
         */
        getServiceLogsLoggingLogsServicesServiceGet(service: string, dateStart?: string, dateEnd?: string, desc?: boolean, limit?: number, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, options?: any): AxiosPromise<any> {
            return localVarFp.getServiceLogsLoggingLogsServicesServiceGet(service, dateStart, dateEnd, desc, limit, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Subject Logs
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
         */
        getSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet(service: string, subject: string, dateStart?: string, dateEnd?: string, desc?: boolean, limit?: number, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, options?: any): AxiosPromise<any> {
            return localVarFp.getSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet(service, subject, dateStart, dateEnd, desc, limit, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LoggingApi - interface
 * @export
 * @interface LoggingApi
 */
export interface LoggingApiInterface {
    /**
     * 
     * @summary Get Logs
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
    getLogsLoggingLogsGet(service?: string, dateStart?: string, dateEnd?: string, desc?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, options?: AxiosRequestConfig): AxiosPromise<any>;

    /**
     * 
     * @summary Get Service Logs
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
    getServiceLogsLoggingLogsServicesServiceGet(service: string, dateStart?: string, dateEnd?: string, desc?: boolean, limit?: number, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, options?: AxiosRequestConfig): AxiosPromise<any>;

    /**
     * 
     * @summary Get Subject Logs
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
    getSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet(service: string, subject: string, dateStart?: string, dateEnd?: string, desc?: boolean, limit?: number, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, options?: AxiosRequestConfig): AxiosPromise<any>;

}

/**
 * LoggingApi - object-oriented interface
 * @export
 * @class LoggingApi
 * @extends {BaseAPI}
 */
export class LoggingApi extends BaseAPI implements LoggingApiInterface {
    /**
     * 
     * @summary Get Logs
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
     * @memberof LoggingApi
     */
    public getLogsLoggingLogsGet(service?: string, dateStart?: string, dateEnd?: string, desc?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, options?: AxiosRequestConfig) {
        return LoggingApiFp(this.configuration).getLogsLoggingLogsGet(service, dateStart, dateEnd, desc, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Service Logs
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
     * @memberof LoggingApi
     */
    public getServiceLogsLoggingLogsServicesServiceGet(service: string, dateStart?: string, dateEnd?: string, desc?: boolean, limit?: number, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, options?: AxiosRequestConfig) {
        return LoggingApiFp(this.configuration).getServiceLogsLoggingLogsServicesServiceGet(service, dateStart, dateEnd, desc, limit, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Subject Logs
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
     * @memberof LoggingApi
     */
    public getSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet(service: string, subject: string, dateStart?: string, dateEnd?: string, desc?: boolean, limit?: number, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, options?: AxiosRequestConfig) {
        return LoggingApiFp(this.configuration).getSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet(service, subject, dateStart, dateEnd, desc, limit, xAccessToken, xSecretToken, authorization, ehelplyActiveParticipant, ehelplyProject, ehelplyData, options).then((request) => request(this.axios, this.basePath));
    }
}
