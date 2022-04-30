// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { HTTPValidationError } from '..models/models/HTTPValidationError';

/**
 * no description
 */
export class LoggingApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Get Logs
     * @param service 
     * @param dateStart 
     * @param dateEnd 
     * @param desc 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async getLogsLoggingLogsGet(service?: string, dateStart?: string, dateEnd?: string, desc?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;











        // Path Params
        const localVarPath = '/sam/logging/logs';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (service !== undefined) {
            requestContext.setQueryParam("service", ObjectSerializer.serialize(service, "string", ""));
        }

        // Query Params
        if (dateStart !== undefined) {
            requestContext.setQueryParam("date_start", ObjectSerializer.serialize(dateStart, "string", ""));
        }

        // Query Params
        if (dateEnd !== undefined) {
            requestContext.setQueryParam("date_end", ObjectSerializer.serialize(dateEnd, "string", ""));
        }

        // Query Params
        if (desc !== undefined) {
            requestContext.setQueryParam("desc", ObjectSerializer.serialize(desc, "boolean", ""));
        }

        // Header Params
        requestContext.setHeaderParam("x-access-token", ObjectSerializer.serialize(xAccessToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("x-secret-token", ObjectSerializer.serialize(xSecretToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("authorization", ObjectSerializer.serialize(authorization, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-active-participant", ObjectSerializer.serialize(ehelplyActiveParticipant, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-project", ObjectSerializer.serialize(ehelplyProject, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-data", ObjectSerializer.serialize(ehelplyData, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get Service Logs
     * @param service 
     * @param dateStart 
     * @param dateEnd 
     * @param desc 
     * @param limit 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async getServiceLogsLoggingLogsServicesServiceGet(service: string, dateStart?: string, dateEnd?: string, desc?: boolean, limit?: number, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'service' is not null or undefined
        if (service === null || service === undefined) {
            throw new RequiredError("LoggingApi", "getServiceLogsLoggingLogsServicesServiceGet", "service");
        }












        // Path Params
        const localVarPath = '/sam/logging/logs/services/{service}'
            .replace('{' + 'service' + '}', encodeURIComponent(String(service)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (dateStart !== undefined) {
            requestContext.setQueryParam("date_start", ObjectSerializer.serialize(dateStart, "string", ""));
        }

        // Query Params
        if (dateEnd !== undefined) {
            requestContext.setQueryParam("date_end", ObjectSerializer.serialize(dateEnd, "string", ""));
        }

        // Query Params
        if (desc !== undefined) {
            requestContext.setQueryParam("desc", ObjectSerializer.serialize(desc, "boolean", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Header Params
        requestContext.setHeaderParam("x-access-token", ObjectSerializer.serialize(xAccessToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("x-secret-token", ObjectSerializer.serialize(xSecretToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("authorization", ObjectSerializer.serialize(authorization, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-active-participant", ObjectSerializer.serialize(ehelplyActiveParticipant, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-project", ObjectSerializer.serialize(ehelplyProject, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-data", ObjectSerializer.serialize(ehelplyData, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get Subject Logs
     * @param service 
     * @param subject 
     * @param dateStart 
     * @param dateEnd 
     * @param desc 
     * @param limit 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async getSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet(service: string, subject: string, dateStart?: string, dateEnd?: string, desc?: boolean, limit?: number, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'service' is not null or undefined
        if (service === null || service === undefined) {
            throw new RequiredError("LoggingApi", "getSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet", "service");
        }


        // verify required parameter 'subject' is not null or undefined
        if (subject === null || subject === undefined) {
            throw new RequiredError("LoggingApi", "getSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet", "subject");
        }












        // Path Params
        const localVarPath = '/sam/logging/logs/services/{service}/subjects/{subject}'
            .replace('{' + 'service' + '}', encodeURIComponent(String(service)))
            .replace('{' + 'subject' + '}', encodeURIComponent(String(subject)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (dateStart !== undefined) {
            requestContext.setQueryParam("date_start", ObjectSerializer.serialize(dateStart, "string", ""));
        }

        // Query Params
        if (dateEnd !== undefined) {
            requestContext.setQueryParam("date_end", ObjectSerializer.serialize(dateEnd, "string", ""));
        }

        // Query Params
        if (desc !== undefined) {
            requestContext.setQueryParam("desc", ObjectSerializer.serialize(desc, "boolean", ""));
        }

        // Query Params
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", ""));
        }

        // Header Params
        requestContext.setHeaderParam("x-access-token", ObjectSerializer.serialize(xAccessToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("x-secret-token", ObjectSerializer.serialize(xSecretToken, "string", ""));

        // Header Params
        requestContext.setHeaderParam("authorization", ObjectSerializer.serialize(authorization, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-active-participant", ObjectSerializer.serialize(ehelplyActiveParticipant, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-project", ObjectSerializer.serialize(ehelplyProject, "string", ""));

        // Header Params
        requestContext.setHeaderParam("ehelply-data", ObjectSerializer.serialize(ehelplyData, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class LoggingApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getLogsLoggingLogsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getLogsLoggingLogsGet(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not found", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(422, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getServiceLogsLoggingLogsServicesServiceGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getServiceLogsLoggingLogsServicesServiceGet(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not found", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(422, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSubjectLogsLoggingLogsServicesServiceSubjectsSubjectGet(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not found", undefined, response.headers);
        }
        if (isCodeInRange("422", response.httpStatusCode)) {
            const body: HTTPValidationError = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HTTPValidationError", ""
            ) as HTTPValidationError;
            throw new ApiException<HTTPValidationError>(422, "Validation Error", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
