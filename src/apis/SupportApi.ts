/* tslint:disable */
/* eslint-disable */
/**
 * eHelply SDK - 1.1.111
 * eHelply SDK for SuperStack Services
 *
 * The version of the OpenAPI document: 1.1.111
 * Contact: support@ehelply.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Contact,
    ContactFromJSON,
    ContactToJSON,
    ContactResponse,
    ContactResponseFromJSON,
    ContactResponseToJSON,
    CreateTicket,
    CreateTicketFromJSON,
    CreateTicketToJSON,
    GetAppointment403Response,
    GetAppointment403ResponseFromJSON,
    GetAppointment403ResponseToJSON,
    HTTPValidationError,
    HTTPValidationErrorFromJSON,
    HTTPValidationErrorToJSON,
    TicketResponse,
    TicketResponseFromJSON,
    TicketResponseToJSON,
    TicketsResponse,
    TicketsResponseFromJSON,
    TicketsResponseToJSON,
} from '../models';

export interface CreateContactRequest {
    contact: Contact;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface CreateTicketRequest {
    projectUuid: string;
    memberUuid: string;
    createTicket: CreateTicket;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface ListTicketsRequest {
    projectUuid: string;
    memberUuid: string;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface UpdateTicketRequest {
    projectUuid: string;
    memberUuid: string;
    ticketId: string;
    createTicket: CreateTicket;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

export interface ViewTicketRequest {
    projectUuid: string;
    memberUuid: string;
    ticketId: string;
    xAccessToken?: string;
    xSecretToken?: string;
    authorization?: string;
    ehelplyActiveParticipant?: string;
    ehelplyProject?: string;
    ehelplyData?: string;
}

/**
 * SupportApi - interface
 * 
 * @export
 * @interface SupportApiInterface
 */
export interface SupportApiInterface {
    /**
     * 
     * @summary Createcontact
     * @param {Contact} contact 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SupportApiInterface
     */
    createContactRaw(requestParameters: CreateContactRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ContactResponse>>;

    /**
     * Createcontact
     */
    createContact(requestParameters: CreateContactRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ContactResponse>;

    /**
     * 
     * @summary Createticket
     * @param {string} projectUuid 
     * @param {string} memberUuid 
     * @param {CreateTicket} createTicket 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SupportApiInterface
     */
    createTicketRaw(requestParameters: CreateTicketRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<TicketResponse>>;

    /**
     * Createticket
     */
    createTicket(requestParameters: CreateTicketRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<TicketResponse>;

    /**
     * 
     * @summary Listtickets
     * @param {string} projectUuid 
     * @param {string} memberUuid 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SupportApiInterface
     */
    listTicketsRaw(requestParameters: ListTicketsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<TicketsResponse>>>;

    /**
     * Listtickets
     */
    listTickets(requestParameters: ListTicketsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<TicketsResponse>>;

    /**
     * 
     * @summary Updateticket
     * @param {string} projectUuid 
     * @param {string} memberUuid 
     * @param {string} ticketId 
     * @param {CreateTicket} createTicket 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SupportApiInterface
     */
    updateTicketRaw(requestParameters: UpdateTicketRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<TicketResponse>>;

    /**
     * Updateticket
     */
    updateTicket(requestParameters: UpdateTicketRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<TicketResponse>;

    /**
     * 
     * @summary Viewticket
     * @param {string} projectUuid 
     * @param {string} memberUuid 
     * @param {string} ticketId 
     * @param {string} [xAccessToken] 
     * @param {string} [xSecretToken] 
     * @param {string} [authorization] 
     * @param {string} [ehelplyActiveParticipant] 
     * @param {string} [ehelplyProject] 
     * @param {string} [ehelplyData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SupportApiInterface
     */
    viewTicketRaw(requestParameters: ViewTicketRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<TicketResponse>>;

    /**
     * Viewticket
     */
    viewTicket(requestParameters: ViewTicketRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<TicketResponse>;

}

/**
 * 
 */
export class SupportApi extends runtime.BaseAPI implements SupportApiInterface {

    /**
     * Createcontact
     */
    async createContactRaw(requestParameters: CreateContactRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<ContactResponse>> {
        if (requestParameters.contact === null || requestParameters.contact === undefined) {
            throw new runtime.RequiredError('contact','Required parameter requestParameters.contact was null or undefined when calling createContact.');
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
            path: `/sam/support/contact`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ContactToJSON(requestParameters.contact),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ContactResponseFromJSON(jsonValue));
    }

    /**
     * Createcontact
     */
    async createContact(requestParameters: CreateContactRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<ContactResponse> {
        const response = await this.createContactRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Createticket
     */
    async createTicketRaw(requestParameters: CreateTicketRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<TicketResponse>> {
        if (requestParameters.projectUuid === null || requestParameters.projectUuid === undefined) {
            throw new runtime.RequiredError('projectUuid','Required parameter requestParameters.projectUuid was null or undefined when calling createTicket.');
        }

        if (requestParameters.memberUuid === null || requestParameters.memberUuid === undefined) {
            throw new runtime.RequiredError('memberUuid','Required parameter requestParameters.memberUuid was null or undefined when calling createTicket.');
        }

        if (requestParameters.createTicket === null || requestParameters.createTicket === undefined) {
            throw new runtime.RequiredError('createTicket','Required parameter requestParameters.createTicket was null or undefined when calling createTicket.');
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
            path: `/sam/support/projects/{project_uuid}/members/{member_uuid}/tickets`.replace(`{${"project_uuid"}}`, encodeURIComponent(String(requestParameters.projectUuid))).replace(`{${"member_uuid"}}`, encodeURIComponent(String(requestParameters.memberUuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateTicketToJSON(requestParameters.createTicket),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TicketResponseFromJSON(jsonValue));
    }

    /**
     * Createticket
     */
    async createTicket(requestParameters: CreateTicketRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<TicketResponse> {
        const response = await this.createTicketRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Listtickets
     */
    async listTicketsRaw(requestParameters: ListTicketsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<TicketsResponse>>> {
        if (requestParameters.projectUuid === null || requestParameters.projectUuid === undefined) {
            throw new runtime.RequiredError('projectUuid','Required parameter requestParameters.projectUuid was null or undefined when calling listTickets.');
        }

        if (requestParameters.memberUuid === null || requestParameters.memberUuid === undefined) {
            throw new runtime.RequiredError('memberUuid','Required parameter requestParameters.memberUuid was null or undefined when calling listTickets.');
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
            path: `/sam/support/projects/{project_uuid}/members/{member_uuid}/tickets`.replace(`{${"project_uuid"}}`, encodeURIComponent(String(requestParameters.projectUuid))).replace(`{${"member_uuid"}}`, encodeURIComponent(String(requestParameters.memberUuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TicketsResponseFromJSON));
    }

    /**
     * Listtickets
     */
    async listTickets(requestParameters: ListTicketsRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<TicketsResponse>> {
        const response = await this.listTicketsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Updateticket
     */
    async updateTicketRaw(requestParameters: UpdateTicketRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<TicketResponse>> {
        if (requestParameters.projectUuid === null || requestParameters.projectUuid === undefined) {
            throw new runtime.RequiredError('projectUuid','Required parameter requestParameters.projectUuid was null or undefined when calling updateTicket.');
        }

        if (requestParameters.memberUuid === null || requestParameters.memberUuid === undefined) {
            throw new runtime.RequiredError('memberUuid','Required parameter requestParameters.memberUuid was null or undefined when calling updateTicket.');
        }

        if (requestParameters.ticketId === null || requestParameters.ticketId === undefined) {
            throw new runtime.RequiredError('ticketId','Required parameter requestParameters.ticketId was null or undefined when calling updateTicket.');
        }

        if (requestParameters.createTicket === null || requestParameters.createTicket === undefined) {
            throw new runtime.RequiredError('createTicket','Required parameter requestParameters.createTicket was null or undefined when calling updateTicket.');
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
            path: `/sam/support/projects/{project_uuid}/members/{member_uuid}/tickets/{ticket_id}`.replace(`{${"project_uuid"}}`, encodeURIComponent(String(requestParameters.projectUuid))).replace(`{${"member_uuid"}}`, encodeURIComponent(String(requestParameters.memberUuid))).replace(`{${"ticket_id"}}`, encodeURIComponent(String(requestParameters.ticketId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CreateTicketToJSON(requestParameters.createTicket),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TicketResponseFromJSON(jsonValue));
    }

    /**
     * Updateticket
     */
    async updateTicket(requestParameters: UpdateTicketRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<TicketResponse> {
        const response = await this.updateTicketRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Viewticket
     */
    async viewTicketRaw(requestParameters: ViewTicketRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<TicketResponse>> {
        if (requestParameters.projectUuid === null || requestParameters.projectUuid === undefined) {
            throw new runtime.RequiredError('projectUuid','Required parameter requestParameters.projectUuid was null or undefined when calling viewTicket.');
        }

        if (requestParameters.memberUuid === null || requestParameters.memberUuid === undefined) {
            throw new runtime.RequiredError('memberUuid','Required parameter requestParameters.memberUuid was null or undefined when calling viewTicket.');
        }

        if (requestParameters.ticketId === null || requestParameters.ticketId === undefined) {
            throw new runtime.RequiredError('ticketId','Required parameter requestParameters.ticketId was null or undefined when calling viewTicket.');
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
            path: `/sam/support/projects/{project_uuid}/members/{member_uuid}/tickets/{ticket_id}`.replace(`{${"project_uuid"}}`, encodeURIComponent(String(requestParameters.projectUuid))).replace(`{${"member_uuid"}}`, encodeURIComponent(String(requestParameters.memberUuid))).replace(`{${"ticket_id"}}`, encodeURIComponent(String(requestParameters.ticketId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TicketResponseFromJSON(jsonValue));
    }

    /**
     * Viewticket
     */
    async viewTicket(requestParameters: ViewTicketRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<TicketResponse> {
        const response = await this.viewTicketRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
