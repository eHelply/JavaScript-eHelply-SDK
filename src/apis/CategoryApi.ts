/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.118
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.118
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    CategoryBase,
    CategoryBaseFromJSON,
    CategoryBaseToJSON,
    CategoryDb,
    CategoryDbFromJSON,
    CategoryDbToJSON,
    HTTPValidationError,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    Page,
    PageFromJSON,
    PageToJSON,
} from '../models';

export interface CreateCategoryPlacesCategoriesPostRequest {
    categoryBase: CategoryBase;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface DeleteCategoryPlacesCategoriesCategoryUuidDeleteRequest {
    categoryUuid: string;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface GetCategoryPlacesCategoriesCategoryUuidGetRequest {
    categoryUuid: string;
    withMeta?: boolean;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface SearchCategoriesPlacesCategoriesGetRequest {
    projectUuid?: string;
    name?: string;
    withMeta?: boolean;
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

export interface UpdateCategoryPlacesCategoriesCategoryUuidPutRequest {
    categoryUuid: string;
    categoryBase: CategoryBase;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

/**
 * CategoryApi - interface
 * 
 * @export
 * @interface CategoryApiInterface
 */
export interface CategoryApiInterface {
    /**
     * Creates a category
     * @summary Create Category
     * @param {CategoryBase} categoryBase 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoryApiInterface
     */
    createCategoryPlacesCategoriesPostRaw(requestParameters: CreateCategoryPlacesCategoriesPostRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CategoryDb>>;

    /**
     * Creates a category
     * Create Category
     */
    createCategoryPlacesCategoriesPost(requestParameters: CreateCategoryPlacesCategoriesPostRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CategoryDb>;

    /**
     * Deletes the category with the given ID and returns True if successful
     * @summary Delete Category
     * @param {string} categoryUuid 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoryApiInterface
     */
    deleteCategoryPlacesCategoriesCategoryUuidDeleteRaw(requestParameters: DeleteCategoryPlacesCategoriesCategoryUuidDeleteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<any>>;

    /**
     * Deletes the category with the given ID and returns True if successful
     * Delete Category
     */
    deleteCategoryPlacesCategoriesCategoryUuidDelete(requestParameters: DeleteCategoryPlacesCategoriesCategoryUuidDeleteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<any>;

    /**
     * Gets the category information given the category ID
     * @summary Get Category
     * @param {string} categoryUuid 
     * @param {boolean} [withMeta] 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoryApiInterface
     */
    getCategoryPlacesCategoriesCategoryUuidGetRaw(requestParameters: GetCategoryPlacesCategoriesCategoryUuidGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CategoryBase>>;

    /**
     * Gets the category information given the category ID
     * Get Category
     */
    getCategoryPlacesCategoriesCategoryUuidGet(requestParameters: GetCategoryPlacesCategoriesCategoryUuidGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CategoryBase>;

    /**
     * TODO Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      name                                **type:** string or None      meta                                **type:** dict or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * @summary Search Categories
     * @param {string} [projectUuid] 
     * @param {string} [name] 
     * @param {boolean} [withMeta] 
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
     * @memberof CategoryApiInterface
     */
    searchCategoriesPlacesCategoriesGetRaw(requestParameters: SearchCategoriesPlacesCategoriesGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Page>>;

    /**
     * TODO Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      name                                **type:** string or None      meta                                **type:** dict or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * Search Categories
     */
    searchCategoriesPlacesCategoriesGet(requestParameters: SearchCategoriesPlacesCategoriesGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Page>;

    /**
     * Update category with given info, only updating the fields supplied. Category Uuid must be sent however.
     * @summary Update Category
     * @param {string} categoryUuid 
     * @param {CategoryBase} categoryBase 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CategoryApiInterface
     */
    updateCategoryPlacesCategoriesCategoryUuidPutRaw(requestParameters: UpdateCategoryPlacesCategoriesCategoryUuidPutRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CategoryBase>>;

    /**
     * Update category with given info, only updating the fields supplied. Category Uuid must be sent however.
     * Update Category
     */
    updateCategoryPlacesCategoriesCategoryUuidPut(requestParameters: UpdateCategoryPlacesCategoriesCategoryUuidPutRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CategoryBase>;

}

/**
 * 
 */
export class CategoryApi extends runtime.BaseAPI implements CategoryApiInterface {

    /**
     * Creates a category
     * Create Category
     */
    async createCategoryPlacesCategoriesPostRaw(requestParameters: CreateCategoryPlacesCategoriesPostRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CategoryDb>> {
        if (requestParameters.categoryBase === null || requestParameters.categoryBase === undefined) {
            throw new runtime.RequiredError('categoryBase','Required parameter requestParameters.categoryBase was null or undefined when calling createCategoryPlacesCategoriesPost.');
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
            path: `/places/categories`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CategoryBaseToJSON(requestParameters.categoryBase),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CategoryDbFromJSON(jsonValue));
    }

    /**
     * Creates a category
     * Create Category
     */
    async createCategoryPlacesCategoriesPost(requestParameters: CreateCategoryPlacesCategoriesPostRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CategoryDb> {
        const response = await this.createCategoryPlacesCategoriesPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes the category with the given ID and returns True if successful
     * Delete Category
     */
    async deleteCategoryPlacesCategoriesCategoryUuidDeleteRaw(requestParameters: DeleteCategoryPlacesCategoriesCategoryUuidDeleteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.categoryUuid === null || requestParameters.categoryUuid === undefined) {
            throw new runtime.RequiredError('categoryUuid','Required parameter requestParameters.categoryUuid was null or undefined when calling deleteCategoryPlacesCategoriesCategoryUuidDelete.');
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
            path: `/places/categories/{category_uuid}`.replace(`{${"category_uuid"}}`, encodeURIComponent(String(requestParameters.categoryUuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Deletes the category with the given ID and returns True if successful
     * Delete Category
     */
    async deleteCategoryPlacesCategoriesCategoryUuidDelete(requestParameters: DeleteCategoryPlacesCategoriesCategoryUuidDeleteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<any> {
        const response = await this.deleteCategoryPlacesCategoriesCategoryUuidDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets the category information given the category ID
     * Get Category
     */
    async getCategoryPlacesCategoriesCategoryUuidGetRaw(requestParameters: GetCategoryPlacesCategoriesCategoryUuidGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CategoryBase>> {
        if (requestParameters.categoryUuid === null || requestParameters.categoryUuid === undefined) {
            throw new runtime.RequiredError('categoryUuid','Required parameter requestParameters.categoryUuid was null or undefined when calling getCategoryPlacesCategoriesCategoryUuidGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.withMeta !== undefined) {
            queryParameters['with_meta'] = requestParameters.withMeta;
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
            path: `/places/categories/{category_uuid}`.replace(`{${"category_uuid"}}`, encodeURIComponent(String(requestParameters.categoryUuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CategoryBaseFromJSON(jsonValue));
    }

    /**
     * Gets the category information given the category ID
     * Get Category
     */
    async getCategoryPlacesCategoriesCategoryUuidGet(requestParameters: GetCategoryPlacesCategoriesCategoryUuidGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CategoryBase> {
        const response = await this.getCategoryPlacesCategoriesCategoryUuidGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * TODO Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      name                                **type:** string or None      meta                                **type:** dict or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * Search Categories
     */
    async searchCategoriesPlacesCategoriesGetRaw(requestParameters: SearchCategoriesPlacesCategoriesGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Page>> {
        const queryParameters: any = {};

        if (requestParameters.projectUuid !== undefined) {
            queryParameters['project_uuid'] = requestParameters.projectUuid;
        }

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.withMeta !== undefined) {
            queryParameters['with_meta'] = requestParameters.withMeta;
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
            path: `/places/categories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PageFromJSON(jsonValue));
    }

    /**
     * TODO Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      name                                **type:** string or None      meta                                **type:** dict or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * Search Categories
     */
    async searchCategoriesPlacesCategoriesGet(requestParameters: SearchCategoriesPlacesCategoriesGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Page> {
        const response = await this.searchCategoriesPlacesCategoriesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update category with given info, only updating the fields supplied. Category Uuid must be sent however.
     * Update Category
     */
    async updateCategoryPlacesCategoriesCategoryUuidPutRaw(requestParameters: UpdateCategoryPlacesCategoriesCategoryUuidPutRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<CategoryBase>> {
        if (requestParameters.categoryUuid === null || requestParameters.categoryUuid === undefined) {
            throw new runtime.RequiredError('categoryUuid','Required parameter requestParameters.categoryUuid was null or undefined when calling updateCategoryPlacesCategoriesCategoryUuidPut.');
        }

        if (requestParameters.categoryBase === null || requestParameters.categoryBase === undefined) {
            throw new runtime.RequiredError('categoryBase','Required parameter requestParameters.categoryBase was null or undefined when calling updateCategoryPlacesCategoriesCategoryUuidPut.');
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
            path: `/places/categories/{category_uuid}`.replace(`{${"category_uuid"}}`, encodeURIComponent(String(requestParameters.categoryUuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CategoryBaseToJSON(requestParameters.categoryBase),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CategoryBaseFromJSON(jsonValue));
    }

    /**
     * Update category with given info, only updating the fields supplied. Category Uuid must be sent however.
     * Update Category
     */
    async updateCategoryPlacesCategoriesCategoryUuidPut(requestParameters: UpdateCategoryPlacesCategoriesCategoryUuidPutRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<CategoryBase> {
        const response = await this.updateCategoryPlacesCategoriesCategoryUuidPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
