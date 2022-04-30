// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { HTTPValidationError } from '..models/models/HTTPValidationError';
import { Page } from '..models/models/Page';
import { StaffCreate } from '..models/models/StaffCreate';
import { StaffDb } from '..models/models/StaffDb';
import { StaffResponse } from '..models/models/StaffResponse';

/**
 * no description
 */
export class StaffApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates a staff member
     * Create Staff
     * @param staffCreate 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async createStaffPlacesStaffPost(staffCreate: StaffCreate, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'staffCreate' is not null or undefined
        if (staffCreate === null || staffCreate === undefined) {
            throw new RequiredError("StaffApi", "createStaffPlacesStaffPost", "staffCreate");
        }








        // Path Params
        const localVarPath = '/places/staff';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(staffCreate, "StaffCreate", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Deletes the staff member with the given ID and returns True if successful
     * Delete Staff
     * @param staffUuid 
     * @param softDelete 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async deleteStaffPlacesStaffStaffUuidDelete(staffUuid: string, softDelete?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'staffUuid' is not null or undefined
        if (staffUuid === null || staffUuid === undefined) {
            throw new RequiredError("StaffApi", "deleteStaffPlacesStaffStaffUuidDelete", "staffUuid");
        }









        // Path Params
        const localVarPath = '/places/staff/{staff_uuid}'
            .replace('{' + 'staff_uuid' + '}', encodeURIComponent(String(staffUuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (softDelete !== undefined) {
            requestContext.setQueryParam("soft_delete", ObjectSerializer.serialize(softDelete, "boolean", ""));
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
     * Gets the staff member information given the staff ID
     * Get Staff
     * @param staffUuid 
     * @param withPlaces 
     * @param withCompanies 
     * @param withCatalog 
     * @param withSchedule 
     * @param withRoles 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async getStaffPlacesStaffStaffUuidGet(staffUuid: string, withPlaces?: boolean, withCompanies?: boolean, withCatalog?: boolean, withSchedule?: boolean, withRoles?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'staffUuid' is not null or undefined
        if (staffUuid === null || staffUuid === undefined) {
            throw new RequiredError("StaffApi", "getStaffPlacesStaffStaffUuidGet", "staffUuid");
        }













        // Path Params
        const localVarPath = '/places/staff/{staff_uuid}'
            .replace('{' + 'staff_uuid' + '}', encodeURIComponent(String(staffUuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (withPlaces !== undefined) {
            requestContext.setQueryParam("with_places", ObjectSerializer.serialize(withPlaces, "boolean", ""));
        }

        // Query Params
        if (withCompanies !== undefined) {
            requestContext.setQueryParam("with_companies", ObjectSerializer.serialize(withCompanies, "boolean", ""));
        }

        // Query Params
        if (withCatalog !== undefined) {
            requestContext.setQueryParam("with_catalog", ObjectSerializer.serialize(withCatalog, "boolean", ""));
        }

        // Query Params
        if (withSchedule !== undefined) {
            requestContext.setQueryParam("with_schedule", ObjectSerializer.serialize(withSchedule, "boolean", ""));
        }

        // Query Params
        if (withRoles !== undefined) {
            requestContext.setQueryParam("with_roles", ObjectSerializer.serialize(withRoles, "boolean", ""));
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
     * TODO Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      entity                              **type:** string or None      place                               **type:** dict or None      company                             **type:** dict or None      schedule                            **type:** dict or None      catalog                             **type:** dict or None      reviews                             **type:** dict or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * Search Staff
     * @param projectUuid 
     * @param firstName 
     * @param lastName 
     * @param isDeleted 
     * @param withCompanies 
     * @param withPlaces 
     * @param withSchedule 
     * @param withCatalog 
     * @param withReviews 
     * @param withRoles 
     * @param page 
     * @param pageSize 
     * @param sortOn 
     * @param sortDesc 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async searchStaffPlacesStaffGet(projectUuid?: string, firstName?: string, lastName?: string, isDeleted?: boolean, withCompanies?: boolean, withPlaces?: boolean, withSchedule?: boolean, withCatalog?: boolean, withReviews?: boolean, withRoles?: boolean, page?: number, pageSize?: number, sortOn?: string, sortDesc?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;





















        // Path Params
        const localVarPath = '/places/staff';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (projectUuid !== undefined) {
            requestContext.setQueryParam("project_uuid", ObjectSerializer.serialize(projectUuid, "string", ""));
        }

        // Query Params
        if (firstName !== undefined) {
            requestContext.setQueryParam("first_name", ObjectSerializer.serialize(firstName, "string", ""));
        }

        // Query Params
        if (lastName !== undefined) {
            requestContext.setQueryParam("last_name", ObjectSerializer.serialize(lastName, "string", ""));
        }

        // Query Params
        if (isDeleted !== undefined) {
            requestContext.setQueryParam("is_deleted", ObjectSerializer.serialize(isDeleted, "boolean", ""));
        }

        // Query Params
        if (withCompanies !== undefined) {
            requestContext.setQueryParam("with_companies", ObjectSerializer.serialize(withCompanies, "boolean", ""));
        }

        // Query Params
        if (withPlaces !== undefined) {
            requestContext.setQueryParam("with_places", ObjectSerializer.serialize(withPlaces, "boolean", ""));
        }

        // Query Params
        if (withSchedule !== undefined) {
            requestContext.setQueryParam("with_schedule", ObjectSerializer.serialize(withSchedule, "boolean", ""));
        }

        // Query Params
        if (withCatalog !== undefined) {
            requestContext.setQueryParam("with_catalog", ObjectSerializer.serialize(withCatalog, "boolean", ""));
        }

        // Query Params
        if (withReviews !== undefined) {
            requestContext.setQueryParam("with_reviews", ObjectSerializer.serialize(withReviews, "boolean", ""));
        }

        // Query Params
        if (withRoles !== undefined) {
            requestContext.setQueryParam("with_roles", ObjectSerializer.serialize(withRoles, "boolean", ""));
        }

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", ""));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("page_size", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (sortOn !== undefined) {
            requestContext.setQueryParam("sort_on", ObjectSerializer.serialize(sortOn, "string", ""));
        }

        // Query Params
        if (sortDesc !== undefined) {
            requestContext.setQueryParam("sort_desc", ObjectSerializer.serialize(sortDesc, "boolean", ""));
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
     * Update staff with given info, only updating the fields supplied. Staff Uuid must be sent however.
     * Update Staff
     * @param staffUuid 
     * @param staffCreate 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async updateStaffPlacesStaffStaffUuidPut(staffUuid: string, staffCreate: StaffCreate, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'staffUuid' is not null or undefined
        if (staffUuid === null || staffUuid === undefined) {
            throw new RequiredError("StaffApi", "updateStaffPlacesStaffStaffUuidPut", "staffUuid");
        }


        // verify required parameter 'staffCreate' is not null or undefined
        if (staffCreate === null || staffCreate === undefined) {
            throw new RequiredError("StaffApi", "updateStaffPlacesStaffStaffUuidPut", "staffCreate");
        }








        // Path Params
        const localVarPath = '/places/staff/{staff_uuid}'
            .replace('{' + 'staff_uuid' + '}', encodeURIComponent(String(staffUuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

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


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(staffCreate, "StaffCreate", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class StaffApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createStaffPlacesStaffPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createStaffPlacesStaffPost(response: ResponseContext): Promise<StaffDb > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StaffDb = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StaffDb", ""
            ) as StaffDb;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Route not found - Denied by eHelply", undefined, response.headers);
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
            const body: StaffDb = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StaffDb", ""
            ) as StaffDb;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteStaffPlacesStaffStaffUuidDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteStaffPlacesStaffStaffUuidDelete(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Route not found - Denied by eHelply", undefined, response.headers);
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
     * @params response Response returned by the server for a request to getStaffPlacesStaffStaffUuidGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getStaffPlacesStaffStaffUuidGet(response: ResponseContext): Promise<StaffResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StaffResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StaffResponse", ""
            ) as StaffResponse;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Route not found - Denied by eHelply", undefined, response.headers);
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
            const body: StaffResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StaffResponse", ""
            ) as StaffResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchStaffPlacesStaffGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchStaffPlacesStaffGet(response: ResponseContext): Promise<Page > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Page = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Page", ""
            ) as Page;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Route not found - Denied by eHelply", undefined, response.headers);
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
            const body: Page = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Page", ""
            ) as Page;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateStaffPlacesStaffStaffUuidPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateStaffPlacesStaffStaffUuidPut(response: ResponseContext): Promise<StaffResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StaffResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StaffResponse", ""
            ) as StaffResponse;
            return body;
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Route not found - Denied by eHelply", undefined, response.headers);
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
            const body: StaffResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StaffResponse", ""
            ) as StaffResponse;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
