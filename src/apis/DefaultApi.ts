/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.103
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.103
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AppointmentBase,
  AppointmentResponse,
  HTTPValidationError,
} from '../models';
import {
    AppointmentBaseFromJSON,
    AppointmentBaseToJSON,
    AppointmentResponseFromJSON,
    AppointmentResponseToJSON,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
} from '../models';

export interface AttachEntityToAppointmentRequest {
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
    search?: string;
    searchOn?: string;
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
    includeCancelled?: boolean;
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
 * DefaultApi - interface
 * 
 * @export
 * @interface DefaultApiInterface
 */
export interface DefaultApiInterface {
    /**
     * 
     * @summary Attach Entity To Appointment
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
     * @memberof DefaultApiInterface
     */
    attachEntityToAppointmentRaw(requestParameters: AttachEntityToAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;

    /**
     * Attach Entity To Appointment
     */
    attachEntityToAppointment(requestParameters: AttachEntityToAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;

    /**
     * 
     * @summary Create Appointment
     * @param {AppointmentBase} appointmentBase 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    createAppointmentRaw(requestParameters: CreateAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppointmentResponse>>;

    /**
     * Create Appointment
     */
    createAppointment(requestParameters: CreateAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppointmentResponse>;

    /**
     * 
     * @summary Delete Appointment
     * @param {string} appointmentUuid 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    deleteAppointmentRaw(requestParameters: DeleteAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;

    /**
     * Delete Appointment
     */
    deleteAppointment(requestParameters: DeleteAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;

    /**
     * 
     * @summary Detach Entity From Appointment
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
     * @memberof DefaultApiInterface
     */
    detachEntityFromAppointmentRaw(requestParameters: DetachEntityFromAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>>;

    /**
     * Detach Entity From Appointment
     */
    detachEntityFromAppointment(requestParameters: DetachEntityFromAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean>;

    /**
     * 
     * @summary Get Appointment
     * @param {string} appointmentUuid 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getAppointmentRaw(requestParameters: GetAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppointmentResponse>>;

    /**
     * Get Appointment
     */
    getAppointment(requestParameters: GetAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppointmentResponse>;

    /**
     * 
     * @summary Search Appointment
     * @param {string} [placeUuid] 
     * @param {boolean} [excludeCancelled] 
     * @param {boolean} [isDeleted] 
     * @param {string} [startRange] 
     * @param {string} [endRange] 
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
     * @memberof DefaultApiInterface
     */
    searchAppointmentRaw(requestParameters: SearchAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;

    /**
     * Search Appointment
     */
    searchAppointment(requestParameters: SearchAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;

    /**
     * 
     * @summary Search Appointment Entities
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
     * @memberof DefaultApiInterface
     */
    searchAppointmentEntitiesRaw(requestParameters: SearchAppointmentEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;

    /**
     * Search Appointment Entities
     */
    searchAppointmentEntities(requestParameters: SearchAppointmentEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;

    /**
     * 
     * @summary Get Entities Appointments
     * @param {string} entityUuid 
     * @param {string} [startDate] 
     * @param {string} [endDate] 
     * @param {boolean} [includeCancelled] 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    searchEntityAppointmentsRaw(requestParameters: SearchEntityAppointmentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;

    /**
     * Get Entities Appointments
     */
    searchEntityAppointments(requestParameters: SearchEntityAppointmentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;

    /**
     * 
     * @summary Update Appointment
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
     * @memberof DefaultApiInterface
     */
    updateAppointmentRaw(requestParameters: UpdateAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppointmentResponse>>;

    /**
     * Update Appointment
     */
    updateAppointment(requestParameters: UpdateAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppointmentResponse>;

}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI implements DefaultApiInterface {

    /**
     * Attach Entity To Appointment
     */
    async attachEntityToAppointmentRaw(requestParameters: AttachEntityToAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
        if (requestParameters.appointmentUuid === null || requestParameters.appointmentUuid === undefined) {
            throw new runtime.RequiredError('appointmentUuid','Required parameter requestParameters.appointmentUuid was null or undefined when calling attachEntityToAppointment.');
        }

        if (requestParameters.entityUuid === null || requestParameters.entityUuid === undefined) {
            throw new runtime.RequiredError('entityUuid','Required parameter requestParameters.entityUuid was null or undefined when calling attachEntityToAppointment.');
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
     * Attach Entity To Appointment
     */
    async attachEntityToAppointment(requestParameters: AttachEntityToAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.attachEntityToAppointmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create Appointment
     */
    async createAppointmentRaw(requestParameters: CreateAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppointmentResponse>> {
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
     * Create Appointment
     */
    async createAppointment(requestParameters: CreateAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppointmentResponse> {
        const response = await this.createAppointmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete Appointment
     */
    async deleteAppointmentRaw(requestParameters: DeleteAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
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
     * Delete Appointment
     */
    async deleteAppointment(requestParameters: DeleteAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.deleteAppointmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Detach Entity From Appointment
     */
    async detachEntityFromAppointmentRaw(requestParameters: DetachEntityFromAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<boolean>> {
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
     * Detach Entity From Appointment
     */
    async detachEntityFromAppointment(requestParameters: DetachEntityFromAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<boolean> {
        const response = await this.detachEntityFromAppointmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Appointment
     */
    async getAppointmentRaw(requestParameters: GetAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppointmentResponse>> {
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
     * Get Appointment
     */
    async getAppointment(requestParameters: GetAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppointmentResponse> {
        const response = await this.getAppointmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search Appointment
     */
    async searchAppointmentRaw(requestParameters: SearchAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
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
            path: `/appointments/appointments`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Search Appointment
     */
    async searchAppointment(requestParameters: SearchAppointmentRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.searchAppointmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Search Appointment Entities
     */
    async searchAppointmentEntitiesRaw(requestParameters: SearchAppointmentEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
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
     * Search Appointment Entities
     */
    async searchAppointmentEntities(requestParameters: SearchAppointmentEntitiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.searchAppointmentEntitiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get Entities Appointments
     */
    async searchEntityAppointmentsRaw(requestParameters: SearchEntityAppointmentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
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

        if (requestParameters.includeCancelled !== undefined) {
            queryParameters['include_cancelled'] = requestParameters.includeCancelled;
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
     * Get Entities Appointments
     */
    async searchEntityAppointments(requestParameters: SearchEntityAppointmentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.searchEntityAppointmentsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update Appointment
     */
    async updateAppointmentRaw(requestParameters: UpdateAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AppointmentResponse>> {
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
     * Update Appointment
     */
    async updateAppointment(requestParameters: UpdateAppointmentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AppointmentResponse> {
        const response = await this.updateAppointmentRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
