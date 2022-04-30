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
import { TagBase } from '..models/models/TagBase';
import { TagDb } from '..models/models/TagDb';

/**
 * no description
 */
export class TagApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Creates a tag
     * Create Tag
     * @param tagBase 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async createTagPlacesTagsPost(tagBase: TagBase, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tagBase' is not null or undefined
        if (tagBase === null || tagBase === undefined) {
            throw new RequiredError("TagApi", "createTagPlacesTagsPost", "tagBase");
        }








        // Path Params
        const localVarPath = '/places/tags';

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
            ObjectSerializer.serialize(tagBase, "TagBase", ""),
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
     * Deletes the tag member with the given ID and returns True if successful
     * Delete Tag
     * @param tagUuid 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async deleteTagPlacesTagsTagUuidDelete(tagUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tagUuid' is not null or undefined
        if (tagUuid === null || tagUuid === undefined) {
            throw new RequiredError("TagApi", "deleteTagPlacesTagsTagUuidDelete", "tagUuid");
        }








        // Path Params
        const localVarPath = '/places/tags/{tag_uuid}'
            .replace('{' + 'tag_uuid' + '}', encodeURIComponent(String(tagUuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Gets the tag member information given the tag ID
     * Get Tag
     * @param tagUuid 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async getTagPlacesTagsTagUuidGet(tagUuid: string, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tagUuid' is not null or undefined
        if (tagUuid === null || tagUuid === undefined) {
            throw new RequiredError("TagApi", "getTagPlacesTagsTagUuidGet", "tagUuid");
        }








        // Path Params
        const localVarPath = '/places/tags/{tag_uuid}'
            .replace('{' + 'tag_uuid' + '}', encodeURIComponent(String(tagUuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
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


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * TODO Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      name                                **type:** string or None      meta                                **type:** dict or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * Search Tags
     * @param projectUuid 
     * @param name 
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
    public async searchTagsPlacesTagsGet(projectUuid?: string, name?: string, page?: number, pageSize?: number, sortOn?: string, sortDesc?: boolean, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;













        // Path Params
        const localVarPath = '/places/tags';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (projectUuid !== undefined) {
            requestContext.setQueryParam("project_uuid", ObjectSerializer.serialize(projectUuid, "string", ""));
        }

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
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
     * Update tag with given info, only updating the fields supplied. Tag Uuid must be sent however.
     * Update Tag
     * @param tagUuid 
     * @param tagBase 
     * @param xAccessToken 
     * @param xSecretToken 
     * @param authorization 
     * @param ehelplyActiveParticipant 
     * @param ehelplyProject 
     * @param ehelplyData 
     */
    public async updateTagPlacesTagsTagUuidPut(tagUuid: string, tagBase: TagBase, xAccessToken?: string, xSecretToken?: string, authorization?: string, ehelplyActiveParticipant?: string, ehelplyProject?: string, ehelplyData?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tagUuid' is not null or undefined
        if (tagUuid === null || tagUuid === undefined) {
            throw new RequiredError("TagApi", "updateTagPlacesTagsTagUuidPut", "tagUuid");
        }


        // verify required parameter 'tagBase' is not null or undefined
        if (tagBase === null || tagBase === undefined) {
            throw new RequiredError("TagApi", "updateTagPlacesTagsTagUuidPut", "tagBase");
        }








        // Path Params
        const localVarPath = '/places/tags/{tag_uuid}'
            .replace('{' + 'tag_uuid' + '}', encodeURIComponent(String(tagUuid)));

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
            ObjectSerializer.serialize(tagBase, "TagBase", ""),
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

export class TagApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTagPlacesTagsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createTagPlacesTagsPost(response: ResponseContext): Promise<TagDb > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TagDb = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TagDb", ""
            ) as TagDb;
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
            const body: TagDb = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TagDb", ""
            ) as TagDb;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteTagPlacesTagsTagUuidDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteTagPlacesTagsTagUuidDelete(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to getTagPlacesTagsTagUuidGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTagPlacesTagsTagUuidGet(response: ResponseContext): Promise<TagBase > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TagBase = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TagBase", ""
            ) as TagBase;
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
            const body: TagBase = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TagBase", ""
            ) as TagBase;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchTagsPlacesTagsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchTagsPlacesTagsGet(response: ResponseContext): Promise<Page > {
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
     * @params response Response returned by the server for a request to updateTagPlacesTagsTagUuidPut
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateTagPlacesTagsTagUuidPut(response: ResponseContext): Promise<TagBase > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TagBase = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TagBase", ""
            ) as TagBase;
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
            const body: TagBase = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TagBase", ""
            ) as TagBase;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
