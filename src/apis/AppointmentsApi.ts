/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.109
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.109
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    AppointmentBase,
    AppointmentBaseFromJSON,
    AppointmentBaseToJSON,
    AppointmentResponse,
    AppointmentResponseFromJSON,
    AppointmentResponseToJSON,
    GetAppointment403Response,
    GetAppointment403ResponseFromJSON,
    GetAppointment403ResponseToJSON,
    HTTPValidationError,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
} from '../models';

export interface AddEntityToAppointmentRequest {
    appointmentUuid: string;
    entityUuid: string;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface CreateAppointmentRequest {
    appointmentBase: AppointmentBase;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface DeleteAppointmentRequest {
    appointmentUuid: string;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface DetachEntityFromAppointmentRequest {
    appointmentUuid: string;
    entityUuid: string;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface GetAppointmentRequest {
    appointmentUuid: string;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface SearchAppointmentRequest {
    placeUuid?: string;
    excludeCancelled?: boolean;
    isDeleted?: boolean;
    startRange?: string;
    endRange?: string;
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

export interface SearchAppointmentEntitiesRequest {
    appointmentUuid: string;
    page?: number;
    pageSize?: number;
    sortOn?: string;
    sortDesc?: boolean;
    search?: string;
    searchOn?: string;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface SearchEntityAppointmentsRequest {
    entityUuid: string;
    startDate?: string;
    endDate?: string;
    excludeCancelled?: boolean;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface UpdateAppointmentRequest {
    appointmentUuid: string;
    appointmentBase: AppointmentBase;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

/**
 * AppointmentsApi - interface
 * 
 * @export
 * @interface AppointmentsApiInterface
 */
export interface AppointmentsApiInterface {
    /**
     * 
     * @summary Addentitytoappointment
     * @param {string} appointmentUuid 
     * @param {string} entityUuid 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppointmentsApiInterface
     */
    addEntityToAppointmentRaw(requestParameters: AddEntityToAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<boolean>>;

    /**
     * Addentitytoappointment
     */
    addEntityToAppointment(requestParameters: AddEntityToAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<boolean>;

    /**
     * 
     * @summary Createappointment
     * @param {AppointmentBase} appointmentBase 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppointmentsApiInterface
     */
    createAppointmentRaw(requestParameters: CreateAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<AppointmentResponse>>;

    /**
     * Createappointment
     */
    createAppointment(requestParameters: CreateAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<AppointmentResponse>;

    /**
     * 
     * @summary Deleteappointment
     * @param {string} appointmentUuid 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppointmentsApiInterface
     */
    deleteAppointmentRaw(requestParameters: DeleteAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<boolean>>;

    /**
     * Deleteappointment
     */
    deleteAppointment(requestParameters: DeleteAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<boolean>;

    /**
     * 
     * @summary Removeentityfromappointment
     * @param {string} appointmentUuid 
     * @param {string} entityUuid 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppointmentsApiInterface
     */
    detachEntityFromAppointmentRaw(requestParameters: DetachEntityFromAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<boolean>>;

    /**
     * Removeentityfromappointment
     */
    detachEntityFromAppointment(requestParameters: DetachEntityFromAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<boolean>;

    /**
     * 
     * @summary Getappointment
     * @param {string} appointmentUuid 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppointmentsApiInterface
     */
    getAppointmentRaw(requestParameters: GetAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<AppointmentResponse>>;

    /**
     * Getappointment
     */
    getAppointment(requestParameters: GetAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<AppointmentResponse>;

    /**
     * 
     * @summary Searchappointments
     * @param {string} [placeUuid] 
     * @param {boolean} [excludeCancelled] 
     * @param {boolean} [isDeleted] 
     * @param {string} [startRange] 
     * @param {string} [endRange] 
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
     * @memberof AppointmentsApiInterface
     */
    searchAppointmentRaw(requestParameters: SearchAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<any>>;

    /**
     * Searchappointments
     */
    searchAppointment(requestParameters: SearchAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<any>;

    /**
     * 
     * @summary Searchappointmententities
     * @param {string} appointmentUuid 
     * @param {number} [page] 
     * @param {number} [pageSize] 
     * @param {string} [sortOn] 
     * @param {boolean} [sortDesc] 
     * @param {string} [search] 
     * @param {string} [searchOn] 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppointmentsApiInterface
     */
    searchAppointmentEntitiesRaw(requestParameters: SearchAppointmentEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<any>>;

    /**
     * Searchappointmententities
     */
    searchAppointmentEntities(requestParameters: SearchAppointmentEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<any>;

    /**
     * 
     * @summary Getentityappointments
     * @param {string} entityUuid 
     * @param {string} [startDate] 
     * @param {string} [endDate] 
     * @param {boolean} [excludeCancelled] 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppointmentsApiInterface
     */
    searchEntityAppointmentsRaw(requestParameters: SearchEntityAppointmentsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<any>>;

    /**
     * Getentityappointments
     */
    searchEntityAppointments(requestParameters: SearchEntityAppointmentsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<any>;

    /**
     * 
     * @summary Updateappointment
     * @param {string} appointmentUuid 
     * @param {AppointmentBase} appointmentBase 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AppointmentsApiInterface
     */
    updateAppointmentRaw(requestParameters: UpdateAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<AppointmentResponse>>;

    /**
     * Updateappointment
     */
    updateAppointment(requestParameters: UpdateAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<AppointmentResponse>;

}

/**
 * 
 */
export class AppointmentsApi extends runtime.BaseAPI implements AppointmentsApiInterface {

    /**
     * Addentitytoappointment
     */
    async addEntityToAppointmentRaw(requestParameters: AddEntityToAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.appointmentUuid === null || requestParameters.appointmentUuid === undefined) {
            throw new runtime.RequiredError('appointmentUuid','Required parameter requestParameters.appointmentUuid was null or undefined when calling addEntityToAppointment.');
        }

        if (requestParameters.entityUuid === null || requestParameters.entityUuid === undefined) {
            throw new runtime.RequiredError('entityUuid','Required parameter requestParameters.entityUuid was null or undefined when calling addEntityToAppointment.');
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
            path: `/appointments/appointments/{appointment_uuid}/entities/{entity_uuid}`.replace(`{${"appointment_uuid"}}`, encodeURIComponent(String(requestParameters.appointmentUuid))).replace(`{${"entity_uuid"}}`, encodeURIComponent(String(requestParameters.entityUuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Addentitytoappointment
     */
    async addEntityToAppointment(requestParameters: AddEntityToAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<boolean> {
        const response = await this.addEntityToAppointmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Createappointment
     */
    async createAppointmentRaw(requestParameters: CreateAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<AppointmentResponse>> {
        if (requestParameters.appointmentBase === null || requestParameters.appointmentBase === undefined) {
            throw new runtime.RequiredError('appointmentBase','Required parameter requestParameters.appointmentBase was null or undefined when calling createAppointment.');
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
            path: `/appointments/appointments`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AppointmentBaseToJSON(requestParameters.appointmentBase),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppointmentResponseFromJSON(jsonValue));
    }

    /**
     * Createappointment
     */
    async createAppointment(requestParameters: CreateAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<AppointmentResponse> {
        const response = await this.createAppointmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Deleteappointment
     */
    async deleteAppointmentRaw(requestParameters: DeleteAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.appointmentUuid === null || requestParameters.appointmentUuid === undefined) {
            throw new runtime.RequiredError('appointmentUuid','Required parameter requestParameters.appointmentUuid was null or undefined when calling deleteAppointment.');
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
            path: `/appointments/appointments/{appointment_uuid}`.replace(`{${"appointment_uuid"}}`, encodeURIComponent(String(requestParameters.appointmentUuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Deleteappointment
     */
    async deleteAppointment(requestParameters: DeleteAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<boolean> {
        const response = await this.deleteAppointmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Removeentityfromappointment
     */
    async detachEntityFromAppointmentRaw(requestParameters: DetachEntityFromAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.appointmentUuid === null || requestParameters.appointmentUuid === undefined) {
            throw new runtime.RequiredError('appointmentUuid','Required parameter requestParameters.appointmentUuid was null or undefined when calling detachEntityFromAppointment.');
        }

        if (requestParameters.entityUuid === null || requestParameters.entityUuid === undefined) {
            throw new runtime.RequiredError('entityUuid','Required parameter requestParameters.entityUuid was null or undefined when calling detachEntityFromAppointment.');
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
            path: `/appointments/appointments/{appointment_uuid}/entities/{entity_uuid}`.replace(`{${"appointment_uuid"}}`, encodeURIComponent(String(requestParameters.appointmentUuid))).replace(`{${"entity_uuid"}}`, encodeURIComponent(String(requestParameters.entityUuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Removeentityfromappointment
     */
    async detachEntityFromAppointment(requestParameters: DetachEntityFromAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<boolean> {
        const response = await this.detachEntityFromAppointmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Getappointment
     */
    async getAppointmentRaw(requestParameters: GetAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<AppointmentResponse>> {
        if (requestParameters.appointmentUuid === null || requestParameters.appointmentUuid === undefined) {
            throw new runtime.RequiredError('appointmentUuid','Required parameter requestParameters.appointmentUuid was null or undefined when calling getAppointment.');
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
            path: `/appointments/appointments/{appointment_uuid}`.replace(`{${"appointment_uuid"}}`, encodeURIComponent(String(requestParameters.appointmentUuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppointmentResponseFromJSON(jsonValue));
    }

    /**
     * Getappointment
     */
    async getAppointment(requestParameters: GetAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<AppointmentResponse> {
        const response = await this.getAppointmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Searchappointments
     */
    async searchAppointmentRaw(requestParameters: SearchAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<any>> {
        const queryParameters: any = {};

        if (requestParameters.placeUuid !== undefined) {
            queryParameters['place_uuid'] = requestParameters.placeUuid;
        }

        if (requestParameters.excludeCancelled !== undefined) {
            queryParameters['exclude_cancelled'] = requestParameters.excludeCancelled;
        }

        if (requestParameters.isDeleted !== undefined) {
            queryParameters['is_deleted'] = requestParameters.isDeleted;
        }

        if (requestParameters.startRange !== undefined) {
            queryParameters['start_range'] = requestParameters.startRange;
        }

        if (requestParameters.endRange !== undefined) {
            queryParameters['end_range'] = requestParameters.endRange;
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
            path: `/appointments/appointments`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Searchappointments
     */
    async searchAppointment(requestParameters: SearchAppointmentRequest = {}, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<any> {
        const response = await this.searchAppointmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Searchappointmententities
     */
    async searchAppointmentEntitiesRaw(requestParameters: SearchAppointmentEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.appointmentUuid === null || requestParameters.appointmentUuid === undefined) {
            throw new runtime.RequiredError('appointmentUuid','Required parameter requestParameters.appointmentUuid was null or undefined when calling searchAppointmentEntities.');
        }

        const queryParameters: any = {};

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

        if (requestParameters.search !== undefined) {
            queryParameters['search'] = requestParameters.search;
        }

        if (requestParameters.searchOn !== undefined) {
            queryParameters['search_on'] = requestParameters.searchOn;
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
            path: `/appointments/appointments/{appointment_uuid}/entities`.replace(`{${"appointment_uuid"}}`, encodeURIComponent(String(requestParameters.appointmentUuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Searchappointmententities
     */
    async searchAppointmentEntities(requestParameters: SearchAppointmentEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<any> {
        const response = await this.searchAppointmentEntitiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Getentityappointments
     */
    async searchEntityAppointmentsRaw(requestParameters: SearchEntityAppointmentsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.entityUuid === null || requestParameters.entityUuid === undefined) {
            throw new runtime.RequiredError('entityUuid','Required parameter requestParameters.entityUuid was null or undefined when calling searchEntityAppointments.');
        }

        const queryParameters: any = {};

        if (requestParameters.startDate !== undefined) {
            queryParameters['start_date'] = requestParameters.startDate;
        }

        if (requestParameters.endDate !== undefined) {
            queryParameters['end_date'] = requestParameters.endDate;
        }

        if (requestParameters.excludeCancelled !== undefined) {
            queryParameters['exclude_cancelled'] = requestParameters.excludeCancelled;
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
            path: `/appointments/appointments/entities/{entity_uuid}/appointments`.replace(`{${"entity_uuid"}}`, encodeURIComponent(String(requestParameters.entityUuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Getentityappointments
     */
    async searchEntityAppointments(requestParameters: SearchEntityAppointmentsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<any> {
        const response = await this.searchEntityAppointmentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updateappointment
     */
    async updateAppointmentRaw(requestParameters: UpdateAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<AppointmentResponse>> {
        if (requestParameters.appointmentUuid === null || requestParameters.appointmentUuid === undefined) {
            throw new runtime.RequiredError('appointmentUuid','Required parameter requestParameters.appointmentUuid was null or undefined when calling updateAppointment.');
        }

        if (requestParameters.appointmentBase === null || requestParameters.appointmentBase === undefined) {
            throw new runtime.RequiredError('appointmentBase','Required parameter requestParameters.appointmentBase was null or undefined when calling updateAppointment.');
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
            path: `/appointments/appointments/{appointment_uuid}`.replace(`{${"appointment_uuid"}}`, encodeURIComponent(String(requestParameters.appointmentUuid))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: AppointmentBaseToJSON(requestParameters.appointmentBase),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AppointmentResponseFromJSON(jsonValue));
    }

    /**
     * Updateappointment
     */
    async updateAppointment(requestParameters: UpdateAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<AppointmentResponse> {
        const response = await this.updateAppointmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
