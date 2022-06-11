/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.75
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.75
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
    InlineResponse403,
    InlineResponse403FromJSON,
    InlineResponse403ToJSON,
    ResponseCreatekey,
    ResponseCreatekeyFromJSON,
    ResponseCreatekeyToJSON,
    ResponseDeletekey,
    ResponseDeletekeyFromJSON,
    ResponseDeletekeyToJSON,
    ResponseGeneratetoken,
    ResponseGeneratetokenFromJSON,
    ResponseGeneratetokenToJSON,
    SecurityCreateToken,
    SecurityCreateTokenFromJSON,
    SecurityCreateTokenToJSON,
    SecurityEncryptionKeyGet,
    SecurityEncryptionKeyGetFromJSON,
    SecurityEncryptionKeyGetToJSON,
    SecurityEncryptionKeyResponse,
    SecurityEncryptionKeyResponseFromJSON,
    SecurityEncryptionKeyResponseToJSON,
    SecurityKeyCreate,
    SecurityKeyCreateFromJSON,
    SecurityKeyCreateToJSON,
    SecurityKeyGet,
    SecurityKeyGetFromJSON,
    SecurityKeyGetToJSON,
    SecurityKeyVerify,
    SecurityKeyVerifyFromJSON,
    SecurityKeyVerifyToJSON,
} from '../models';

export interface CreateEncryptionKeyRequest {
    category: string;
    ehelplySecuritySecretKey?: string;
}

export interface CreateKeyRequest {
    securityKeyCreate: SecurityKeyCreate;
    accessLength?: number;
    secretLength?: number;
}

export interface DeleteKeyRequest {
    keyUuid: string;
}

export interface GenerateTokenRequest {
    securityCreateToken: SecurityCreateToken;
}

export interface GetEncryptionKeyRequest {
    category: string;
    ehelplySecuritySecretKey?: string;
}

export interface GetKeyRequest {
    keyUuid: string;
}

export interface VerifyKeyRequest {
    securityKeyVerify: SecurityKeyVerify;
}

/**
 * SecurityApi - interface
 * 
 * @export
 * @interface SecurityApiInterface
 */
export interface SecurityApiInterface {
    /**
     * 
     * @summary Createencryptionkey
     * @param {string} category 
     * @param {string} [ehelplySecuritySecretKey] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApiInterface
     */
    createEncryptionKeyRaw(requestParameters: CreateEncryptionKeyRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SecurityEncryptionKeyResponse>>;

    /**
     * Createencryptionkey
     */
    createEncryptionKey(requestParameters: CreateEncryptionKeyRequest, initOverrides?: RequestInit): Promise<SecurityEncryptionKeyResponse>;

    /**
     * 
     * @summary Createkey
     * @param {SecurityKeyCreate} securityKeyCreate 
     * @param {number} [accessLength] 
     * @param {number} [secretLength] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApiInterface
     */
    createKeyRaw(requestParameters: CreateKeyRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ResponseCreatekey>>;

    /**
     * Createkey
     */
    createKey(requestParameters: CreateKeyRequest, initOverrides?: RequestInit): Promise<ResponseCreatekey>;

    /**
     * 
     * @summary Deletekey
     * @param {string} keyUuid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApiInterface
     */
    deleteKeyRaw(requestParameters: DeleteKeyRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ResponseDeletekey>>;

    /**
     * Deletekey
     */
    deleteKey(requestParameters: DeleteKeyRequest, initOverrides?: RequestInit): Promise<ResponseDeletekey>;

    /**
     * 
     * @summary Generatetoken
     * @param {SecurityCreateToken} securityCreateToken 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApiInterface
     */
    generateTokenRaw(requestParameters: GenerateTokenRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ResponseGeneratetoken>>;

    /**
     * Generatetoken
     */
    generateToken(requestParameters: GenerateTokenRequest, initOverrides?: RequestInit): Promise<ResponseGeneratetoken>;

    /**
     * 
     * @summary Getencryptionkey
     * @param {string} category 
     * @param {string} [ehelplySecuritySecretKey] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApiInterface
     */
    getEncryptionKeyRaw(requestParameters: GetEncryptionKeyRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<SecurityEncryptionKeyGet>>>;

    /**
     * Getencryptionkey
     */
    getEncryptionKey(requestParameters: GetEncryptionKeyRequest, initOverrides?: RequestInit): Promise<Array<SecurityEncryptionKeyGet>>;

    /**
     * 
     * @summary Getkey
     * @param {string} keyUuid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApiInterface
     */
    getKeyRaw(requestParameters: GetKeyRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SecurityKeyGet>>;

    /**
     * Getkey
     */
    getKey(requestParameters: GetKeyRequest, initOverrides?: RequestInit): Promise<SecurityKeyGet>;

    /**
     * 
     * @summary Searchkeys
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApiInterface
     */
    searchKeysRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<SecurityKeyGet>>>;

    /**
     * Searchkeys
     */
    searchKeys(initOverrides?: RequestInit): Promise<Array<SecurityKeyGet>>;

    /**
     * 
     * @summary Verifykey
     * @param {SecurityKeyVerify} securityKeyVerify 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SecurityApiInterface
     */
    verifyKeyRaw(requestParameters: VerifyKeyRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SecurityKeyGet>>;

    /**
     * Verifykey
     */
    verifyKey(requestParameters: VerifyKeyRequest, initOverrides?: RequestInit): Promise<SecurityKeyGet>;

}

/**
 * 
 */
export class SecurityApi extends runtime.BaseAPI implements SecurityApiInterface {

    /**
     * Createencryptionkey
     */
    async createEncryptionKeyRaw(requestParameters: CreateEncryptionKeyRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SecurityEncryptionKeyResponse>> {
        if (requestParameters.category === null || requestParameters.category === undefined) {
            throw new runtime.RequiredError('category','Required parameter requestParameters.category was null or undefined when calling createEncryptionKey.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.ehelplySecuritySecretKey !== undefined && requestParameters.ehelplySecuritySecretKey !== null) {
            headerParameters['ehelply-security-secret-key'] = String(requestParameters.ehelplySecuritySecretKey);
        }

        const response = await this.request({
            path: `/sam/security/encryption/categories/{category}/keys`.replace(`{${"category"}}`, encodeURIComponent(String(requestParameters.category))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SecurityEncryptionKeyResponseFromJSON(jsonValue));
    }

    /**
     * Createencryptionkey
     */
    async createEncryptionKey(requestParameters: CreateEncryptionKeyRequest, initOverrides?: RequestInit): Promise<SecurityEncryptionKeyResponse> {
        const response = await this.createEncryptionKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Createkey
     */
    async createKeyRaw(requestParameters: CreateKeyRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ResponseCreatekey>> {
        if (requestParameters.securityKeyCreate === null || requestParameters.securityKeyCreate === undefined) {
            throw new runtime.RequiredError('securityKeyCreate','Required parameter requestParameters.securityKeyCreate was null or undefined when calling createKey.');
        }

        const queryParameters: any = {};

        if (requestParameters.accessLength !== undefined) {
            queryParameters['access_length'] = requestParameters.accessLength;
        }

        if (requestParameters.secretLength !== undefined) {
            queryParameters['secret_length'] = requestParameters.secretLength;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/sam/security/keys`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SecurityKeyCreateToJSON(requestParameters.securityKeyCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponseCreatekeyFromJSON(jsonValue));
    }

    /**
     * Createkey
     */
    async createKey(requestParameters: CreateKeyRequest, initOverrides?: RequestInit): Promise<ResponseCreatekey> {
        const response = await this.createKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletekey
     */
    async deleteKeyRaw(requestParameters: DeleteKeyRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ResponseDeletekey>> {
        if (requestParameters.keyUuid === null || requestParameters.keyUuid === undefined) {
            throw new runtime.RequiredError('keyUuid','Required parameter requestParameters.keyUuid was null or undefined when calling deleteKey.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/sam/security/keys/{key_uuid}`.replace(`{${"key_uuid"}}`, encodeURIComponent(String(requestParameters.keyUuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponseDeletekeyFromJSON(jsonValue));
    }

    /**
     * Deletekey
     */
    async deleteKey(requestParameters: DeleteKeyRequest, initOverrides?: RequestInit): Promise<ResponseDeletekey> {
        const response = await this.deleteKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Generatetoken
     */
    async generateTokenRaw(requestParameters: GenerateTokenRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ResponseGeneratetoken>> {
        if (requestParameters.securityCreateToken === null || requestParameters.securityCreateToken === undefined) {
            throw new runtime.RequiredError('securityCreateToken','Required parameter requestParameters.securityCreateToken was null or undefined when calling generateToken.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/sam/security/tokens`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SecurityCreateTokenToJSON(requestParameters.securityCreateToken),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ResponseGeneratetokenFromJSON(jsonValue));
    }

    /**
     * Generatetoken
     */
    async generateToken(requestParameters: GenerateTokenRequest, initOverrides?: RequestInit): Promise<ResponseGeneratetoken> {
        const response = await this.generateTokenRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Getencryptionkey
     */
    async getEncryptionKeyRaw(requestParameters: GetEncryptionKeyRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<SecurityEncryptionKeyGet>>> {
        if (requestParameters.category === null || requestParameters.category === undefined) {
            throw new runtime.RequiredError('category','Required parameter requestParameters.category was null or undefined when calling getEncryptionKey.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.ehelplySecuritySecretKey !== undefined && requestParameters.ehelplySecuritySecretKey !== null) {
            headerParameters['ehelply-security-secret-key'] = String(requestParameters.ehelplySecuritySecretKey);
        }

        const response = await this.request({
            path: `/sam/security/encryption/categories/{category}/keys`.replace(`{${"category"}}`, encodeURIComponent(String(requestParameters.category))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SecurityEncryptionKeyGetFromJSON));
    }

    /**
     * Getencryptionkey
     */
    async getEncryptionKey(requestParameters: GetEncryptionKeyRequest, initOverrides?: RequestInit): Promise<Array<SecurityEncryptionKeyGet>> {
        const response = await this.getEncryptionKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Getkey
     */
    async getKeyRaw(requestParameters: GetKeyRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SecurityKeyGet>> {
        if (requestParameters.keyUuid === null || requestParameters.keyUuid === undefined) {
            throw new runtime.RequiredError('keyUuid','Required parameter requestParameters.keyUuid was null or undefined when calling getKey.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/sam/security/keys/{key_uuid}`.replace(`{${"key_uuid"}}`, encodeURIComponent(String(requestParameters.keyUuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SecurityKeyGetFromJSON(jsonValue));
    }

    /**
     * Getkey
     */
    async getKey(requestParameters: GetKeyRequest, initOverrides?: RequestInit): Promise<SecurityKeyGet> {
        const response = await this.getKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Searchkeys
     */
    async searchKeysRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<SecurityKeyGet>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/sam/security/keys`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(SecurityKeyGetFromJSON));
    }

    /**
     * Searchkeys
     */
    async searchKeys(initOverrides?: RequestInit): Promise<Array<SecurityKeyGet>> {
        const response = await this.searchKeysRaw(initOverrides);
        return await response.value();
    }

    /**
     * Verifykey
     */
    async verifyKeyRaw(requestParameters: VerifyKeyRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SecurityKeyGet>> {
        if (requestParameters.securityKeyVerify === null || requestParameters.securityKeyVerify === undefined) {
            throw new runtime.RequiredError('securityKeyVerify','Required parameter requestParameters.securityKeyVerify was null or undefined when calling verifyKey.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/sam/security/keys/verify`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SecurityKeyVerifyToJSON(requestParameters.securityKeyVerify),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SecurityKeyGetFromJSON(jsonValue));
    }

    /**
     * Verifykey
     */
    async verifyKey(requestParameters: VerifyKeyRequest, initOverrides?: RequestInit): Promise<SecurityKeyGet> {
        const response = await this.verifyKeyRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
