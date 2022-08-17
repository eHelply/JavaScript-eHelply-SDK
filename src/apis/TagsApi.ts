/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.102
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.102
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  HTTPValidationError,
  Page,
  TagBase,
  TagDb,
} from '../models';
import {
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    PageFromJSON,
    PageToJSON,
    TagBaseFromJSON,
    TagBaseToJSON,
    TagDbFromJSON,
    TagDbToJSON,
} from '../models';

export interface CreateTagRequest {
    tagBase: TagBase;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface GetTagRequest {
    tagUuid: string;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface SearchTagRequest {
    projectUuid?: string;
    name?: string;
    page?: number;
    pageSize?: number;
    sortOn?: string;
    sortDesc?: boolean;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface UpdateTagRequest {
    tagUuid: string;
    tagBase: TagBase;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

/**
 * TagsApi - interface
 * 
 * @export
 * @interface TagsApiInterface
 */
export interface TagsApiInterface {
    /**
     * Creates a tag
     * @summary Createtag
     * @param {TagBase} tagBase 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApiInterface
     */
    createTagRaw(requestParameters: CreateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TagDb>>;

    /**
     * Creates a tag
     * Createtag
     */
    createTag(requestParameters: CreateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TagDb>;

    /**
     * Gets the tag member information given the tag ID
     * @summary Gettag
     * @param {string} tagUuid 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApiInterface
     */
    getTagRaw(requestParameters: GetTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TagBase>>;

    /**
     * Gets the tag member information given the tag ID
     * Gettag
     */
    getTag(requestParameters: GetTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TagBase>;

    /**
     * TODO Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      name                                **type:** string or None      meta                                **type:** dict or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * @summary Searchtag
     * @param {string} [projectUuid] 
     * @param {string} [name] 
     * @param {number} [page] 
     * @param {number} [pageSize] 
     * @param {string} [sortOn] 
     * @param {boolean} [sortDesc] 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApiInterface
     */
    searchTagRaw(requestParameters: SearchTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Page>>;

    /**
     * TODO Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      name                                **type:** string or None      meta                                **type:** dict or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * Searchtag
     */
    searchTag(requestParameters: SearchTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Page>;

    /**
     * Update tag with given info, only updating the fields supplied. Tag Uuid must be sent however.
     * @summary Updatetag
     * @param {string} tagUuid 
     * @param {TagBase} tagBase 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TagsApiInterface
     */
    updateTagRaw(requestParameters: UpdateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TagBase>>;

    /**
     * Update tag with given info, only updating the fields supplied. Tag Uuid must be sent however.
     * Updatetag
     */
    updateTag(requestParameters: UpdateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TagBase>;

}

/**
 * 
 */
export class TagsApi extends runtime.BaseAPI implements TagsApiInterface {

    /**
     * Creates a tag
     * Createtag
     */
    async createTagRaw(requestParameters: CreateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TagDb>> {
        if (requestParameters.tagBase === null || requestParameters.tagBase === undefined) {
            throw new runtime.RequiredError('tagBase','Required parameter requestParameters.tagBase was null or undefined when calling createTag.');
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
            path: `/places/tags`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TagBaseToJSON(requestParameters.tagBase),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TagDbFromJSON(jsonValue));
    }

    /**
     * Creates a tag
     * Createtag
     */
    async createTag(requestParameters: CreateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TagDb> {
        const response = await this.createTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets the tag member information given the tag ID
     * Gettag
     */
    async getTagRaw(requestParameters: GetTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TagBase>> {
        if (requestParameters.tagUuid === null || requestParameters.tagUuid === undefined) {
            throw new runtime.RequiredError('tagUuid','Required parameter requestParameters.tagUuid was null or undefined when calling getTag.');
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
            path: `/places/tags/{tag_uuid}`.replace(`{${"tag_uuid"}}`, encodeURIComponent(String(requestParameters.tagUuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TagBaseFromJSON(jsonValue));
    }

    /**
     * Gets the tag member information given the tag ID
     * Gettag
     */
    async getTag(requestParameters: GetTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TagBase> {
        const response = await this.getTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * TODO Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      name                                **type:** string or None      meta                                **type:** dict or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * Searchtag
     */
    async searchTagRaw(requestParameters: SearchTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Page>> {
        const queryParameters: any = {};

        if (requestParameters.projectUuid !== undefined) {
            queryParameters['project_uuid'] = requestParameters.projectUuid;
        }

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page_size'] = requestParameters.pageSize;
        }

        if (requestParameters.sortOn !== undefined) {
            queryParameters['sort_on'] = requestParameters.sortOn;
        }

        if (requestParameters.sortDesc !== undefined) {
            queryParameters['sort_desc'] = requestParameters.sortDesc;
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
            path: `/places/tags`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PageFromJSON(jsonValue));
    }

    /**
     * TODO Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      name                                **type:** string or None      meta                                **type:** dict or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * Searchtag
     */
    async searchTag(requestParameters: SearchTagRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Page> {
        const response = await this.searchTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update tag with given info, only updating the fields supplied. Tag Uuid must be sent however.
     * Updatetag
     */
    async updateTagRaw(requestParameters: UpdateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<TagBase>> {
        if (requestParameters.tagUuid === null || requestParameters.tagUuid === undefined) {
            throw new runtime.RequiredError('tagUuid','Required parameter requestParameters.tagUuid was null or undefined when calling updateTag.');
        }

        if (requestParameters.tagBase === null || requestParameters.tagBase === undefined) {
            throw new runtime.RequiredError('tagBase','Required parameter requestParameters.tagBase was null or undefined when calling updateTag.');
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
            path: `/places/tags/{tag_uuid}`.replace(`{${"tag_uuid"}}`, encodeURIComponent(String(requestParameters.tagUuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TagBaseToJSON(requestParameters.tagBase),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TagBaseFromJSON(jsonValue));
    }

    /**
     * Update tag with given info, only updating the fields supplied. Tag Uuid must be sent however.
     * Updatetag
     */
    async updateTag(requestParameters: UpdateTagRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<TagBase> {
        const response = await this.updateTagRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
