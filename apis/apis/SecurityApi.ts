// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { BodyCreateKeySecurityKeysPost } from '..models/models/BodyCreateKeySecurityKeysPost';
import { BodyGenerateTokenSecurityTokensPost } from '..models/models/BodyGenerateTokenSecurityTokensPost';
import { BodyVerifyKeySecurityKeysVerifyPost } from '..models/models/BodyVerifyKeySecurityKeysVerifyPost';
import { HTTPValidationError } from '..models/models/HTTPValidationError';
import { InlineResponse2006 } from '..models/models/InlineResponse2006';
import { InlineResponse2007 } from '..models/models/InlineResponse2007';
import { InlineResponse2008 } from '..models/models/InlineResponse2008';
import { InlineResponse403 } from '..models/models/InlineResponse403';
import { SecurityEncryptionKeyGet } from '..models/models/SecurityEncryptionKeyGet';
import { SecurityKeyGet } from '..models/models/SecurityKeyGet';

/**
 * no description
 */
export class SecurityApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create Encryption Key
     * @param category 
     * @param ehelplySecuritySecretKey 
     */
    public async createEncryptionKeySecurityEncryptionCategoriesCategoryKeysPost(category: string, ehelplySecuritySecretKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'category' is not null or undefined
        if (category === null || category === undefined) {
            throw new RequiredError("SecurityApi", "createEncryptionKeySecurityEncryptionCategoriesCategoryKeysPost", "category");
        }



        // Path Params
        const localVarPath = '/sam/security/encryption/categories/{category}/keys'
            .replace('{' + 'category' + '}', encodeURIComponent(String(category)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("ehelply-security-secret-key", ObjectSerializer.serialize(ehelplySecuritySecretKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create Key
     * @param bodyCreateKeySecurityKeysPost 
     * @param accessLength 
     * @param secretLength 
     */
    public async createKeySecurityKeysPost(bodyCreateKeySecurityKeysPost: BodyCreateKeySecurityKeysPost, accessLength?: number, secretLength?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bodyCreateKeySecurityKeysPost' is not null or undefined
        if (bodyCreateKeySecurityKeysPost === null || bodyCreateKeySecurityKeysPost === undefined) {
            throw new RequiredError("SecurityApi", "createKeySecurityKeysPost", "bodyCreateKeySecurityKeysPost");
        }




        // Path Params
        const localVarPath = '/sam/security/keys';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (accessLength !== undefined) {
            requestContext.setQueryParam("access_length", ObjectSerializer.serialize(accessLength, "number", ""));
        }

        // Query Params
        if (secretLength !== undefined) {
            requestContext.setQueryParam("secret_length", ObjectSerializer.serialize(secretLength, "number", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bodyCreateKeySecurityKeysPost, "BodyCreateKeySecurityKeysPost", ""),
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
     * Delete Key
     * @param keyUuid 
     */
    public async deleteKeySecurityKeysKeyUuidDelete(keyUuid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'keyUuid' is not null or undefined
        if (keyUuid === null || keyUuid === undefined) {
            throw new RequiredError("SecurityApi", "deleteKeySecurityKeysKeyUuidDelete", "keyUuid");
        }


        // Path Params
        const localVarPath = '/sam/security/keys/{key_uuid}'
            .replace('{' + 'key_uuid' + '}', encodeURIComponent(String(keyUuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Generate Token
     * @param bodyGenerateTokenSecurityTokensPost 
     */
    public async generateTokenSecurityTokensPost(bodyGenerateTokenSecurityTokensPost: BodyGenerateTokenSecurityTokensPost, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bodyGenerateTokenSecurityTokensPost' is not null or undefined
        if (bodyGenerateTokenSecurityTokensPost === null || bodyGenerateTokenSecurityTokensPost === undefined) {
            throw new RequiredError("SecurityApi", "generateTokenSecurityTokensPost", "bodyGenerateTokenSecurityTokensPost");
        }


        // Path Params
        const localVarPath = '/sam/security/tokens';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bodyGenerateTokenSecurityTokensPost, "BodyGenerateTokenSecurityTokensPost", ""),
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
     * Get Encryption Key
     * @param category 
     * @param ehelplySecuritySecretKey 
     */
    public async getEncryptionKeySecurityEncryptionCategoriesCategoryKeysGet(category: string, ehelplySecuritySecretKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'category' is not null or undefined
        if (category === null || category === undefined) {
            throw new RequiredError("SecurityApi", "getEncryptionKeySecurityEncryptionCategoriesCategoryKeysGet", "category");
        }



        // Path Params
        const localVarPath = '/sam/security/encryption/categories/{category}/keys'
            .replace('{' + 'category' + '}', encodeURIComponent(String(category)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("ehelply-security-secret-key", ObjectSerializer.serialize(ehelplySecuritySecretKey, "string", ""));


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get Key
     * @param keyUuid 
     */
    public async getKeySecurityKeysKeyUuidGet(keyUuid: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'keyUuid' is not null or undefined
        if (keyUuid === null || keyUuid === undefined) {
            throw new RequiredError("SecurityApi", "getKeySecurityKeysKeyUuidGet", "keyUuid");
        }


        // Path Params
        const localVarPath = '/sam/security/keys/{key_uuid}'
            .replace('{' + 'key_uuid' + '}', encodeURIComponent(String(keyUuid)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Search Keys
     */
    public async searchKeysSecurityKeysGet(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/sam/security/keys';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Verify Key
     * @param bodyVerifyKeySecurityKeysVerifyPost 
     */
    public async verifyKeySecurityKeysVerifyPost(bodyVerifyKeySecurityKeysVerifyPost: BodyVerifyKeySecurityKeysVerifyPost, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'bodyVerifyKeySecurityKeysVerifyPost' is not null or undefined
        if (bodyVerifyKeySecurityKeysVerifyPost === null || bodyVerifyKeySecurityKeysVerifyPost === undefined) {
            throw new RequiredError("SecurityApi", "verifyKeySecurityKeysVerifyPost", "bodyVerifyKeySecurityKeysVerifyPost");
        }


        // Path Params
        const localVarPath = '/sam/security/keys/verify';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(bodyVerifyKeySecurityKeysVerifyPost, "BodyVerifyKeySecurityKeysVerifyPost", ""),
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

export class SecurityApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createEncryptionKeySecurityEncryptionCategoriesCategoryKeysPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createEncryptionKeySecurityEncryptionCategoriesCategoryKeysPost(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to createKeySecurityKeysPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createKeySecurityKeysPost(response: ResponseContext): Promise<InlineResponse2007 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2007 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2007", ""
            ) as InlineResponse2007;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: InlineResponse403 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse403", ""
            ) as InlineResponse403;
            throw new ApiException<InlineResponse403>(400, "Access token and secret token lengths must be greater than 48 characters and less than 1024 characters to guarantee adequate security. ", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineResponse403 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse403", ""
            ) as InlineResponse403;
            throw new ApiException<InlineResponse403>(403, "Unauthorized - Denied by eHelply", body, response.headers);
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
            const body: InlineResponse2007 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2007", ""
            ) as InlineResponse2007;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteKeySecurityKeysKeyUuidDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteKeySecurityKeysKeyUuidDelete(response: ResponseContext): Promise<InlineResponse2008 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2008 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2008", ""
            ) as InlineResponse2008;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineResponse403 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse403", ""
            ) as InlineResponse403;
            throw new ApiException<InlineResponse403>(403, "Unauthorized - Denied by eHelply", body, response.headers);
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
            const body: InlineResponse2008 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2008", ""
            ) as InlineResponse2008;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateTokenSecurityTokensPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async generateTokenSecurityTokensPost(response: ResponseContext): Promise<InlineResponse2006 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2006 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2006", ""
            ) as InlineResponse2006;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineResponse403 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse403", ""
            ) as InlineResponse403;
            throw new ApiException<InlineResponse403>(403, "Unauthorized - Denied by eHelply", body, response.headers);
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
            const body: InlineResponse2006 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2006", ""
            ) as InlineResponse2006;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEncryptionKeySecurityEncryptionCategoriesCategoryKeysGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEncryptionKeySecurityEncryptionCategoriesCategoryKeysGet(response: ResponseContext): Promise<Array<SecurityEncryptionKeyGet> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<SecurityEncryptionKeyGet> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<SecurityEncryptionKeyGet>", ""
            ) as Array<SecurityEncryptionKeyGet>;
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
            const body: Array<SecurityEncryptionKeyGet> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<SecurityEncryptionKeyGet>", ""
            ) as Array<SecurityEncryptionKeyGet>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getKeySecurityKeysKeyUuidGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getKeySecurityKeysKeyUuidGet(response: ResponseContext): Promise<SecurityKeyGet > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SecurityKeyGet = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecurityKeyGet", ""
            ) as SecurityKeyGet;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineResponse403 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse403", ""
            ) as InlineResponse403;
            throw new ApiException<InlineResponse403>(403, "Unauthorized - Denied by eHelply", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            const body: InlineResponse403 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse403", ""
            ) as InlineResponse403;
            throw new ApiException<InlineResponse403>(404, "Key does not exist", body, response.headers);
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
            const body: SecurityKeyGet = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecurityKeyGet", ""
            ) as SecurityKeyGet;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to searchKeysSecurityKeysGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchKeysSecurityKeysGet(response: ResponseContext): Promise<Array<SecurityKeyGet> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<SecurityKeyGet> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<SecurityKeyGet>", ""
            ) as Array<SecurityKeyGet>;
            return body;
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineResponse403 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse403", ""
            ) as InlineResponse403;
            throw new ApiException<InlineResponse403>(403, "Unauthorized - Denied by eHelply", body, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Not found", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<SecurityKeyGet> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<SecurityKeyGet>", ""
            ) as Array<SecurityKeyGet>;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to verifyKeySecurityKeysVerifyPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async verifyKeySecurityKeysVerifyPost(response: ResponseContext): Promise<SecurityKeyGet > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SecurityKeyGet = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecurityKeyGet", ""
            ) as SecurityKeyGet;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: InlineResponse403 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse403", ""
            ) as InlineResponse403;
            throw new ApiException<InlineResponse403>(400, "Access token and secret token lengths must be greater than 48 characters and less than 1024 characters to guarantee adequate security. ", body, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            const body: InlineResponse403 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse403", ""
            ) as InlineResponse403;
            throw new ApiException<InlineResponse403>(403, "Key", body, response.headers);
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
            const body: SecurityKeyGet = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SecurityKeyGet", ""
            ) as SecurityKeyGet;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
