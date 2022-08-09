/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.101
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.101
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  CompanyBase,
  CompanyResponse,
  HTTPValidationError,
  Page,
} from '../models';
import {
    CompanyBaseFromJSON,
    CompanyBaseToJSON,
    CompanyResponseFromJSON,
    CompanyResponseToJSON,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    PageFromJSON,
    PageToJSON,
} from '../models';

export interface CreateCompanyPlacesCompaniesPostRequest {
    companyBase: CompanyBase;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface DeletePlacePlacesCompaniesCompanyUuidDeleteRequest {
    companyUuid: string;
    softDelete?: boolean;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface GetCompanyPlacesCompaniesCompanyUuidGetRequest {
    companyUuid: string;
    withMeta?: boolean;
    withCatalog?: boolean;
    withReviews?: boolean;
    withSchedule?: boolean;
    withBlog?: boolean;
    withTags?: boolean;
    withCategories?: boolean;
    withPlaces?: boolean;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface SearchCompaniesPlacesCompaniesGetRequest {
    projectUuid?: string;
    name?: string;
    email?: string;
    isPublic?: boolean;
    isDeleted?: boolean;
    withPlaces?: boolean;
    withMeta?: boolean;
    withCatalog?: boolean;
    withReviews?: boolean;
    withSchedule?: boolean;
    withBlog?: boolean;
    withTags?: boolean;
    withCategories?: boolean;
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

export interface UpdateCompanyPlacesCompaniesCompanyUuidPutRequest {
    companyUuid: string;
    companyBase: CompanyBase;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

/**
 * CompaniesApi - interface
 * 
 * @export
 * @interface CompaniesApiInterface
 */
export interface CompaniesApiInterface {
    /**
     * Creates a company
     * @summary Create Company
     * @param {CompanyBase} companyBase 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApiInterface
     */
    createCompanyPlacesCompaniesPostRaw(requestParameters: CreateCompanyPlacesCompaniesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CompanyResponse>>;

    /**
     * Creates a company
     * Create Company
     */
    createCompanyPlacesCompaniesPost(requestParameters: CreateCompanyPlacesCompaniesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CompanyResponse>;

    /**
     * Deletes the company with the given ID and returns True if successful
     * @summary Delete Place
     * @param {string} companyUuid 
     * @param {boolean} [softDelete] 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApiInterface
     */
    deletePlacePlacesCompaniesCompanyUuidDeleteRaw(requestParameters: DeletePlacePlacesCompaniesCompanyUuidDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;

    /**
     * Deletes the company with the given ID and returns True if successful
     * Delete Place
     */
    deletePlacePlacesCompaniesCompanyUuidDelete(requestParameters: DeletePlacePlacesCompaniesCompanyUuidDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;

    /**
     * Gets the company information given the Place ID
     * @summary Get Company
     * @param {string} companyUuid 
     * @param {boolean} [withMeta] 
     * @param {boolean} [withCatalog] 
     * @param {boolean} [withReviews] 
     * @param {boolean} [withSchedule] 
     * @param {boolean} [withBlog] 
     * @param {boolean} [withTags] 
     * @param {boolean} [withCategories] 
     * @param {boolean} [withPlaces] 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApiInterface
     */
    getCompanyPlacesCompaniesCompanyUuidGetRaw(requestParameters: GetCompanyPlacesCompaniesCompanyUuidGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CompanyResponse>>;

    /**
     * Gets the company information given the Place ID
     * Get Company
     */
    getCompanyPlacesCompaniesCompanyUuidGet(requestParameters: GetCompanyPlacesCompaniesCompanyUuidGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CompanyResponse>;

    /**
     * Search all companies and returns paginated results with Companies being stored in items field. Can search by `project_uuid, name, email` string fields or the `is_public and is_deleted` boolean fields. To search with these fields use query params with string values. For sorting fill out \"sort_desc\" field with either true/false and the \"sort_on\" query parameter with column you want to sort on (ex: name). Max pagination items per page is 50. Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      meta_uuid                           **type:** string or None      catalog_data                        **type:** dict or None      review_group_data                   **type:** dict or None      schedule_data                       **type:** dict or None      blog_data                           **type:** dict or None      tags                                **type:** [TagBase] or None      categories                          **type:** [CategoryBase] or None      places                              **type:** PlaceBase or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * @summary Search Companies
     * @param {string} [projectUuid] 
     * @param {string} [name] 
     * @param {string} [email] 
     * @param {boolean} [isPublic] 
     * @param {boolean} [isDeleted] 
     * @param {boolean} [withPlaces] 
     * @param {boolean} [withMeta] 
     * @param {boolean} [withCatalog] 
     * @param {boolean} [withReviews] 
     * @param {boolean} [withSchedule] 
     * @param {boolean} [withBlog] 
     * @param {boolean} [withTags] 
     * @param {boolean} [withCategories] 
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
     * @memberof CompaniesApiInterface
     */
    searchCompaniesPlacesCompaniesGetRaw(requestParameters: SearchCompaniesPlacesCompaniesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Page>>;

    /**
     * Search all companies and returns paginated results with Companies being stored in items field. Can search by `project_uuid, name, email` string fields or the `is_public and is_deleted` boolean fields. To search with these fields use query params with string values. For sorting fill out \"sort_desc\" field with either true/false and the \"sort_on\" query parameter with column you want to sort on (ex: name). Max pagination items per page is 50. Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      meta_uuid                           **type:** string or None      catalog_data                        **type:** dict or None      review_group_data                   **type:** dict or None      schedule_data                       **type:** dict or None      blog_data                           **type:** dict or None      tags                                **type:** [TagBase] or None      categories                          **type:** [CategoryBase] or None      places                              **type:** PlaceBase or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * Search Companies
     */
    searchCompaniesPlacesCompaniesGet(requestParameters: SearchCompaniesPlacesCompaniesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Page>;

    /**
     * Update company with given info, only updating the fields supplied. Company Uuid must be sent however.
     * @summary Update Company
     * @param {string} companyUuid 
     * @param {CompanyBase} companyBase 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CompaniesApiInterface
     */
    updateCompanyPlacesCompaniesCompanyUuidPutRaw(requestParameters: UpdateCompanyPlacesCompaniesCompanyUuidPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CompanyResponse>>;

    /**
     * Update company with given info, only updating the fields supplied. Company Uuid must be sent however.
     * Update Company
     */
    updateCompanyPlacesCompaniesCompanyUuidPut(requestParameters: UpdateCompanyPlacesCompaniesCompanyUuidPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CompanyResponse>;

}

/**
 * 
 */
export class CompaniesApi extends runtime.BaseAPI implements CompaniesApiInterface {

    /**
     * Creates a company
     * Create Company
     */
    async createCompanyPlacesCompaniesPostRaw(requestParameters: CreateCompanyPlacesCompaniesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CompanyResponse>> {
        if (requestParameters.companyBase === null || requestParameters.companyBase === undefined) {
            throw new runtime.RequiredError('companyBase','Required parameter requestParameters.companyBase was null or undefined when calling createCompanyPlacesCompaniesPost.');
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
            path: `/places/companies`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CompanyBaseToJSON(requestParameters.companyBase),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CompanyResponseFromJSON(jsonValue));
    }

    /**
     * Creates a company
     * Create Company
     */
    async createCompanyPlacesCompaniesPost(requestParameters: CreateCompanyPlacesCompaniesPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CompanyResponse> {
        const response = await this.createCompanyPlacesCompaniesPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes the company with the given ID and returns True if successful
     * Delete Place
     */
    async deletePlacePlacesCompaniesCompanyUuidDeleteRaw(requestParameters: DeletePlacePlacesCompaniesCompanyUuidDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.companyUuid === null || requestParameters.companyUuid === undefined) {
            throw new runtime.RequiredError('companyUuid','Required parameter requestParameters.companyUuid was null or undefined when calling deletePlacePlacesCompaniesCompanyUuidDelete.');
        }

        const queryParameters: any = {};

        if (requestParameters.softDelete !== undefined) {
            queryParameters['soft_delete'] = requestParameters.softDelete;
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
            path: `/places/companies/{company_uuid}`.replace(`{${"company_uuid"}}`, encodeURIComponent(String(requestParameters.companyUuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Deletes the company with the given ID and returns True if successful
     * Delete Place
     */
    async deletePlacePlacesCompaniesCompanyUuidDelete(requestParameters: DeletePlacePlacesCompaniesCompanyUuidDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.deletePlacePlacesCompaniesCompanyUuidDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets the company information given the Place ID
     * Get Company
     */
    async getCompanyPlacesCompaniesCompanyUuidGetRaw(requestParameters: GetCompanyPlacesCompaniesCompanyUuidGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CompanyResponse>> {
        if (requestParameters.companyUuid === null || requestParameters.companyUuid === undefined) {
            throw new runtime.RequiredError('companyUuid','Required parameter requestParameters.companyUuid was null or undefined when calling getCompanyPlacesCompaniesCompanyUuidGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.withMeta !== undefined) {
            queryParameters['with_meta'] = requestParameters.withMeta;
        }

        if (requestParameters.withCatalog !== undefined) {
            queryParameters['with_catalog'] = requestParameters.withCatalog;
        }

        if (requestParameters.withReviews !== undefined) {
            queryParameters['with_reviews'] = requestParameters.withReviews;
        }

        if (requestParameters.withSchedule !== undefined) {
            queryParameters['with_schedule'] = requestParameters.withSchedule;
        }

        if (requestParameters.withBlog !== undefined) {
            queryParameters['with_blog'] = requestParameters.withBlog;
        }

        if (requestParameters.withTags !== undefined) {
            queryParameters['with_tags'] = requestParameters.withTags;
        }

        if (requestParameters.withCategories !== undefined) {
            queryParameters['with_categories'] = requestParameters.withCategories;
        }

        if (requestParameters.withPlaces !== undefined) {
            queryParameters['with_places'] = requestParameters.withPlaces;
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
            path: `/places/companies/{company_uuid}`.replace(`{${"company_uuid"}}`, encodeURIComponent(String(requestParameters.companyUuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CompanyResponseFromJSON(jsonValue));
    }

    /**
     * Gets the company information given the Place ID
     * Get Company
     */
    async getCompanyPlacesCompaniesCompanyUuidGet(requestParameters: GetCompanyPlacesCompaniesCompanyUuidGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CompanyResponse> {
        const response = await this.getCompanyPlacesCompaniesCompanyUuidGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search all companies and returns paginated results with Companies being stored in items field. Can search by `project_uuid, name, email` string fields or the `is_public and is_deleted` boolean fields. To search with these fields use query params with string values. For sorting fill out \"sort_desc\" field with either true/false and the \"sort_on\" query parameter with column you want to sort on (ex: name). Max pagination items per page is 50. Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      meta_uuid                           **type:** string or None      catalog_data                        **type:** dict or None      review_group_data                   **type:** dict or None      schedule_data                       **type:** dict or None      blog_data                           **type:** dict or None      tags                                **type:** [TagBase] or None      categories                          **type:** [CategoryBase] or None      places                              **type:** PlaceBase or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * Search Companies
     */
    async searchCompaniesPlacesCompaniesGetRaw(requestParameters: SearchCompaniesPlacesCompaniesGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Page>> {
        const queryParameters: any = {};

        if (requestParameters.projectUuid !== undefined) {
            queryParameters['project_uuid'] = requestParameters.projectUuid;
        }

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.email !== undefined) {
            queryParameters['email'] = requestParameters.email;
        }

        if (requestParameters.isPublic !== undefined) {
            queryParameters['is_public'] = requestParameters.isPublic;
        }

        if (requestParameters.isDeleted !== undefined) {
            queryParameters['is_deleted'] = requestParameters.isDeleted;
        }

        if (requestParameters.withPlaces !== undefined) {
            queryParameters['with_places'] = requestParameters.withPlaces;
        }

        if (requestParameters.withMeta !== undefined) {
            queryParameters['with_meta'] = requestParameters.withMeta;
        }

        if (requestParameters.withCatalog !== undefined) {
            queryParameters['with_catalog'] = requestParameters.withCatalog;
        }

        if (requestParameters.withReviews !== undefined) {
            queryParameters['with_reviews'] = requestParameters.withReviews;
        }

        if (requestParameters.withSchedule !== undefined) {
            queryParameters['with_schedule'] = requestParameters.withSchedule;
        }

        if (requestParameters.withBlog !== undefined) {
            queryParameters['with_blog'] = requestParameters.withBlog;
        }

        if (requestParameters.withTags !== undefined) {
            queryParameters['with_tags'] = requestParameters.withTags;
        }

        if (requestParameters.withCategories !== undefined) {
            queryParameters['with_categories'] = requestParameters.withCategories;
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
            path: `/places/companies`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PageFromJSON(jsonValue));
    }

    /**
     * Search all companies and returns paginated results with Companies being stored in items field. Can search by `project_uuid, name, email` string fields or the `is_public and is_deleted` boolean fields. To search with these fields use query params with string values. For sorting fill out \"sort_desc\" field with either true/false and the \"sort_on\" query parameter with column you want to sort on (ex: name). Max pagination items per page is 50. Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      meta_uuid                           **type:** string or None      catalog_data                        **type:** dict or None      review_group_data                   **type:** dict or None      schedule_data                       **type:** dict or None      blog_data                           **type:** dict or None      tags                                **type:** [TagBase] or None      categories                          **type:** [CategoryBase] or None      places                              **type:** PlaceBase or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * Search Companies
     */
    async searchCompaniesPlacesCompaniesGet(requestParameters: SearchCompaniesPlacesCompaniesGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Page> {
        const response = await this.searchCompaniesPlacesCompaniesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update company with given info, only updating the fields supplied. Company Uuid must be sent however.
     * Update Company
     */
    async updateCompanyPlacesCompaniesCompanyUuidPutRaw(requestParameters: UpdateCompanyPlacesCompaniesCompanyUuidPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CompanyResponse>> {
        if (requestParameters.companyUuid === null || requestParameters.companyUuid === undefined) {
            throw new runtime.RequiredError('companyUuid','Required parameter requestParameters.companyUuid was null or undefined when calling updateCompanyPlacesCompaniesCompanyUuidPut.');
        }

        if (requestParameters.companyBase === null || requestParameters.companyBase === undefined) {
            throw new runtime.RequiredError('companyBase','Required parameter requestParameters.companyBase was null or undefined when calling updateCompanyPlacesCompaniesCompanyUuidPut.');
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
            path: `/places/companies/{company_uuid}`.replace(`{${"company_uuid"}}`, encodeURIComponent(String(requestParameters.companyUuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CompanyBaseToJSON(requestParameters.companyBase),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CompanyResponseFromJSON(jsonValue));
    }

    /**
     * Update company with given info, only updating the fields supplied. Company Uuid must be sent however.
     * Update Company
     */
    async updateCompanyPlacesCompaniesCompanyUuidPut(requestParameters: UpdateCompanyPlacesCompaniesCompanyUuidPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CompanyResponse> {
        const response = await this.updateCompanyPlacesCompaniesCompanyUuidPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
