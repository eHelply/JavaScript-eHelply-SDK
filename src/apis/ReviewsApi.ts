/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.98
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.98
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CreateReview,
  HTTPValidationError,
  UpdateReview,
} from '../models';
import {
    CreateReviewFromJSON,
    CreateReviewToJSON,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    UpdateReviewFromJSON,
    UpdateReviewToJSON,
} from '../models';

export interface CreateReviewRequest {
    entityType: string;
    entityUuid: string;
    createReview: CreateReview;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface DeleteReviewRequest {
    entityType: string;
    entityUuid: string;
    reviewUuid: string;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface GetReviewRequest {
    entityType: string;
    entityUuid: string;
    reviewUuid: string;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface SearchReviewsRequest {
    entityType: string;
    entityUuid: string;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface UpdateReviewRequest {
    entityType: string;
    entityUuid: string;
    reviewUuid: string;
    updateReview: UpdateReview;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

/**
 * ReviewsApi - interface
 * 
 * @export
 * @interface ReviewsApiInterface
 */
export interface ReviewsApiInterface {
    /**
     * 
     * @summary Create
     * @param {string} entityType 
     * @param {string} entityUuid 
     * @param {CreateReview} createReview 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReviewsApiInterface
     */
    createReviewRaw(requestParameters: CreateReviewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;

    /**
     * Create
     */
    createReview(requestParameters: CreateReviewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;

    /**
     * 
     * @summary Deletereview
     * @param {string} entityType 
     * @param {string} entityUuid 
     * @param {string} reviewUuid 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReviewsApiInterface
     */
    deleteReviewRaw(requestParameters: DeleteReviewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;

    /**
     * Deletereview
     */
    deleteReview(requestParameters: DeleteReviewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;

    /**
     * 
     * @summary Getreview
     * @param {string} entityType 
     * @param {string} entityUuid 
     * @param {string} reviewUuid 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReviewsApiInterface
     */
    getReviewRaw(requestParameters: GetReviewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;

    /**
     * Getreview
     */
    getReview(requestParameters: GetReviewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;

    /**
     * 
     * @summary Searchreview
     * @param {string} entityType 
     * @param {string} entityUuid 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReviewsApiInterface
     */
    searchReviewsRaw(requestParameters: SearchReviewsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;

    /**
     * Searchreview
     */
    searchReviews(requestParameters: SearchReviewsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;

    /**
     * 
     * @summary Updatereview
     * @param {string} entityType 
     * @param {string} entityUuid 
     * @param {string} reviewUuid 
     * @param {UpdateReview} updateReview 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReviewsApiInterface
     */
    updateReviewRaw(requestParameters: UpdateReviewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;

    /**
     * Updatereview
     */
    updateReview(requestParameters: UpdateReviewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;

}

/**
 * 
 */
export class ReviewsApi extends runtime.BaseAPI implements ReviewsApiInterface {

    /**
     * Create
     */
    async createReviewRaw(requestParameters: CreateReviewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.entityType === null || requestParameters.entityType === undefined) {
            throw new runtime.RequiredError('entityType','Required parameter requestParameters.entityType was null or undefined when calling createReview.');
        }

        if (requestParameters.entityUuid === null || requestParameters.entityUuid === undefined) {
            throw new runtime.RequiredError('entityUuid','Required parameter requestParameters.entityUuid was null or undefined when calling createReview.');
        }

        if (requestParameters.createReview === null || requestParameters.createReview === undefined) {
            throw new runtime.RequiredError('createReview','Required parameter requestParameters.createReview was null or undefined when calling createReview.');
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
            path: `/products/reviews/types/{entity_type}/entities/{entity_uuid}`.replace(`{${"entity_type"}}`, encodeURIComponent(String(requestParameters.entityType))).replace(`{${"entity_uuid"}}`, encodeURIComponent(String(requestParameters.entityUuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateReviewToJSON(requestParameters.createReview),
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Create
     */
    async createReview(requestParameters: CreateReviewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.createReviewRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletereview
     */
    async deleteReviewRaw(requestParameters: DeleteReviewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.entityType === null || requestParameters.entityType === undefined) {
            throw new runtime.RequiredError('entityType','Required parameter requestParameters.entityType was null or undefined when calling deleteReview.');
        }

        if (requestParameters.entityUuid === null || requestParameters.entityUuid === undefined) {
            throw new runtime.RequiredError('entityUuid','Required parameter requestParameters.entityUuid was null or undefined when calling deleteReview.');
        }

        if (requestParameters.reviewUuid === null || requestParameters.reviewUuid === undefined) {
            throw new runtime.RequiredError('reviewUuid','Required parameter requestParameters.reviewUuid was null or undefined when calling deleteReview.');
        }

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
            path: `/products/reviews/types/{entity_type}/entities/{entity_uuid}/reviews/{review_uuid}`.replace(`{${"entity_type"}}`, encodeURIComponent(String(requestParameters.entityType))).replace(`{${"entity_uuid"}}`, encodeURIComponent(String(requestParameters.entityUuid))).replace(`{${"review_uuid"}}`, encodeURIComponent(String(requestParameters.reviewUuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Deletereview
     */
    async deleteReview(requestParameters: DeleteReviewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.deleteReviewRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Getreview
     */
    async getReviewRaw(requestParameters: GetReviewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.entityType === null || requestParameters.entityType === undefined) {
            throw new runtime.RequiredError('entityType','Required parameter requestParameters.entityType was null or undefined when calling getReview.');
        }

        if (requestParameters.entityUuid === null || requestParameters.entityUuid === undefined) {
            throw new runtime.RequiredError('entityUuid','Required parameter requestParameters.entityUuid was null or undefined when calling getReview.');
        }

        if (requestParameters.reviewUuid === null || requestParameters.reviewUuid === undefined) {
            throw new runtime.RequiredError('reviewUuid','Required parameter requestParameters.reviewUuid was null or undefined when calling getReview.');
        }

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
            path: `/products/reviews/types/{entity_type}/entities/{entity_uuid}/reviews/{review_uuid}`.replace(`{${"entity_type"}}`, encodeURIComponent(String(requestParameters.entityType))).replace(`{${"entity_uuid"}}`, encodeURIComponent(String(requestParameters.entityUuid))).replace(`{${"review_uuid"}}`, encodeURIComponent(String(requestParameters.reviewUuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Getreview
     */
    async getReview(requestParameters: GetReviewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.getReviewRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Searchreview
     */
    async searchReviewsRaw(requestParameters: SearchReviewsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.entityType === null || requestParameters.entityType === undefined) {
            throw new runtime.RequiredError('entityType','Required parameter requestParameters.entityType was null or undefined when calling searchReviews.');
        }

        if (requestParameters.entityUuid === null || requestParameters.entityUuid === undefined) {
            throw new runtime.RequiredError('entityUuid','Required parameter requestParameters.entityUuid was null or undefined when calling searchReviews.');
        }

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
            path: `/products/reviews/types/{entity_type}/entities/{entity_uuid}`.replace(`{${"entity_type"}}`, encodeURIComponent(String(requestParameters.entityType))).replace(`{${"entity_uuid"}}`, encodeURIComponent(String(requestParameters.entityUuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Searchreview
     */
    async searchReviews(requestParameters: SearchReviewsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.searchReviewsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updatereview
     */
    async updateReviewRaw(requestParameters: UpdateReviewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.entityType === null || requestParameters.entityType === undefined) {
            throw new runtime.RequiredError('entityType','Required parameter requestParameters.entityType was null or undefined when calling updateReview.');
        }

        if (requestParameters.entityUuid === null || requestParameters.entityUuid === undefined) {
            throw new runtime.RequiredError('entityUuid','Required parameter requestParameters.entityUuid was null or undefined when calling updateReview.');
        }

        if (requestParameters.reviewUuid === null || requestParameters.reviewUuid === undefined) {
            throw new runtime.RequiredError('reviewUuid','Required parameter requestParameters.reviewUuid was null or undefined when calling updateReview.');
        }

        if (requestParameters.updateReview === null || requestParameters.updateReview === undefined) {
            throw new runtime.RequiredError('updateReview','Required parameter requestParameters.updateReview was null or undefined when calling updateReview.');
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
            path: `/products/reviews/types/{entity_type}/entities/{entity_uuid}/reviews/{review_uuid}`.replace(`{${"entity_type"}}`, encodeURIComponent(String(requestParameters.entityType))).replace(`{${"entity_uuid"}}`, encodeURIComponent(String(requestParameters.entityUuid))).replace(`{${"review_uuid"}}`, encodeURIComponent(String(requestParameters.reviewUuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateReviewToJSON(requestParameters.updateReview),
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Updatereview
     */
    async updateReview(requestParameters: UpdateReviewRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.updateReviewRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
