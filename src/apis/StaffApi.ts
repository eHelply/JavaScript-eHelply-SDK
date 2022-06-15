/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.79
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.79
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
    Page,
    PageFromJSON,
    PageToJSON,
    StaffCreate,
    StaffCreateFromJSON,
    StaffCreateToJSON,
    StaffDb,
    StaffDbFromJSON,
    StaffDbToJSON,
    StaffResponse,
    StaffResponseFromJSON,
    StaffResponseToJSON,
} from '../models';

export interface CreateStaffPlacesStaffPostRequest {
    staffCreate: StaffCreate;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface DeleteStaffPlacesStaffStaffUuidDeleteRequest {
    staffUuid: string;
    softDelete?: boolean;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface GetStaffPlacesStaffStaffUuidGetRequest {
    staffUuid: string;
    withPlaces?: boolean;
    withCompanies?: boolean;
    withCatalog?: boolean;
    withSchedule?: boolean;
    withRoles?: boolean;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface SearchStaffPlacesStaffGetRequest {
    projectUuid?: string;
    firstName?: string;
    lastName?: string;
    isDeleted?: boolean;
    withCompanies?: boolean;
    withPlaces?: boolean;
    withSchedule?: boolean;
    withCatalog?: boolean;
    withReviews?: boolean;
    withRoles?: boolean;
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

export interface UpdateStaffPlacesStaffStaffUuidPutRequest {
    staffUuid: string;
    staffCreate: StaffCreate;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

/**
 * StaffApi - interface
 * 
 * @export
 * @interface StaffApiInterface
 */
export interface StaffApiInterface {
    /**
     * Creates a staff member
     * @summary Create Staff
     * @param {StaffCreate} staffCreate 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StaffApiInterface
     */
    createStaffPlacesStaffPostRaw(requestParameters: CreateStaffPlacesStaffPostRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StaffDb>>;

    /**
     * Creates a staff member
     * Create Staff
     */
    createStaffPlacesStaffPost(requestParameters: CreateStaffPlacesStaffPostRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StaffDb>;

    /**
     * Deletes the staff member with the given ID and returns True if successful
     * @summary Delete Staff
     * @param {string} staffUuid 
     * @param {boolean} [softDelete] 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StaffApiInterface
     */
    deleteStaffPlacesStaffStaffUuidDeleteRaw(requestParameters: DeleteStaffPlacesStaffStaffUuidDeleteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<any>>;

    /**
     * Deletes the staff member with the given ID and returns True if successful
     * Delete Staff
     */
    deleteStaffPlacesStaffStaffUuidDelete(requestParameters: DeleteStaffPlacesStaffStaffUuidDeleteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<any>;

    /**
     * Gets the staff member information given the staff ID
     * @summary Get Staff
     * @param {string} staffUuid 
     * @param {boolean} [withPlaces] 
     * @param {boolean} [withCompanies] 
     * @param {boolean} [withCatalog] 
     * @param {boolean} [withSchedule] 
     * @param {boolean} [withRoles] 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StaffApiInterface
     */
    getStaffPlacesStaffStaffUuidGetRaw(requestParameters: GetStaffPlacesStaffStaffUuidGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StaffResponse>>;

    /**
     * Gets the staff member information given the staff ID
     * Get Staff
     */
    getStaffPlacesStaffStaffUuidGet(requestParameters: GetStaffPlacesStaffStaffUuidGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StaffResponse>;

    /**
     * TODO Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      entity                              **type:** string or None      place                               **type:** dict or None      company                             **type:** dict or None      schedule                            **type:** dict or None      catalog                             **type:** dict or None      reviews                             **type:** dict or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * @summary Search Staff
     * @param {string} [projectUuid] 
     * @param {string} [firstName] 
     * @param {string} [lastName] 
     * @param {boolean} [isDeleted] 
     * @param {boolean} [withCompanies] 
     * @param {boolean} [withPlaces] 
     * @param {boolean} [withSchedule] 
     * @param {boolean} [withCatalog] 
     * @param {boolean} [withReviews] 
     * @param {boolean} [withRoles] 
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
     * @memberof StaffApiInterface
     */
    searchStaffPlacesStaffGetRaw(requestParameters: SearchStaffPlacesStaffGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Page>>;

    /**
     * TODO Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      entity                              **type:** string or None      place                               **type:** dict or None      company                             **type:** dict or None      schedule                            **type:** dict or None      catalog                             **type:** dict or None      reviews                             **type:** dict or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * Search Staff
     */
    searchStaffPlacesStaffGet(requestParameters: SearchStaffPlacesStaffGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Page>;

    /**
     * Update staff with given info, only updating the fields supplied. Staff Uuid must be sent however.
     * @summary Update Staff
     * @param {string} staffUuid 
     * @param {StaffCreate} staffCreate 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StaffApiInterface
     */
    updateStaffPlacesStaffStaffUuidPutRaw(requestParameters: UpdateStaffPlacesStaffStaffUuidPutRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StaffResponse>>;

    /**
     * Update staff with given info, only updating the fields supplied. Staff Uuid must be sent however.
     * Update Staff
     */
    updateStaffPlacesStaffStaffUuidPut(requestParameters: UpdateStaffPlacesStaffStaffUuidPutRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StaffResponse>;

}

/**
 * 
 */
export class StaffApi extends runtime.BaseAPI implements StaffApiInterface {

    /**
     * Creates a staff member
     * Create Staff
     */
    async createStaffPlacesStaffPostRaw(requestParameters: CreateStaffPlacesStaffPostRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StaffDb>> {
        if (requestParameters.staffCreate === null || requestParameters.staffCreate === undefined) {
            throw new runtime.RequiredError('staffCreate','Required parameter requestParameters.staffCreate was null or undefined when calling createStaffPlacesStaffPost.');
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
            path: `/places/staff`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: StaffCreateToJSON(requestParameters.staffCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StaffDbFromJSON(jsonValue));
    }

    /**
     * Creates a staff member
     * Create Staff
     */
    async createStaffPlacesStaffPost(requestParameters: CreateStaffPlacesStaffPostRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StaffDb> {
        const response = await this.createStaffPlacesStaffPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deletes the staff member with the given ID and returns True if successful
     * Delete Staff
     */
    async deleteStaffPlacesStaffStaffUuidDeleteRaw(requestParameters: DeleteStaffPlacesStaffStaffUuidDeleteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.staffUuid === null || requestParameters.staffUuid === undefined) {
            throw new runtime.RequiredError('staffUuid','Required parameter requestParameters.staffUuid was null or undefined when calling deleteStaffPlacesStaffStaffUuidDelete.');
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
            path: `/places/staff/{staff_uuid}`.replace(`{${"staff_uuid"}}`, encodeURIComponent(String(requestParameters.staffUuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Deletes the staff member with the given ID and returns True if successful
     * Delete Staff
     */
    async deleteStaffPlacesStaffStaffUuidDelete(requestParameters: DeleteStaffPlacesStaffStaffUuidDeleteRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<any> {
        const response = await this.deleteStaffPlacesStaffStaffUuidDeleteRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Gets the staff member information given the staff ID
     * Get Staff
     */
    async getStaffPlacesStaffStaffUuidGetRaw(requestParameters: GetStaffPlacesStaffStaffUuidGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StaffResponse>> {
        if (requestParameters.staffUuid === null || requestParameters.staffUuid === undefined) {
            throw new runtime.RequiredError('staffUuid','Required parameter requestParameters.staffUuid was null or undefined when calling getStaffPlacesStaffStaffUuidGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.withPlaces !== undefined) {
            queryParameters['with_places'] = requestParameters.withPlaces;
        }

        if (requestParameters.withCompanies !== undefined) {
            queryParameters['with_companies'] = requestParameters.withCompanies;
        }

        if (requestParameters.withCatalog !== undefined) {
            queryParameters['with_catalog'] = requestParameters.withCatalog;
        }

        if (requestParameters.withSchedule !== undefined) {
            queryParameters['with_schedule'] = requestParameters.withSchedule;
        }

        if (requestParameters.withRoles !== undefined) {
            queryParameters['with_roles'] = requestParameters.withRoles;
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
            path: `/places/staff/{staff_uuid}`.replace(`{${"staff_uuid"}}`, encodeURIComponent(String(requestParameters.staffUuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StaffResponseFromJSON(jsonValue));
    }

    /**
     * Gets the staff member information given the staff ID
     * Get Staff
     */
    async getStaffPlacesStaffStaffUuidGet(requestParameters: GetStaffPlacesStaffStaffUuidGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StaffResponse> {
        const response = await this.getStaffPlacesStaffStaffUuidGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * TODO Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      entity                              **type:** string or None      place                               **type:** dict or None      company                             **type:** dict or None      schedule                            **type:** dict or None      catalog                             **type:** dict or None      reviews                             **type:** dict or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * Search Staff
     */
    async searchStaffPlacesStaffGetRaw(requestParameters: SearchStaffPlacesStaffGetRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Page>> {
        const queryParameters: any = {};

        if (requestParameters.projectUuid !== undefined) {
            queryParameters['project_uuid'] = requestParameters.projectUuid;
        }

        if (requestParameters.firstName !== undefined) {
            queryParameters['first_name'] = requestParameters.firstName;
        }

        if (requestParameters.lastName !== undefined) {
            queryParameters['last_name'] = requestParameters.lastName;
        }

        if (requestParameters.isDeleted !== undefined) {
            queryParameters['is_deleted'] = requestParameters.isDeleted;
        }

        if (requestParameters.withCompanies !== undefined) {
            queryParameters['with_companies'] = requestParameters.withCompanies;
        }

        if (requestParameters.withPlaces !== undefined) {
            queryParameters['with_places'] = requestParameters.withPlaces;
        }

        if (requestParameters.withSchedule !== undefined) {
            queryParameters['with_schedule'] = requestParameters.withSchedule;
        }

        if (requestParameters.withCatalog !== undefined) {
            queryParameters['with_catalog'] = requestParameters.withCatalog;
        }

        if (requestParameters.withReviews !== undefined) {
            queryParameters['with_reviews'] = requestParameters.withReviews;
        }

        if (requestParameters.withRoles !== undefined) {
            queryParameters['with_roles'] = requestParameters.withRoles;
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
            path: `/places/staff`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PageFromJSON(jsonValue));
    }

    /**
     * TODO Item return format: ``` {     uuid                                **type:** string     project_uuid                        **type:** string or None      entity                              **type:** string or None      place                               **type:** dict or None      company                             **type:** dict or None      schedule                            **type:** dict or None      catalog                             **type:** dict or None      reviews                             **type:** dict or None      created_at                          **type:** string or None      updated_at                          **type:** string or None      deleted_at                          **type:** string or None  } ```
     * Search Staff
     */
    async searchStaffPlacesStaffGet(requestParameters: SearchStaffPlacesStaffGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Page> {
        const response = await this.searchStaffPlacesStaffGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update staff with given info, only updating the fields supplied. Staff Uuid must be sent however.
     * Update Staff
     */
    async updateStaffPlacesStaffStaffUuidPutRaw(requestParameters: UpdateStaffPlacesStaffStaffUuidPutRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<StaffResponse>> {
        if (requestParameters.staffUuid === null || requestParameters.staffUuid === undefined) {
            throw new runtime.RequiredError('staffUuid','Required parameter requestParameters.staffUuid was null or undefined when calling updateStaffPlacesStaffStaffUuidPut.');
        }

        if (requestParameters.staffCreate === null || requestParameters.staffCreate === undefined) {
            throw new runtime.RequiredError('staffCreate','Required parameter requestParameters.staffCreate was null or undefined when calling updateStaffPlacesStaffStaffUuidPut.');
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
            path: `/places/staff/{staff_uuid}`.replace(`{${"staff_uuid"}}`, encodeURIComponent(String(requestParameters.staffUuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: StaffCreateToJSON(requestParameters.staffCreate),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => StaffResponseFromJSON(jsonValue));
    }

    /**
     * Update staff with given info, only updating the fields supplied. Staff Uuid must be sent however.
     * Update Staff
     */
    async updateStaffPlacesStaffStaffUuidPut(requestParameters: UpdateStaffPlacesStaffStaffUuidPutRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<StaffResponse> {
        const response = await this.updateStaffPlacesStaffStaffUuidPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
